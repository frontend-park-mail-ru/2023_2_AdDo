import template from './Feed.hbs';

/** Class representing a Feed. */
export class Feed {
	#parent;
	#configFeed;
	#configContent;

	/**
     * Sets parent and config.
     * @param {HTMLElement} parent
     * @param {Object} configFeed 
	 * @param {Object} configContent 
     */
	constructor(parent, configFeed, configContent) {
		this.#parent = parent;
		this.#configFeed = configFeed;
		this.#configContent = configContent;
	}

	/**
     * Get the configFeed.
     * @return {Object} configFeed.
     */
	get configFeed() {
		return this.#configFeed;
	}

	/**
     * Get the configContent.
     * @return {Object} configContent.
     */
	get configContent() {
		return this.#configContent;
	}

	set configContent(config) {
		this.#configContent = config;
	}

	/**
     * Get the items.
     * @return {Object} items.
     */
	get items() {
		return Object.entries(this.configFeed).map(([key, { href, name}]) => ({
			key,
			href,
			name, 
		}));
	}

	/**
     * Get the content.
     * @return {Object} content.
     */
	get content() {
		// let a = Object.entries(this.configContent);
		// console.log(a);
		// a.map(([key, {name, }]) => ({

		// }));
		return Object.entries(this.configContent).map(([key, { Name, Artist, Album, Preview, Content}]) => ({
			key,
			Name,
			Artist,
			Album,
			Preview,
			Content
		}));
	}

	/**
    * Render header.
    */
	render() {
		const items = this.items.map((element) => {
			let className = 'feed__item';
			return {...element, className};
		});

		const content = this.content.map((element) => {
			let className = 'content__item';
			return {...element, className};
		});

		this.#parent.innerHTML = template({items, content});
	}
}