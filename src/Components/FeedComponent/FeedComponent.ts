import { Album } from '../../types';
import template from './FeedComponentTemplate.hbs';
import { FeedComponentConfig } from './FeedComponentConst';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';

/** Class representing a FeedComponent. */
export class FeedComponent extends IComponent {
	private content: Array<Album> = [];

	/**
	 * Constructor for the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Album>} content - An array of albums. Default value is an empty array.
	 */
	constructor(parent: HTMLElement, content: Array<Album> = []) {
		super(parent, template({ FeedComponentConfig, content }));
		this.content = content;
	}

	/**
	 * Returns the content of the object as an array of Album objects.
	 *
	 * @return {Array<Album>} - The content of the object as an array of Album objects.
	 */
	public get Content(): Array<Album> {
		return Object.entries(this.content).map(([key, { Id, Name, Preview, ArtistId, ArtistName, Tracks }]) => ({
			Id,
			Name,
			Preview,
			ArtistId,
			ArtistName,
			Tracks
		}));
	}

	/**
	 * Sets the content of the object.
	 *
	 * @param {Array<Album>} content - The content to be set.
	 * @return {void} This function does not return a value.
	 */
	public set Content(content: Array<Album>) {
		this.content = content;
		this.renderContent();
	}

	/**
	 * Renders the content of the component.
	 *
	 * This function clears the innerHTML of the parent element and then sets 
	 * the innerHTML to the result of rendering the template with the given 
	 * configuration and content.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({ FeedComponentConfig, host: hosts.s3HOST, content: this.Content });
	}
}
