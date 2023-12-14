import IComponent from '../IComponent/IComponent';
import template from './PlayerComponentTemplate.hbs';
import { Callback, Playlist, Song, User } from '../../types';
import { PlayerComponentConfig } from './PlayerComponentConfig';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { debounce } from '../../Modules/lib/Debounce';

/** Class representing a PlayerComponent. */
export class PlayerComponent extends IComponent {
	public currentSong: Song = { Id: 0, Name: '', Preview: '', Content: '', ArtistName: '', isLiked: false, ArtistId: 0 };
	private cardShown : boolean = false;
	public channel: BroadcastChannel;
	private syncDebounced: (currenttime: number) => void = () => {};
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element for the new instance.
	 * @param {Song} song - The song object with default values.
	 * @param {boolean} Playing - The initial playing state.
	 */
	constructor(parent: HTMLElement, isMobile: boolean = false,
		song: Song = { Id: 0, Name: '', Preview: '', Content: '', ArtistName: '', isLiked: false, ArtistId: 0 },
		Playing: boolean = false) {
		super(parent, template({ PlayerComponentConfig, song: song, port: hosts.s3HOST, Playing, isLiked: false, isMobile}));
		const like = this.element.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
		like.classList.add('disabled');
		this.channel = new BroadcastChannel('playerChannel');
		this.bindClickEvent(this.handleClick.bind(this));
		this.bindTimeUpdateEvent(this.updateProgressSlider.bind(this));
		this.element.querySelector('.mobile-player__progress')!.addEventListener('input', this.setProgressMobile.bind(this));
		this.bindTimeUpdateEvent(this.updateProgress.bind(this));
		this.bindSetProgressEvent(this.setProgress.bind(this));
		this.bindVolumeSliderEvent(this.setVolumeSlider.bind(this));
		this.syncDebounced = debounce(this.syncPlayerState.bind(this), 50);
		this.channel.addEventListener('message', event => {
			if (event.data.type === 'playerSync' && event.source !== self) {
				const audio = this.element.querySelector('audio')! as HTMLAudioElement;
				this.setSong({Id: event.data.Id, ArtistId: event.data.ArtistId, Name: event.data.Name, Preview: event.data.Preview, Content: event.data.Content, ArtistName: event.data.ArtistName, isLiked: event.data.isLiked}, event.data.isLiked);
				audio.currentTime = event.data.currentTime;
				audio.pause();
				const mobileImg: HTMLImageElement = this.element.querySelector('.mobile-player__playbutton') as HTMLImageElement;
				mobileImg.src = '/static/img/playButton.webp';
				const img: HTMLImageElement = this.element.querySelector('[data-section="playBtn"]') as HTMLImageElement;
				img.src = '/static/img/Play.svg';
			}
		  });
		EventDispatcher.subscribe('user-changed', this.userChanged.bind(this));
		EventDispatcher.subscribe('player-show-options', (id: string) => {
			const options = document.querySelector(`[data-player="${id}"]`)! as HTMLElement;
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
		});
		EventDispatcher.subscribe('player-show-playlists', ({id, playlists}: { id: string, playlists: Array<Playlist> }) => {
			const avaliablePlaylists = document.querySelector(`[data-player-list="${id}"]`)! as HTMLElement;
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
					div.setAttribute('data-section', 'playerAddTrackToPlaylist');
					div.setAttribute('data-playlist-id', `${playlist.Id}`);
					div.setAttribute('data-id', `${id}`);
					avaliablePlaylists.appendChild(div);
				});
			}
		});
		EventDispatcher.subscribe('player-add-track-to-playlist', (id: string) => {
			const options = document.querySelector(`[data-player="${id}"]`)! as HTMLElement;
			options.style.display === 'none' ? options.style.display = 'grid' : options.style.display = 'none';
		});
		EventDispatcher.subscribe('mobile-player-show-options', (id: string) => {
			const options = document.querySelector(`[data-mobile-player="${id}"]`)! as HTMLElement;
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
		});
		EventDispatcher.subscribe('mobile-player-show-playlists', ({id, playlists}: { id: string, playlists: Array<Playlist> }) => {
			const avaliablePlaylists = document.querySelector(`[data-mobile-player-list="${id}"]`)! as HTMLElement;
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
					div.classList.add('mobile-options__avaliablePlaylists__name');
					div.textContent = playlist.Name;
					div.setAttribute('data-section', 'mobilePlayerAddTrackToPlaylist');
					div.setAttribute('data-playlist-id', `${playlist.Id}`);
					div.setAttribute('data-id', `${id}`);
					avaliablePlaylists.appendChild(div);
				});
			}
		});
		EventDispatcher.subscribe('mobile-player-add-track-to-playlist', (id: string) => {
			const options = document.querySelector(`[data-mobile-player="${id}"]`)! as HTMLElement;
			options.style.display === 'none' ? options.style.display = 'grid' : options.style.display = 'none';
		});
		EventDispatcher.subscribe('copied-to-clipboard', ({id, type} : { id: string, type: string }) => {
			const copied = document.querySelector(`[${type}="${id}"]`)! as HTMLElement;
			copied.style.display = 'flex';
			setTimeout(() => {
				copied.style.display = 'none';
			}, 2000);
		});
	}

	// Синхронизация состояния музыкального плеера между вкладками
	public syncPlayerState(currentTime: number): void {
		this.channel.postMessage({
			type: 'playerSync',
			currentTime,
			Content: this.currentSong.Content,
			ArtistName: this.currentSong.ArtistName,
			Name: this.currentSong.Name,
			isLiked: this.currentSong.isLiked,
			ArtistId: this.currentSong.ArtistId,
			Id: this.currentSong.Id,
			Preview: this.currentSong.Preview,
		});
	}

	/**
	 * Plays a song.
	 *
	 * @param {Song} song - The song to be played.
	 * @return {void} 
	 */
	public playSong(song: Song, isLiked: boolean): void {
		this.setSong(song, isLiked);
		const audio = this.element.querySelector('audio')! as HTMLAudioElement;
		audio.play();
		this.syncPlayerState(audio.currentTime);
	}

	public setSong(song: Song, isLiked: boolean): void {
		this.currentSong = song;
		const img = this.querySelector('.avatar')! as HTMLImageElement;
		const mobileImg = this.element.querySelector('.mobile-player__photo') as HTMLImageElement;
		img.src = hosts.s3HOST + song.Preview;
		mobileImg.src = hosts.s3HOST + song.Preview;
		const like = this.querySelector('[data-section="likeBtn"]')! as HTMLImageElement;
		const mobileLike = this.querySelector('[data-section="mobileLikeBtn"]')! as HTMLImageElement;
		if (like) {
			if(isLiked) {
				like.src = '/static/img/LikePressed.svg';
				mobileLike.src = '/static/img/LikePressed.svg';
			} else {
				like.src = '/static/img/Like.svg';
				mobileLike.src = '/static/img/Like.svg';
			}
		}
		this.querySelector('.title')!.textContent = song.Name;
		const artistname: HTMLElement = this.querySelector('.artistname')!;
		artistname.textContent = song.ArtistName; 
		artistname.setAttribute('data-url', '/artist/' + song.ArtistId);
		artistname.setAttribute('data-id', song.ArtistId.toString());
		this.element.querySelector('.mobile-player__info__name')!.textContent = song.Name;
		const mobileArtistName: HTMLElement = this.element.querySelector('.mobile-player__info__artist')!;
		mobileArtistName.textContent = song.ArtistName; 
		mobileArtistName.setAttribute('data-url', '/artist/' + song.ArtistId);
		mobileArtistName.setAttribute('data-id', song.ArtistId.toString());
		this.element.querySelector('[data-section="mobilePlayerTrackOptions"]')!.setAttribute('data-id', song.Id.toString());
		this.element.querySelector('[data-section="mobilePlayerOptions"]')!.setAttribute('data-mobile-player', song.Id.toString());
		this.element.querySelector('[data-section="mobilePlayerShowAvaliblePlaylists"]')!.setAttribute('data-id', song.Id.toString());
		this.element.querySelector('[data-section="mobilePlayerList"]')!.setAttribute('data-mobile-player-list', song.Id.toString());
		this.element.querySelector('[data-section="playerTrackOptions"]')!.setAttribute('data-id', song.Id.toString());
		this.element.querySelector('[data-section="playerOptions"]')!.setAttribute('data-player', song.Id.toString());
		this.element.querySelector('[data-section="playerShowAvaliblePlaylists"]')!.setAttribute('data-id', song.Id.toString());
		this.element.querySelector('[data-section="playerList"]')!.setAttribute('data-player-list', song.Id.toString());
		this.element.querySelector('[data-section="closeButton"]')!.setAttribute('data-id', song.Id.toString());
		this.element.querySelector('[data-section="playerTrackShare"]')!.setAttribute('data-id', song.Id.toString());
		this.element.querySelector('[data-section="playerTrackShareCopied"]')!.setAttribute('data-player-track-share', song.Id.toString());
		this.element.querySelector('[data-section="mobilePlayerTrackShare"]')!.setAttribute('data-id', song.Id.toString());
		this.element.querySelector('[data-section="mobilePlayerTrackShareCopied"]')!.setAttribute('data-mobile-player-track-share', song.Id.toString());
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.src = hosts.s3HOST + song.Content;
		const volumeSlider = this.querySelector('.volume-bar')! as HTMLInputElement;
		if (!audio.muted) {
			if (parseInt(volumeSlider.value) === 0) {
				volumeSlider.value = '50';
				audio.volume = 0.5;
			} else {
				audio.volume = (parseInt(volumeSlider.value) / 100);
			}
		}
	}

	/**
	 * Resumes the currently paused song.
	 *
	 * @return {void} 
	 */
	public resumeSong(): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.play();
		this.syncPlayerState(audio.currentTime);
	}
	/**
	 * Pauses the currently playing song.
	 *
	 * @return {void}
	 */
	public pauseSong(): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.pause();
		this.syncPlayerState(audio.currentTime);
	}

	/**
	 * Updates the progress of the audio player based on the current time and duration.
	 *
	 * @param {Event} e - The event object.
	 * @return {void} This function does not return anything.
	 */
	private updateProgress(e: Event): void {
		const { duration, currentTime } = e.target as HTMLAudioElement;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		const progressPercent = (currentTime / duration) * 100;
		const progress: HTMLElement = this.querySelector('.progress-bar__progress')!;
		progress.style.width = `${progressPercent}%`;
	}

	/**
	 * Sets the progress of the audio playback based on the position of the mouse click.
	 *
	 * @param {Event} e - The event object representing the mouse click.
	 * @return {void} 
	 */
	private setProgress(e: Event): void {
		const width: number = this.querySelector('.progress-bar')!.clientWidth;
		const target = e as MouseEvent;
		const x: number = target.offsetX;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		const duration = audio.duration;
		audio.currentTime = (x / width) * duration;
	}

	private setVolumeSlider(e: Event): void {
		const slider = this.querySelector('.volume-bar') as HTMLInputElement;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.volume = parseInt(slider.value) / 100 as number;
	}

	private setVolumeMobile(e: Event): void {
		const slider = this.querySelector('.mobile-player__volume') as HTMLInputElement;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.volume = parseInt(slider.value) / 100 as number;
	}

	private setProgressMobile(e: Event): void {
		const slider = this.querySelector('.mobile-player__progress') as HTMLInputElement;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.currentTime = parseInt(slider.value) / 100 * audio.duration as number;
	}

	private updateProgressSlider(e: Event): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		const { duration, currentTime } = e.target as HTMLAudioElement;
		const progressPercent = (currentTime / duration) * 100;
		const slider = this.querySelector('.mobile-player__progress') as HTMLInputElement;
		slider.value = progressPercent.toString();
		const currTimeDiv: HTMLElement = this.querySelector('.mobile-player__current-time')!;
		const remainingTimeDiv: HTMLElement = this.querySelector('.mobile-player__remaining-time')!;
		let minutes = Math.floor(currentTime / 60);
		let seconds = currentTime % 60;
		if (seconds < 10) {
			currTimeDiv.textContent = minutes.toString() + ':' + '0' + Math.floor(seconds).toString();
		} else {
			currTimeDiv.textContent = minutes.toString() + ':' + Math.floor(seconds).toString();
		}
		minutes = Math.floor((duration - currentTime) / 60);
		seconds = (duration - currentTime) % 60;
		if(isNaN(minutes) || isNaN(seconds)) {
			minutes = 0;
			seconds = 0;
		}
		if (seconds < 10) {
			remainingTimeDiv.textContent = minutes.toString() + ':' + '0' + Math.floor(seconds).toString();
		} else {
			remainingTimeDiv.textContent = minutes.toString() + ':' + Math.floor(seconds).toString();
		}
	}

	/**
	 * Binds a 'click' event listener to the '.progressBar' element.
	 *
	 * @param {Callback} listener - The callback function to be executed when the 'click' event is triggered.
	 * @return {void} 
	 */
	private bindSetProgressEvent(listener: Callback): void {
        this.element.querySelector('.progress-bar')!.addEventListener('click', listener);
	}
	
	private bindClickEvent(listener: Callback): void {
		this.element.addEventListener('click', listener);
	}

	private handleClick(e: Event): void {
		const target: HTMLElement = e.target as HTMLElement;
		const value: string = target.getAttribute('data-section')!
		const mobilePlayer: HTMLElement = this.parent.querySelector('.mobile-player')!;
		switch (value) {
			case 'closeBtn':
				this.cardShown = false;
				mobilePlayer.style.display = 'none';
				break;
			case 'closeButton':
				EventDispatcher.emit('mobile-player-show-options', target.getAttribute('data-id')!);
				break;
			case 'player':
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					this.cardShown = true;
					mobilePlayer.style.display = 'flex';
				}
				break;
		}
	}

	/**
	 * Binds the 'click' event on the volumeBar element to the provided listener callback function.
	 *
	 * @param {Callback} listener - The callback function to be executed when the 'click' event is triggered.
	 * @return {void} 
	 */

	private bindVolumeSliderEvent(listener: Callback): void {
        this.element.querySelector('.volume-bar')!.addEventListener('input', listener);
	}

	private bindMobileVolumeSliderEvent(listener: Callback): void {
        this.element.querySelector('.mobile-player__volume')!.addEventListener('input', listener);
	}

	/**
	 * Binds a time update event listener to the audio element.
	 *
	 * @param {Callback} listener - The callback function to be executed when the time updates.
	 * @return {void}
	 */
	private bindTimeUpdateEvent(listener: Callback): void {
		this.element.querySelector('audio')!.addEventListener('timeupdate', listener);
	}

	public bindEvents(): void {
		this.bindTimeUpdateEvent(this.updateProgressSlider.bind(this));
		this.element.querySelector('.mobile-player__progress')!.addEventListener('input', this.setProgressMobile.bind(this));
		this.bindTimeUpdateEvent(this.updateProgress.bind(this));
		this.bindSetProgressEvent(this.setProgress.bind(this));
		this.bindVolumeSliderEvent(this.setVolumeSlider.bind(this));
	}

	public userChanged(user: User): void {
		if (user !== null) {
			const audio = this.element.querySelector('audio') as HTMLAudioElement;
			audio.src = '';
			const like = this.element.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
			const mobilelike = this.element.querySelector('[data-section="mobileLikeBtn"]') as HTMLImageElement;
			like.src = '/static/img/Like.svg';
			like.classList.remove('disabled');
			mobilelike.src = '/static/img/Like.svg';
			mobilelike.classList.remove('disabled');
			const img = this.element.querySelector('.avatar') as HTMLImageElement;
			const mobileImg = this.element.querySelector('.mobile-player__photo') as HTMLImageElement;
			img.src = '/static/img/grey.png';
			mobileImg.src = '/static/img/violet.png';
			this.element.querySelector('.artistname')!.textContent = '';
			this.element.querySelector('.title')!.textContent = '';
			this.element.querySelector('.mobile-player__info__name')!.textContent = '';
			this.element.querySelector('.mobile-player__info__artist')!.textContent = '';
		} else {
			const audio = this.element.querySelector('audio') as HTMLAudioElement;
			audio.src = '';
			const like = this.element.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
			const mobilelike = this.element.querySelector('[data-section="mobileLikeBtn"]') as HTMLImageElement;
			like.src = '/static/img/Like.svg';
			like.classList.add('disabled');
			mobilelike.src = '/static/img/Like.svg';
			mobilelike.classList.add('disabled');
			const img = this.element.querySelector('.avatar') as HTMLImageElement;
			const mobileImg = this.element.querySelector('.mobile-player__photo') as HTMLImageElement;
			img.src = '/static/img/grey.png';
			mobileImg.src = '/static/img/violet.png';
			this.element.querySelector('.artistname')!.textContent = '';
			this.element.querySelector('.title')!.textContent = '';
			this.element.querySelector('.mobile-player__info__name')!.textContent = '';
			this.element.querySelector('.mobile-player__info__artist')!.textContent = '';
		}
	}
}
