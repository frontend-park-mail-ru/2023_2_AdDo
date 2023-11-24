import { Album, Artist, Song, User } from '../../types';
import template from './FavArtistsComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a CollectionComponent. */
export class favArtistsComponent extends IComponent {
	private artists: Array<Artist> = [];
	private user: User | null = { avatar: '', email: '', username: '', birthdate: '' };
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Song>} songs - The array of songs.
	 */
	constructor(parent: HTMLElement, artists: Array<Artist>) {
		super(parent, template({ Artists: artists, port: hosts.s3HOST }));
		this.artists = artists;
		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		})
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
		this.renderCollection();
	}

	public renderCollection(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({ Artists: this.artists, port: hosts.s3HOST, user: this.user });
	}
	/**
	 * Returns an array of songs.
	 *
	 * @return {Array<Song>} An array of songs.
	 */
	public get Artists(): Array<Artist> {
		return this.artists;
	}

	/**
	 * Set the value of the Songs property.
	 *
	 * @param {Array<Song>} songs - An array of songs to be set.
	 */
	public set Artists(artists: Array<Artist>) {
		this.artists = artists;
		this.renderContent();
	}

	/**
	 * Renders the content of the element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template({ Artists: this.artists, port: hosts.s3HOST });
	}
}
