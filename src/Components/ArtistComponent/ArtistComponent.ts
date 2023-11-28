import { Artist, Song, User } from '../../types';
import template from './ArtistComponent.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a ArtistComponent. */
export class ArtistComponent extends IComponent {
	private artist: Artist;
	private songs: Array<Song> = [];
	private showmore: string = 'Смотреть все';
	private isShown: boolean = false;
	private user: User | null = { avatar: '', email: '', username: '', birthdate: '' };
	/**
	 * Create a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Artist} artist - The artist object.
	 */
	constructor(parent: HTMLElement, artist: Artist) {
		super(parent, template({ artist, port: hosts.s3HOST }));
		this.artist = artist;
		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		})

		EventDispatcher.subscribe('show-more', () => {
			if(this.isShown) {
				this.isShown = false;
				this.songs = this.artist.Tracks.slice(0, 10);
				this.showmore = 'Смотреть все';
				this.renderContent();
			} else {
				this.isShown = true;
				this.songs = this.artist.Tracks;
				this.showmore = 'Скрыть';
				this.renderContent();
			}	
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
	 * Returns the Artist object.
	 *
	 * @return {Artist} The Artist object.
	 */
	public get Artist(): Artist {
		return this.artist;
	}

	/**
	 * A setter function for the Artist property.
	 *
	 * @param {Artist} artist - The new Artist to set.
	 */
	public set Artist(artist: Artist) {
		this.artist = artist;
		this.songs = artist.Tracks.slice(0, 10);
		this.showmore = 'Смотреть все';
		this.renderContent();
	}

	/**
	 * Renders the content by updating the innerHTML of the parent element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		if (this.isMounted) {
			this.parent.innerHTML = '';
			this.parent.innerHTML = template({ Artist: this.artist, Tracks: this.songs, port: hosts.s3HOST, user: this.user, showMore: this.showmore });
		}
	}
}
