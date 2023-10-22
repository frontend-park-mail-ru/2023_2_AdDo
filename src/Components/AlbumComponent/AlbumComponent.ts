import { Album } from '../../types';
import template from './AlbumComponent.hbs';
import  IComponent  from '../IComponent/IComponent';

/** Class representing a FeedComponent. */
export class AlbumComponent extends IComponent{
	private album: Album;
	private port: string;
	/**
     * Sets parent, config and port for images.
     * @param {HTMLElement} parent
     * @param {Array<Album>} content
	 * @param {string} port  
     */
	constructor(parent: HTMLElement, port: string, album: Album) {
		super(parent, template({album, port}));
		this.port = port;
		this.album = album;
	}

	/**
     * Get the content.
     * @return {Album} content.
     */
	public get Album() : Album {
		return this.album;
	}

	/**
     * Set the content.
     * @param {Album} content.
     */
	public set Album(album: Album) {
		this.album = album;
		this.renderContent();
	}

	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({album: this.album, port: this.port});
	}
}
