import template from './SignUp.hbs';

/** Class representing a SignUp. */
export class Signup {
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
     * Render signup page.
     */
	render() {
		const items = this.items.map((element) => {
			let className = 'Signup__input';
			return {...element, className};
		});

		this.#parent.innerHTML = template({items});
	}
}
