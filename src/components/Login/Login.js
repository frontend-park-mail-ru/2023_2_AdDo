import template from './Login.hbs';

/** Class representing a Login. */
export class Login {
	#parent;
	#config;

	/**
     * Sets parent and config.
     * @param {HTMLElement} parent
     * @param {Object} config
     */
	constructor(parent, config) {
		this.#parent = parent;
		this.#config = config;
	}

	/**
     * Get the config.
     * @return {Object} config.
     */
	get config() {
		return this.#config;
	}

	/**
     * Get the items.
     * @return {Object} items.
     */
	get items() {
		return Object.entries(this.config).map(([key, {type, text, name}]) => ({
			key,
			type,
			text,
			name, 
		}));
	}

	/**
    * Render login page.
    */
	render() {
		const items = this.items.map((element) => {
			let className = 'login__input';
			return {...element, className};
		});

		this.#parent.innerHTML = template({items});
	}
}