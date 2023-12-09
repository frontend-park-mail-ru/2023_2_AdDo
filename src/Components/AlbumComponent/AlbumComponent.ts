import { Album, Playlist, User } from '../../types';
import template from './AlbumComponent.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a AlbumComponent. */
export class AlbumComponent extends IComponent {
	private album: Album;
	private user: User | null = null;
	/**
	 * Constructor for the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Album} album - The album object.
	 */
	constructor(parent: HTMLElement, album: Album) {
		super(parent, template({ album, port: hosts.s3HOST }));
		this.album = album;
		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		})
		EventDispatcher.subscribe('show-options', (id: string) => {
			if(this.isMounted) {
				const options = document.querySelector(`[data-section="${id}"]`)! as HTMLElement;
				if(options.style.display === 'none') {
					const alloptions = document.querySelectorAll('.options')! as NodeListOf<HTMLElement>;
					alloptions.forEach((option: HTMLElement) => {
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
	 * Retrieves the Album.
	 *
	 * @return {Album} The Album object.
	 */
	public get Album(): Album {
		return this.album;
	}

	/**
	 * Sets the album for this object.
	 *
	 * @param {Album} album - The album to set.
	 */
	public set Album(album: Album) {
		this.album = album;
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
			this.parent.innerHTML = template({ album: this.album, port: hosts.s3HOST, user: this.user });
		}
		
	}
}
