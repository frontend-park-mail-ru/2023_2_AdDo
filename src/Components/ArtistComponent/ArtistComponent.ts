import { Artist } from '../../types';
import template from './ArtistComponent.hbs';
import  IComponent  from '../IComponent/IComponent';

/** Class representing a FeedComponent. */
export class ArtistComponent extends IComponent{
	private artist: Artist;
	private port: string;
	/**
     * Sets parent, config and port for images.
     * @param {HTMLElement} parent
     * @param {Array<Album>} content
	 * @param {string} port  
     */
	constructor(parent: HTMLElement, port: string, artist: Artist) {
		super(parent, template({artist, port}));
		this.port = port;
		this.artist = artist;
	}

	/**
     * Get the content.
     * @return {Album} content.
     */
	public get Artist() : Artist {
		return this.artist;
	}

	/**
     * Set the content.
     * @param {Album} content.
     */
	public set Artist(artist: Artist) {
		this.artist = artist;
		this.renderContent();
	}

	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({artist: this.artist, port: this.port});
	}
}