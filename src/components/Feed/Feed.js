import template from './Feed.hbs';
import { Component } from '../Component';

/** Class representing a Feed. */
export class Feed extends Component{
	#configContent;
	#port;
	/**
     * Sets parent and config.
     * @param {HTMLElement} parent
     * @param {Object} configFeed 
	 * @param {Object} configContent 
     */
	constructor(parent, configFeed) {
		super(parent, configFeed);
		this.#port = 'http://82.146.45.164:9000';
	}

	/**
     * Get the configContent.
     * @return {Object} configContent.
     */
	get configContent() {
		return this.#configContent;
	}

	/**
     * Set the configContent.
     * @param {Object} configContent.
     */
	set configContent(config) {
		this.#configContent = config;
	}

	/**
     * Get the content.
     * @return {Object} content.
     */
	get content() {
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
    * Render Feed.
    */
	render() {
		const items = this.items.map((element) => {
			let className = 'feedItem';
			return {...element, className};
		});

		const content = this.content.map((element) => {
			let className = 'contentItem';
			let port = this.#port;
			return {...element, className, port};
		});



		this.$parent.innerHTML = template({items, content});
	}
}
