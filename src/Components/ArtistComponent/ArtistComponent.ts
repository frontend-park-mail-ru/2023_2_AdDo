import { Artist, Playlist, Song, User } from '../../types';
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
	private user: User | null = null;
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
		});
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
		EventDispatcher.subscribe('add-track-to-playlist', (id: string) => {
			if(this.isMounted) {
				const options = document.querySelector(`[data-section="${id}"]`)! as HTMLElement;
				options.style.display === 'none' ? options.style.display = 'grid' : options.style.display = 'none';
			}	
		});
		EventDispatcher.subscribe('copied-to-clipboard', ({id, type} : { id: string, type: string }) => {
			if(this.isMounted) {
				const copied = document.querySelector(`[${type}="${id}"]`)! as HTMLElement;
				copied.style.display = 'flex';
				setTimeout(() => {
					copied.style.display = 'none';
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
