import { Artist } from '../../types';
import template from './ArtistComponent.hbs';
import  IComponent  from '../IComponent/IComponent';
import hosts from '../../HostConsts';

/** Class representing a ArtistComponent. */
export class ArtistComponent extends IComponent{
	private artist: Artist;

	/**
	 * Create a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Artist} artist - The artist object.
	 */
	constructor(parent: HTMLElement, artist: Artist) {
		super(parent, template({artist, port: hosts.s3HOST}));
		this.artist = artist;
	}

	/**
	 * Returns the Artist object.
	 *
	 * @return {Artist} The Artist object.
	 */
	public get Artist() : Artist {
		return this.artist;
	}

	/**
	 * A setter function for the Artist property.
	 *
	 * @param {Artist} artist - The new Artist to set.
	 */
	public set Artist(artist: Artist) {
		this.artist = artist;
		this.renderContent();
	}

	/**
	 * Renders the content by updating the innerHTML of the parent element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({Artist: this.artist, port: hosts.s3HOST});
	}
}
