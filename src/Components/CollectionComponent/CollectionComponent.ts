import { Album, Song } from '../../types';
import template from './CollectionComponentTemplate.hbs';
import  IComponent  from '../IComponent/IComponent';
import hosts from '../../HostConsts';

/** Class representing a AlbumComponent. */
export class CollectionComponent extends IComponent{
	private songs: Array<Song> = [];

	/**
	 * Constructor for the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Album} album - The album object.
	 */
	constructor(parent: HTMLElement, songs: Array<Song>) {
		super(parent, template({Tracks: songs, port: hosts.s3HOST}));
		this.songs = songs;
	}

	/**
	 * Retrieves the Album.
	 *
	 * @return {Album} The Album object.
	 */
	public get Songs() : Array<Song> {
		return this.songs;
	}

	/**
	 * Sets the album for this object.
	 *
	 * @param {Album} album - The album to set.
	 */
	public set Songs(songs: Array<Song>) {
		this.songs = songs;
		this.renderContent();
	}

	/**
	 * Renders the content of the element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({Tracks: this.songs, port: hosts.s3HOST});
	}
}
