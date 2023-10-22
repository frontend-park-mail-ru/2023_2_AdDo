import { Album } from '../../types';
import template from './FeedComponentTemplate.hbs';
import { FeedComponentConfig } from './FeedComponentConst';
import  IComponent  from '../IComponent/IComponent';
import { s3HOST } from '../../HostConsts';

/** Class representing a FeedComponent. */
export class FeedComponent extends IComponent{
	private content: Array<Album> = [];
	private port: string = s3HOST;
	/**
     * Sets parent, config and port for images.
     * @param {HTMLElement} parent
     * @param {Array<Album>} content
	 * @param {string} port  
     */
	constructor(parent: HTMLElement, port: string, content: Array<Album> = []) {
		super(parent, template({FeedComponentConfig, content, port}));
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
		this.parent.innerHTML = template({FeedComponentConfig, content: this.Content, port: this.port});

	}
}
