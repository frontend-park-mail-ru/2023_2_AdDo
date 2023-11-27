import { Album, Artist, Song, User } from '../../types';
import template from './SearchComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a CollectionComponent. */
export class SearchComponent extends IComponent {
	private playlists: Array<Album> = [];
    private songs: Array<Song> = [];
    private artists: Array<Artist> = [];
    private albums: Array<Album> = [];
	private user: User | null = { avatar: '', email: '', username: '', birthdate: '' };
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Song>} songs - The array of songs.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({ Playlists: [], Tracks: [], Artists: [], Albums: [],  port: hosts.s3HOST }));
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
	public get Content(): {Playlists: Array<Album>, Tracks: Array<Song>, Artists: Array<Artist>, Albums: Array<Album>} {
		return {Playlists: this.playlists, Tracks: this.songs, Artists: this.artists, Albums: this.albums};
	}

	/**
	 * Set the value of the Songs property.
	 *
	 * @param {Array<Song>} songs - An array of songs to be set.
	 */
	public set Content({Playlists: playlists, Tracks: songs, Artists: artists, Albums: albums}: {Playlists: Array<Album>, Tracks: Array<Song>, Artists: Array<Artist>, Albums: Array<Album>}) {
        this.playlists = playlists;
        this.songs = songs;
        this.artists = artists;
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
			this.parent.innerHTML = template({ Playlists: this.playlists, Tracks: this.songs, Artists: this.artists, Albums: this.albums, port: hosts.s3HOST, user: this.user });
		}
	}
}
