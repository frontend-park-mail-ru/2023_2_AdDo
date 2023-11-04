import { requestParamsType, responseType } from './AjaxTypes';

/**
 * @type {Object}
 * @const
 */
const AJAX_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
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
    private static async fetch(params: requestParamsType, body?: any): Promise<responseType> {
        const headers = new Headers(params.headers);
        if (this.csrfToken) {
            headers.append('X-Csrf-Token', this.csrfToken);
        }
        const response = await fetch(params.url, {
            method: params.method,
            headers,
            body,
            credentials: 'include',
            mode: 'cors',
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
        headers: Object,
    ): Promise<responseType> {
        return this.fetch({
            url: url,
            method: AJAX_METHODS.GET, 
            headers,
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
        headers: Object,
        body: any,
        isFormData: boolean = false,
    ): Promise<responseType> {
        return this.fetch({
            url: url,
            method: AJAX_METHODS.POST,
            headers,
        },
        isFormData? body : JSON.stringify(body),);
    }

    static async put (
        url: string,
        headers: Object,
        body: any,
    ): Promise<responseType> {
        return this.fetch({
            url: url,
            method: AJAX_METHODS.PUT, 
            headers,
        },
        JSON.stringify(body),);
    }

    static async delete (
        url: string,
        headers: Object,
        body: any,
    ): Promise<responseType> {
        return this.fetch({
            url: url,
            method: AJAX_METHODS.DELETE, 
            headers,
        },
        JSON.stringify(body),);
    }
}
