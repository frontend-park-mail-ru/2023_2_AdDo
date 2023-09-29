// Демонстрация модулей на IIFE. Это устаревшая концепция, но прекрасно работает до сих пор
(function () {
    const AJAX_METHODS = {
        GET: "GET",
        POST: "POST",
    };

    const noop = () => { };

    class Ajax {
        async get(params = {}) {
            const response = await fetch(params.url, {
                method: AJAX_METHODS.GET,
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            });

            const parsedBody = await response.json();

            return {
                status: response.status,
                parsedJson: parsedBody,
            };
        }

        async post(params = {}) {
            const response = await fetch(params.url, {
                method: AJAX_METHODS.POST,
                credentials: "include",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(params.body),
            });
 
            const parsedBody = await response.json();

            return {
                status: response.status,
                parsedJson: parsedBody,
            };
        }
    }

    window.Ajax = new Ajax();
})();
