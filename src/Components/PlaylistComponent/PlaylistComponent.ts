import { Artist, Playlist, Song, User } from '../../types';
import template from './PlaylistComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a ArtistComponent. */
export class PlaylistComponent extends IComponent {
	private playlist: Playlist = { Id: 0, Name: '', Preview: '', Tracks: [], isLiked: false };
	private user: User | null = { avatar: '', email: '', username: '', birthdate: '' };
	/**
	 * Create a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Artist} artist - The artist object.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({ port: hosts.s3HOST }));
		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		});
		EventDispatcher.subscribe('show-options', (id: string) => {
			const options = document.querySelector(`[data-section="${id}"]`)! as HTMLElement;
			options.style.display === 'none' ? options.style.display = 'grid' : options.style.display = 'none';
		});
		EventDispatcher.subscribe('delete-track-from-playlist', (id: string) => {
			const options = document.querySelector(`[data-section="${id}"]`)! as HTMLElement;
			options.style.display === 'none' ? options.style.display = 'grid' : options.style.display = 'none';
		});
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
	public get Playlist(): Playlist {
		return this.playlist;
	}

	/**
	 * A setter function for the Artist property.
	 *
	 * @param {Artist} artist - The new Artist to set.
	 */
	public set Playlist(playlist: Playlist) {
		this.playlist = playlist;
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
			this.parent.innerHTML = template({ Playlist: this.playlist, port: hosts.s3HOST, user: this.user });
		}
	}
}
