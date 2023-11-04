import IComponent from '../IComponent/IComponent';
import template from './PlayerComponentTemplate.hbs';
import { Callback, Song, User } from '../../types';
import { PlayerComponentConfig } from './PlayerComponentConfig';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a PlayerComponent. */
export class PlayerComponent extends IComponent {
	private currentSong: Song = {Id: 0, Name: '', Preview: '', Content: '', ArtistName: '', isLiked: false};
	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element for the new instance.
	 * @param {Song} song - The song object with default values.
	 * @param {boolean} Playing - The initial playing state.
	 */	
	constructor(parent: HTMLElement, 
				song: Song = {Id: 0, Name: '', Preview: '', Content: '', ArtistName: '', isLiked: false}, 
				Playing: boolean = false) {
		super(parent, template({PlayerComponentConfig, song: song, port: hosts.s3HOST, Playing, isLiked: false, Auth: false}));
		EventDispatcher.subscribe('user-changed', this.userChanged.bind(this));
	}

	/**
	 * Plays a song.
	 *
	 * @param {Song} song - The song to be played.
	 * @return {void} 
	 */	
	public playSong(song: Song, isLiked: boolean): void {
		this.currentSong = song;
		const img = this.querySelector('.avatar')! as HTMLImageElement;
		img.src = hosts.s3HOST + song.Preview;
		const like = this.querySelector('[data-section="likeBtn"]')! as HTMLImageElement;
		if(like) {
			isLiked ? like.src = '/static/img/LikePressed.svg' : like.src = '/static/img/Like.svg';
		}
		this.querySelector('.title')!.textContent = song.Name;
		this.querySelector('.artistname')!.textContent = song.ArtistName;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.src = hosts.s3HOST + song.Content;
		const volumeSlider = this.querySelector('.volume-bar')! as HTMLInputElement;
		if(parseInt(volumeSlider.value) === 0) {
			volumeSlider.value = '50';
			audio.volume = 0.5;
		} else {
			audio.volume = (parseInt(volumeSlider.value) / 100);
		}
		audio.play();
	}

	/**
	 * Resumes the currently paused song.
	 *
	 * @return {void} 
	 */
	public resumeSong(): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.play();
	}
	/**
	 * Pauses the currently playing song.
	 *
	 * @return {void}
	 */
	public pauseSong(): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.pause();
	}

	/**
	 * Updates the progress of the audio player based on the current time and duration.
	 *
	 * @param {Event} e - The event object.
	 * @return {void} This function does not return anything.
	 */
	private updateProgress(e: Event): void {
		const {duration, currentTime} = e.target as HTMLAudioElement;
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

	/**
	 * Binds a 'click' event listener to the '.progressBar' element.
	 *
	 * @param {Callback} listener - The callback function to be executed when the 'click' event is triggered.
	 * @return {void} 
	 */
	private bindSetProgressEvent(listener: Callback): void {
        this.element.querySelector('.progress-bar')!.addEventListener('click', listener);
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
		this.bindTimeUpdateEvent(this.updateProgress.bind(this));
		this.bindSetProgressEvent(this.setProgress.bind(this));
		this.bindVolumeSliderEvent(this.setVolumeSlider.bind(this));
	}

	public userChanged(user: User): void {
		if(user !== null) {
			const audio = this.element.querySelector('audio') as HTMLAudioElement;
			audio.src = '';
			const like = this.element.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
			like.src = '/static/img/Like.svg';
			like.classList.remove('disabled');
			const img = this.element.querySelector('.avatar') as HTMLImageElement;
			img.src = '/static/img/grey.png';
			this.element.querySelector('.artistname')!.textContent = '';
			this.element.querySelector('.title')!.textContent = '';
		} else {
			const audio = this.element.querySelector('audio') as HTMLAudioElement;
			audio.src = '';
			const like = this.element.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
			like.src = '/static/img/Like.svg';
			like.classList.remove('disabled');
			const img = this.element.querySelector('.avatar') as HTMLImageElement;
			img.src = '/static/img/grey.png';
			this.element.querySelector('.artistname')!.textContent = '';
			this.element.querySelector('.title')!.textContent = '';
		}
	}
}
