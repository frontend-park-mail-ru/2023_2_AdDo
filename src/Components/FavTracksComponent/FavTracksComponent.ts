import { Album, Playlist, Song, User } from '../../types';
import template from './FavTracksComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a CollectionComponent. */
export class favTracksComponent extends IComponent {
	private songs: Array<Song> = [];
	private user: User | null = null;
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Array<Song>} songs - The array of songs.
	 */
	constructor(parent: HTMLElement, songs: Array<Song>) {
		super(parent, '<div></div>');
		this.songs = songs;
		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		})
		EventDispatcher.subscribe('show-options', (id: string) => {
			if(this.isMounted) {
				const options = document.querySelector(`[data-section="${id}"]`)! as HTMLElement;
				if(options.style.display === 'none') {
					const alloptions = document.querySelectorAll('.options')! as NodeListOf<HTMLElement>;
					const mobilePlayerOptions = document.querySelectorAll('.mobile-player__options')! as NodeListOf<HTMLElement>;
					const playerOptions = document.querySelectorAll('.player__options')! as NodeListOf<HTMLElement>;
					alloptions.forEach((option: HTMLElement) => {
						option.style.display = 'none';
					});
					mobilePlayerOptions.forEach((option: HTMLElement) => {
						option.style.display = 'none';
					});
					playerOptions.forEach((option: HTMLElement) => {
						option.style.display = 'none';
					});
					options.style.display = 'grid';
				} else {
					options.style.display = 'none';
				}
			}
		});
		EventDispatcher.subscribe('show-playlists', ({id, playlists}: { id: string, playlists: Array<Playlist> }) => {
			if(this.isMounted) {
				const avaliablePlaylists = document.querySelector(`[data-list="${id}"]`)! as HTMLElement;
				avaliablePlaylists.style.display === 'none' ? avaliablePlaylists.style.display = 'grid' : avaliablePlaylists.style.display = 'none';
				avaliablePlaylists.innerHTML = '';
				if(playlists.length === 0) {
					const div = document.createElement('div');
					div.classList.add('small-text');
					div.textContent = "У вас нет плейлистов или вы не авторизованы";
					avaliablePlaylists.appendChild(div);
				} else {
					playlists.forEach((playlist: Playlist) => {
						const div = document.createElement('div');
						div.classList.add('medium-text');
						div.classList.add('options__avaliablePlaylists__name');
						div.textContent = playlist.Name;
						div.setAttribute('data-section', 'addTrackToPlaylist');
						div.setAttribute('data-playlist-id', `${playlist.Id}`);
						div.setAttribute('data-id', `${id}`);
						avaliablePlaylists.appendChild(div);
					});
				}
				
			}
		});
		EventDispatcher.subscribe('add-track-to-playlist', ({id, type} : { id: string, type: string }) => {
			if(this.isMounted) {
				const added = document.querySelector(`[${type}="${id}"]`)! as HTMLElement;
				added.style.display = 'flex';
				setTimeout(() => {
					added.style.display = 'none';
				}, 2000);
				const options = document.querySelector(`[data-section="${id}"]`)! as HTMLElement;
				setTimeout(() => {
					options.style.display === 'none' ? options.style.display = 'grid' : options.style.display = 'none';
				}, 2000);
			}	
		});
		EventDispatcher.subscribe('close-all-options', () => {
			if(this.isMounted) {
				const alloptions = document.querySelectorAll('.options')! as NodeListOf<HTMLElement>;
				const mobilePlayerOptions = document.querySelectorAll('.mobile-player__options')! as NodeListOf<HTMLElement>;
				const playerOptions = document.querySelectorAll('.player__options')! as NodeListOf<HTMLElement>;
				alloptions.forEach((option: HTMLElement) => {
					option.style.display = 'none';
				});
				mobilePlayerOptions.forEach((option: HTMLElement) => {
					option.style.display = 'none';
				});
				playerOptions.forEach((option: HTMLElement) => {
					option.style.display = 'none';
				});
			}
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
		if (this.isMounted) {
			this.parent.innerHTML = '';
			this.parent.innerHTML = template({ Tracks: this.songs, port: hosts.s3HOST, user: this.user });
		}
	}
}
