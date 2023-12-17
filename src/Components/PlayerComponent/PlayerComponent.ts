import IComponent from '../IComponent/IComponent';
import template from './PlayerComponentTemplate.hbs';
import { Callback, Playlist, Song, User } from '../../types';
import { PlayerComponentConfig } from './PlayerComponentConfig';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { debounce } from '../../Modules/lib/Debounce';

const songText = `[00:01.06] Too late for the other side
[00:06.31] Caught in a chase, 25 to life
[00:13.07] Too late for the other side
[00:18.13] Caught in a chase, 25 to life (yeah, yeah)
[00:25.08] Too late (I can't keep chasing you)
[00:29.41] (I'm taking my life back) Caught in a chase, 25 to life
[00:35.94] I don't think she understands the sacrifices that I've made
[00:39.12] Maybe if this bitch had acted right I woulda stayed
[00:41.71] But I've already wasted over half my life, I woulda laid
[00:44.96] Down and died for you, I no longer cry for you, no more pain
[00:47.96] Bitch, you took me for granted, took my heart and ran it straight into the planet
[00:51.95] Into the dirt, I can no longer stand it, now my respect, I demand it
[00:55.31] I'ma take control of this relationship, command it
[00:57.97] And I'ma be the boss of you now, goddamn it
[00:59.92] And what I mean is that I will no longer let you control me
[01:03.19] So you better hear me out, this much you owe me
[01:05.63] I gave up my life for you, totally devoted to you, I have stayed
[01:08.82] Faithful all the way, this is how I fucking get repaid?
[01:11.97] Look at how I dress, fucking baggy sweats, go to work a mess
[01:15.39] Always in a rush to get back to you, I ain't heard you yet
[01:18.20] Not even once say you appreciate me, I deserve respect
[01:21.31] I've done my best to give you nothin' less than perfectness
[01:24.22] And I know that if I end this I'll no longer have nothin' left
[01:27.12] But you keep treatin' me like a staircase, it's time to fuck step
[01:30.40] And I won't be comin' back, so don't hold your fuck breath
[01:33.49] You know what you've done, no need to go in-depth
[01:35.56] I told you, you'd be sorry if I fucking left, I laughed while you wept
[01:38.86] How's it feel now? Yeah, funny, ain't it? You neglected me
[01:42.44] Did me a favor though, my spirit free you've set
[01:44.81] But a special place for you in my heart I have kept
[01:47.57] It's unfortunate, but it's
[01:48.81] Too late for the other side (yeah, yeah)
[01:54.32] Caught in a chase, 25 to life
[01:58.74] (Can't take no more, can't take no more)
[02:01.04] Too late for the other side
[02:06.21] Caught in a chase, 25 to life
[02:11.55] I feel like when I bend over backwards (too late), for you, all you do is laugh
[02:14.99] 'Cause that ain't good enough, you expect me to fold myself in half 'til I snap
[02:18.74] Don't think I'm loyal, all I do is rap
[02:20.76] How can I moonlight on the side? I have no life outside of that
[02:23.75] Don't I give you enough of my time? You don't think so, do you?
[02:27.00] Jealous when I spend time with the girls, why I'm married to you still?
[02:30.22] Man, I don't know, but tonight I'm serving you with papers
[02:32.86] I'm divorcing you, go marry someone else and make 'em famous
[02:36.18] And take away their freedom like you did to me
[02:38.55] Treat 'em like you don't need 'em, and they ain't worthy of you
[02:41.47] Feed 'em the same shit that you made me eat, I'm moving on, forget you
[02:44.80] Oh, now I'm special? I ain't feel special when I was with you
[02:47.97] All I ever felt was this helplessness, imprisoned by a selfish bitch
[02:52.03] Chew me up and spit me out, I fell for this
[02:54.10] So many times it's ridiculous and still I stick with this, I'm sick of this
[02:57.57] But in my sickness and addiction, you're addictive as they get
[03:00.55] Evil as they come, vindictive as they make 'em
[03:03.32] My friends keep askin' me why I can't just walk away from
[03:05.90] I'm addicted to the pain, the stress, the drama, I'm drawn to
[03:09.25] I guess I'm a mess, cursed and blessed, but this time I
[03:12.41] Ain't changin' my mind, I'm climbin' out this abyss
[03:15.17] You're screamin' as I walk out that I'll be missed
[03:17.21] But when you spoke of people who meant the most to you
[03:19.66] You left me off your list
[03:20.88] Fuck you hip hop, I'm leavin' you, my life sentence is served bitch
[03:24.29] And it's just
[03:24.87] Too late for the other side
[03:30.30] Caught in a chase, 25 to life (I'm gone, man)
[03:37.03] Too late for the other side
[03:42.31] Caught in a chase, 25 to life
[03:49.01] Too late
[03:51.98] 
[03:54.18] Caught in a chase, 25 to life
[03:57.89] `;

/** Class representing a PlayerComponent. */
export class PlayerComponent extends IComponent {
	public currentSong: Song = { Id: 0, Name: '', Preview: '', Content: '', ArtistName: '', isLiked: false, ArtistId: 0, Text: '' };
	private cardShown : boolean = false;
	public channel: BroadcastChannel;
	public outputElement: HTMLElement | null = null;
	public nextLinesCount: number = 4;
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element for the new instance.
	 * @param {Song} song - The song object with default values.
	 * @param {boolean} Playing - The initial playing state.
	 */
	constructor(parent: HTMLElement, isMobile: boolean = false,
		song: Song = { Id: 0, Name: '', Preview: '', Content: '', ArtistName: '', isLiked: false, ArtistId: 0, Text: '' },
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
		this.outputElement = this.element.querySelector('[data-section="output"]');
		this.channel.addEventListener('message', event => {
			if (event.data.type === 'playerSync' && event.source !== self) {
				const audio = this.element.querySelector('audio')! as HTMLAudioElement;
				this.setSong({Id: event.data.Id, ArtistId: event.data.ArtistId, Name: event.data.Name, Preview: event.data.Preview, Content: event.data.Content, ArtistName: event.data.ArtistName, isLiked: event.data.isLiked, Text: event.data.Text}, event.data.isLiked);
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
		EventDispatcher.subscribe('show-text', () => {
			const karaoke = document.querySelector('.karaoke')! as HTMLElement;
			karaoke.style.display = 'flex';
		});
		EventDispatcher.subscribe('close-text', () => {
			const karaoke = document.querySelector('.karaoke')! as HTMLElement;
			karaoke.style.display = 'none';
		});
		EventDispatcher.subscribe('pause-text', () => {
			// todo
		});
		EventDispatcher.subscribe('resume-text', () => {
			//todo
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
			Text: this.currentSong.Text,
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
		const player = this.element.querySelector('.player')! as HTMLElement;
		player.style.display = 'block';
		this.syncPlayerState(audio.currentTime);
	}

	public setSong(song: Song, isLiked: boolean): void {
		this.currentSong = song;
		const img = this.querySelector('.avatar')! as HTMLImageElement;
		const mobileImg = this.element.querySelector('.mobile-player__photo') as HTMLImageElement;
		img.src = hosts.s3HOST + song.Preview;
		img.setAttribute('data-section', 'player');
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
		// this.printDynamicText(song.Text);
		this.printDynamicText(songText);
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
		if(audio.muted) {
			audio.muted = false;
		}
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
		if (user === null) {
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
		} else {
			const like = this.element.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
			const mobilelike = this.element.querySelector('[data-section="mobileLikeBtn"]') as HTMLImageElement;
			like.src = '/static/img/Like.svg';
			like.classList.remove('disabled');
			mobilelike.src = '/static/img/Like.svg';
			mobilelike.classList.remove('disabled');
		}
	}

	public printDynamicText(text: string) {
        const lines = text.split('\n');
        this.printInitialText(lines);
        lines.forEach((line: string, index: number) => {
            const delay = this.getTimeInSeconds(line);
			const mainIndex = index;
            setTimeout(() => {
                let outputLines = this.outputElement!.innerHTML.split('<div>');
                outputLines.shift();

				const firstLine = this.element.querySelector('.output__item__main')! as HTMLElement;
				this.changeTextSmoothly(firstLine, outputLines[0]);
				// firstLine.textContent = outputLines[0];

				const initialLines = this.element.querySelectorAll('.output__item')! as NodeListOf<HTMLElement>;
				initialLines.forEach((line: HTMLElement, index: number) => {
					index === 2 
					? mainIndex + this.nextLinesCount >= lines.length ? this.changeTextSmoothly(line, '') : this.changeTextSmoothly(line, this.getText(lines[mainIndex + this.nextLinesCount]))
					: this.changeTextSmoothly(line, outputLines[index + 1]);
					//line.textContent = outputLines[index + 1];
					//line.textContent = this.getText(lines[mainIndex + this.nextLinesCount])
				});
            }, delay * 1000);
        });
    }

    public printInitialText(lines: string[]) {
		const initialFirstLine = this.element.querySelector('.output__item__main')! as HTMLElement;
		initialFirstLine.textContent = '...';

		const initialLines = this.element.querySelectorAll('.output__item')! as NodeListOf<HTMLElement>;
		initialLines.forEach((line: HTMLElement, index: number) => {
			line.textContent = this.getText(lines[index]);
		});

    }

    public getText(line: string) {
        const regex = /\[(\d+:\d+\.\d+)\]\s(.+)/;
        const match = line.match(regex);
        if (match) {
            return match[2];
        }
        return '';
    }

    public getTimeInSeconds(line: string) {
        const regex = /(\d+):(\d+\.\d+)/;
        const match = line.match(regex);
        if (match) {
            const minutes = parseInt(match[1]);
            const seconds = parseFloat(match[2]);
            return minutes * 60 + seconds;
        }
        return 0;
    }

	public changeTextSmoothly(element: HTMLElement, newText: string) {
        element.style.opacity = '0'; // Устанавливаем нулевую непрозрачность
        setTimeout(function() {
            element.textContent = newText; // Изменяем текст
            element.style.opacity = '1'; // Устанавливаем полную непрозрачность
        }, 500); // Задержка в миллисекундах, соответствующая времени анимации (0.5 секунды в данном случае)
    }
}
