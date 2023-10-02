// Демонстрация модулей на IIFE. Это устаревшая концепция, но прекрасно работает до сих пор
(function () {
	
	/**
	*  @constant
	*  @type {Object}
	*/
	const AJAX_METHODS = {
		GET: 'GET',
		POST: 'POST',
	};

	/** Class representing Ajax module. */
	class Ajax {

		/**
		 * Makes get request.
		 * @async
		 * @function get
		 * @param {Object} params
		 * @return {Object} status and parsedJson
		 */
		async get(params = {}) {
			const response = await fetch(params.url, {
				method: AJAX_METHODS.GET,
				mode: 'cors',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
			});

			const parsedBody = null;

			if(response.body !== null) {
				parsedBody = await response.json();
			}

			return {
				status: response.status,
				parsedJson: parsedBody,
			};
		}

		/**
		 * Makes post request.
		 * @async
		 * @function post
		 * @param {Object} params
		 * @return {Object} status and parsedJson
		 */
		async post(params = {}) {
			const response = await fetch(params.url, {
				method: AJAX_METHODS.POST,
				credentials: 'include',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
				body: JSON.stringify(params.body),
			});
			
			const parsedBody = null;

			if(response.body !== null) {
				parsedBody = await response.json();
			}
			
			return {
				status: response.status,
				parsedJson: parsedBody,
			};
		}

	}

	window.Ajax = new Ajax();
})();
