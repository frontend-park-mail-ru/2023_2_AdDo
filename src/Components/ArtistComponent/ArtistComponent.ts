import { Artist } from '../../types';
import template from './ArtistComponent.hbs';
import  IComponent  from '../IComponent/IComponent';
import hosts from '../../HostConsts';

import * as Handlebars from 'handlebars';
Handlebars.registerHelper('addOne', function(index) {
	return index + 1;
});
/** Class representing a FeedComponent. */
export class ArtistComponent extends IComponent{
	private artist: Artist;
	/**
     * Sets parent, config and port for images.
     * @param {HTMLElement} parent
     * @param {Array<Album>} content
	 * @param {string} port  
     */
	constructor(parent: HTMLElement, artist: Artist) {
		super(parent, template({artist, port: hosts.s3HOST}));
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
		this.parent.innerHTML = template({Artist: this.artist, port: hosts.s3HOST});
	}
}