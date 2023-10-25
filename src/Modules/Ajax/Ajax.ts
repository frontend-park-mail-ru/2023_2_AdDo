import { log } from 'handlebars';
import { requestParamsType, responseType } from './AjaxTypes';

/**
 * @module Ajax async module to make requests
 */
const AJAX_METHODS = {
    GET: 'GET',
    POST: 'POST',
};

export default class Ajax {
    private static csrfToken?: string;
    private static async fetch(params: requestParamsType, isJson: boolean = true): Promise<responseType> {
        const response = await fetch(params.url, {
            ...params.options
        });

        if(params.url === 'https://musicon.space/api/v1/auth') {
            console.log(response.headers.get('X-Csrf-Token')!);
            this.csrfToken = response.headers.get('X-Csrf-Token')!;
        }

        if (!response.ok) {
            return {
                ok: false,
                status: response.status,
                responseBody: 'Error', //TODO : error handling
            };
        }
        console.log(response);
        let data = isJson ? (response.status !== 204 ? await response.json() : '') : await response.text();

        return {
            ok: true,
            status: response.status,
            responseBody: data,
        };
    }

    /**makes GET request
     *
     * @param {string} url
     * @param {boolean} json - figure out is response is json
     * @returns {Promise<{status: number, body: Object, ok: boolean}>}
     */
    static async get (
        url: string,
        isJson: boolean,
    ): Promise<responseType> {
        return this.fetch({
            url: url,
            options: {
                mode: 'cors', 
                credentials: 'include', 
                method: AJAX_METHODS.GET, 
            },
        }, isJson);
    }

    /** Выполняет POST запрос
     *
     * @param {string} url
     * @param {Object} body
     * @param {boolean} isFormData
     * @returns {Promise<{status: number, body: Object, ok: boolean}>}
     */
    static async post(
        url: string,
        body: Object,
        isFormData = false,
    ): Promise<responseType> {
        return this.fetch({
            url: url,
            options: {
                mode: 'cors', 
                credentials: 'include', 
                method: AJAX_METHODS.POST, 
                headers: {'Content-Type': 'application/json; charset=utf-8', 'X-Csrf-Token': this.csrfToken!}, 
                body: isFormData ? body : JSON.stringify(body),
            },
        });
    }
}
