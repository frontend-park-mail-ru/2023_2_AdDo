import { Album, Song, User } from '../../types';
import template from './FavTracksComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a CollectionComponent. */
export class favTracksComponent extends IComponent {
	private songs: Array<Song> = [];
	private user: User | null = { avatar: '', email: '', username: '', birthdate: '' };
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Song>} songs - The array of songs.
	 */
	constructor(parent: HTMLElement, songs: Array<Song>) {
		super(parent, template({ Tracks: songs, port: hosts.s3HOST }));
		this.songs = songs;
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
		this.parent.innerHTML = template({ Tracks: this.songs, port: hosts.s3HOST, user: this.user });
	}
	/**
	 * Returns an array of songs.
	 *
	 * @return {Array<Song>} An array of songs.
	 */
	public get Songs(): Array<Song> {
		return this.songs;
	}

	/**
	 * Set the value of the Songs property.
	 *
	 * @param {Array<Song>} songs - An array of songs to be set.
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
		this.parent.innerHTML = template({ Tracks: this.songs, port: hosts.s3HOST });
	}
}
