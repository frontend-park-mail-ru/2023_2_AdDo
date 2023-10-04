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

			let parsedBody = null;
			try {
				parsedBody = await response.json();
			} catch (e) {
				console.log('response.body is empty!');
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
			
			let parsedBody = null;
			try {
				parsedBody = await response.json();
			} catch (e) {
				console.log('response.body is empty!');
			}
			
			return {
				status: response.status,
				parsedJson: parsedBody,
			};
		}

	}

	window.Ajax = new Ajax();
})();
