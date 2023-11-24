import { Album, Song, User } from '../../types';
import template from './FavAlbumsComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a CollectionComponent. */
export class favAlbumsComponent extends IComponent {
	private albums: Array<Album> = [];
	private user: User | null = { avatar: '', email: '', username: '', birthdate: '' };
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Song>} songs - The array of songs.
	 */
	constructor(parent: HTMLElement, albums: Array<Album>) {
		super(parent, template({ Albums: albums, port: hosts.s3HOST }));
		this.albums = albums;
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
		this.renderContent();
	}

	/**
	 * Returns an array of songs.
	 *
	 * @return {Array<Song>} An array of songs.
	 */
	public get Albums(): Array<Album> {
		return this.albums;
	}

	/**
	 * Set the value of the Songs property.
	 *
	 * @param {Array<Song>} songs - An array of songs to be set.
	 */
	public set Albums(albums: Array<Album>) {
		this.albums = albums;
		this.renderContent();
	}

	/**
	 * Renders the content of the element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		if (this.isMounted) {
			this.parent.innerHTML = '';
			this.parent.innerHTML = template({ Albums: this.albums, port: hosts.s3HOST });
		}
	}
}
