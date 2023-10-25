import IComponent from '../IComponent/IComponent';
import template from './PlayerComponentTemplate.hbs';
import { Callback, Song } from '../../types';
import { PlayerComponentConfig } from './PlayerComponentConfig';
import hosts from '../../HostConsts';

/** Class representing a PlayerComponent. */
export class PlayerComponent extends IComponent {

	/**
	 * Constructs a new instance of the class.
	 *
	 * @param {HTMLElement} parent - The parent element for the new instance.
	 * @param {Song} song - The song object with default values.
	 * @param {boolean} Playing - The initial playing state.
	 */	
	constructor(parent: HTMLElement, 
				song: Song = {Id: 0, Name: '', Preview: '/images/grey.jpg', Content: '', ArtistName: '',}, 
				Playing: boolean = false) {
		super(parent, template({PlayerComponentConfig, song, port: hosts.s3HOST, Playing}));
		this.bindTimeUpdateEvent(this.updateProgress.bind(this));
		this.bindSetProgressEvent(this.setProgress.bind(this));
		this.bindSetVolumeEvent(this.setVolume.bind(this));
	}

	/**
	 * Plays a song.
	 *
	 * @param {Song} song - The song to be played.
	 * @return {void} 
	 */	
	public playSong(song: Song): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		const img = this.querySelector('.avatar')! as HTMLImageElement;
		img.src = hosts.s3HOST + song.Preview;
		this.querySelector('.title')!.textContent = song.Name;
		this.querySelector('.artist')!.textContent = song.ArtistName;
		audio.src = hosts.s3HOST + song.Content;
		const width: number = this.querySelector('.volumeBar')!.clientWidth;
		const volumee: HTMLElement = this.querySelector('.volumee')!;
		const volumeeWidth: number = volumee.clientWidth;
		if(volumeeWidth === 0) {
			volumee.style.width = '50%';
			audio.volume = 0.5;
		} else {
			audio.volume = (volumeeWidth / width);
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
		const progress: HTMLElement = this.querySelector('.progress')!;
		progress.style.width = `${progressPercent}%`;
	}

	/**
	 * Sets the progress of the audio playback based on the position of the mouse click.
	 *
	 * @param {Event} e - The event object representing the mouse click.
	 * @return {void} 
	 */
	private setProgress(e: Event): void {
		const width: number = this.querySelector('.progressBar')!.clientWidth;
		const target = e as MouseEvent;
		const x: number = target.offsetX;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		const duration = audio.duration;
		audio.currentTime = (x / width) * duration;
	}
	
	/**
	 * Sets the volume of the audio player based on the position of the mouse click.
	 *
	 * @param {Event} e - The event object representing the mouse click.
	 * @return {void} 
	 */
	private setVolume(e: Event): void {
		const width: number = this.querySelector('.volumeBar')!.clientWidth;
		const target = e as MouseEvent;
		const x: number = target.offsetX;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.volume = (x / width);
		const volumee: HTMLElement = this.querySelector('.volumee')!;
		const volumeePercent = (audio.volume * 100).toFixed(0);
		volumee.style.width = `${volumeePercent}%`;
	}

	/**
	 * Binds a 'click' event listener to the '.progressBar' element.
	 *
	 * @param {Callback} listener - The callback function to be executed when the 'click' event is triggered.
	 * @return {void} 
	 */
	private bindSetProgressEvent(listener: Callback): void {
        this.element.querySelector('.progressBar')!.addEventListener('click', listener);
    }

	/**
	 * Binds the 'click' event on the volumeBar element to the provided listener callback function.
	 *
	 * @param {Callback} listener - The callback function to be executed when the 'click' event is triggered.
	 * @return {void} 
	 */
	private bindSetVolumeEvent(listener: Callback): void {
		this.element.querySelector('.volumeBar')!.addEventListener('click', listener);
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
}
