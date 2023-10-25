import { Album } from '../../types';
import template from './AlbumComponent.hbs';
import  IComponent  from '../IComponent/IComponent';
import hosts from '../../HostConsts';

/** Class representing a AlbumComponent. */
export class AlbumComponent extends IComponent{
	private album: Album;

	/**
	 * Constructor for the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Album} album - The album object.
	 */
	constructor(parent: HTMLElement, album: Album) {
		super(parent, template({album, port: hosts.s3HOST}));
		this.album = album;
	}

	/**
	 * Retrieves the Album.
	 *
	 * @return {Album} The Album object.
	 */
	public get Album() : Album {
		return this.album;
	}

	/**
	 * Sets the album for this object.
	 *
	 * @param {Album} album - The album to set.
	 */
	public set Album(album: Album) {
		this.album = album;
		this.renderContent();
	}

	/**
	 * Renders the content of the element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({album: this.album, port: hosts.s3HOST});
	}
}
