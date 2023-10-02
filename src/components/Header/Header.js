import template from './Header.hbs';

/** Class representing a Header. */
export class Header {
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
		return Object.entries(this.config).map(([key, { href, name}]) => ({
			key,
			href,
			name,
		}));
	}

	/**
    * Render header.
    */
	render(isAuth) {
		const items = this.items.map((element) => {
			let className = 'menu__item';
			return {...element, className};
		});

		this.#parent.innerHTML = template({items, isAuth});
	}
}
