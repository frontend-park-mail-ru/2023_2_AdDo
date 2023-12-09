import { Album, User } from '../../types';
import template from './FeedComponentTemplate.hbs';
import { FeedComponentConfig } from './FeedComponentConst';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a FeedComponent. */
export class FeedComponent extends IComponent {
	private content: Array<Album> = [];
	private user: User | null = null;
	/**
	 * Constructor for the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Album>} content - An array of albums. Default value is an empty array.
	 */
	constructor(parent: HTMLElement, content: Array<Album> = []) {
		super(parent, template({ FeedComponentConfig, content }));
		this.content = content;
		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		});
	}

	/**
	 * Returns the content of the object as an array of Album objects.
	 *
	 * @return {Array<Album>} - The content of the object as an array of Album objects.
	 */
	public get Content(): Array<Album> {
		return Object.entries(this.content).map(([key, { Id, Name, Preview, ArtistId, ArtistName, Tracks, isLiked }]) => ({
			Id,
			Name,
			Preview,
			ArtistId,
			ArtistName,
			Tracks,
			isLiked
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
	 * Returns the User property.
	 *
	 * @return {User} The User property.
	 */
	public get User(): User | null {
		return this.user;
	}

	/**
	 * Set the User property and render the header.
	 *
	 * @param {User} user - The User object to set.
	 * @return {void} 
	 */
	public set User(user: User | null) {
		this.user = user;
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
		this.parent.innerHTML = template({ FeedComponentConfig, host: hosts.s3HOST, content: this.Content, user: this.user});
	}
}
