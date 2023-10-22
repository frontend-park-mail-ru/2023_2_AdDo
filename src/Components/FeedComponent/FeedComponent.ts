import { Album } from '../../types';
import template from './FeedComponentTemplate.hbs';
import { FeedComponentConfig } from './FeedComponentConst';
import  IComponent  from '../IComponent/IComponent';
import  s3HOST  from '../../HostConsts';
import hosts from '../../HostConsts';

/** Class representing a FeedComponent. */
export class FeedComponent extends IComponent{
	private content: Array<Album> = [];
	/**
     * Sets parent, config and port for images.
     * @param {HTMLElement} parent
     * @param {Array<Album>} content
	 * @param {string} host  
     */
	constructor(parent: HTMLElement, content: Array<Album> = []) {
		super(parent, template({FeedComponentConfig, content}));
		this.content = content;
	}

	/**
     * Get the content.
     * @return {Array<Album>} content.
     */
	public get Content() : Array<Album> {
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
     * Set the content.
     * @param {Array<Album>} content.
     */
	public set Content(content: Array<Album>) {
		this.content = content;
		this.renderContent();
	}

	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({FeedComponentConfig, host: hosts.s3HOST, content: this.Content });

	}
}
