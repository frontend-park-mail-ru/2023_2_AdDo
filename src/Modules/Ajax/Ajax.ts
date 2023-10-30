import { requestParamsType, responseType } from './AjaxTypes';

/**
 * @type {Object}
 * @const
 */
const AJAX_METHODS = {
    GET: 'GET',
    POST: 'POST',
};

/**
 * @module Ajax async module to make requests
 */

/** Class representing an Ajax. */
export default class Ajax {
    private static csrfToken?: string;

    /**makes request
     * @param {requestParamsType} params - request parameters
     * @return {Promise<responseType>} 
     */
    private static async fetch(params: requestParamsType): Promise<responseType> {
        console.log(params.options);
        const response = await fetch(params.url, {
            ...params.options
        });

        if(params.url === 'https://musicon.space/api/v1/auth') {
            this.csrfToken = response.headers.get('X-Csrf-Token')!;
        }

        if (!response.ok) {
            return {
                ok: false,
                status: response.status,
                responseBody: 'Error', //TODO : error handling
            };
        }
        let data: any;
        try {
            data = response.status !== 204 ? await response.json() : '';
        } catch (error) {
            console.log(error);
        }
        return {
            ok: true,
            status: response.status,
            responseBody: data,
        };
    }

    /**makes GET request
     *
     * @param {string} url
     * @returns {Promise<responseType>}
     */
    static async get (
        url: string,
    ): Promise<responseType> {
        return this.fetch({
            url: url,
            options: {
                mode: 'cors', 
                credentials: 'include', 
                method: AJAX_METHODS.GET, 
            },
        });
    }

    /** makes POST request
     *
     * @param {string} url
     * @param {Object} body
     * @returns {Promise<responseType>}
     */
    static async post(
        url: string,
        body: Object,
    ): Promise<responseType> {
        return this.fetch({
            url: url,
            options: {
                mode: 'cors', 
                credentials: 'include', 
                method: AJAX_METHODS.POST, 
                headers: {'Content-Type': 'application/json; charset=utf-8', 'X-Csrf-Token': this.csrfToken!}, 
                body: JSON.stringify(body),
            },
        });
    }
}
