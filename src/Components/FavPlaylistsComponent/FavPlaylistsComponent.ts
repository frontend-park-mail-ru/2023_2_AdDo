import { Album, Song, User } from '../../types';
import template from './FavPlaylistsComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a CollectionComponent. */
export class favPlaylistsComponent extends IComponent {
	private likedPlaylists: Array<Album> = [];
	private userPlaylists: Array<Album> = [];
	private user: User | null = null;
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Song>} songs - The array of songs.
	 */
	constructor(parent: HTMLElement, playlists: Array<Album>) {
		super(parent, template({ Playlists: playlists, port: hosts.s3HOST }));
		this.likedPlaylists = playlists;
		this.userPlaylists = playlists;
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
	public get Playlists(): { likedPlaylists: Array<Album>, userPlaylist: Array<Album> } {
		return { likedPlaylists: this.likedPlaylists, userPlaylist: this.userPlaylists };
	}

	/**
	 * Set the value of the Songs property.
	 *
	 * @param {Array<Song>} songs - An array of songs to be set.
	 */
	public set Playlists({likedPlaylists, userPlaylist}: {likedPlaylists: Array<Album>, userPlaylist: Array<Album>}) {
		this.likedPlaylists = likedPlaylists;
		this.userPlaylists = userPlaylist;
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
			this.parent.innerHTML = template({ LikedPlaylists: this.likedPlaylists, UserPlaylists: this.userPlaylists, port: hosts.s3HOST, user: this.user });
		}
	}
}
