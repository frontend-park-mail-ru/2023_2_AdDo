/** Class representing a Header. */
export class Component {
	$parent;
	$config;
	/**
     * Sets parent and config.
     * @param {HTMLElement} parent
     * @param {Object} config 
     */
	constructor(parent, config) {
		this.$parent = parent;
        this.$config = config;
	}

	/**
     * Get the config.
     * @return {Object} config.
     */
	get config() {
		return this.$config;
	}

	/**
     * Get the config.
     * @return {Object} config.
     */
	set config(config) {
		this.$config = config;
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
}
