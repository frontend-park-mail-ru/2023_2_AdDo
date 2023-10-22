import IComponent from '../IComponent/IComponent';
import template from './PlayerComponentTemplate.hbs';
import { Song } from '../../types';
import { PlayerComponentConfig } from './PlayerComponentConfig';
import { s3HOST } from '../../HostConsts';

/** Class representing a PlayerComponent. */
export class PlayerComponent extends IComponent {
	/**
     * Sets parent, config and port for images.
     * @param {HTMLElement} parent
	 * @param {string} port  
	 * @param {Song} song  
	 * @param {boolean} Playing  
     */
	constructor(parent: HTMLElement, 
				port: string, 
				song: Song = {Id: 0, Name: '', Preview: '/images/grey.jpg', Content: '', ArtistName: '',}, 
				Playing: boolean = false) {
		super(parent, template({PlayerComponentConfig, song, port, Playing}));
		this.bindTimeUpdateEvent(this.updateProgress.bind(this));
		this.bindClickEvent(this.setProgress.bind(this));
	}
	
	public playSong(song: Song): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		const img = this.querySelector('.avatar')! as HTMLImageElement;
		img.src = song.Preview;
		this.querySelector('.title')!.textContent = song.Name;
		this.querySelector('.artist')!.textContent = song.ArtistName;
		audio.src = s3HOST + song.Content;
		audio.play();
	}

	public resumeSong(): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.play();
	}
	public pauseSong(): void {
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		audio.pause();
	}

	private updateProgress(e: Event): void {
		const {duration, currentTime} = e.target as HTMLAudioElement;
		const progressPercent = (currentTime / duration) * 100;
		console.log(currentTime);
		const progress: HTMLElement = this.querySelector('.progress')!;
		progress.style.width = `${progressPercent}%`;
	}

	private setProgress(e: Event): void {
		const width: number = this.querySelector('.progressBar')!.clientWidth;
		const target = e as MouseEvent;
		const x: number = target.offsetX;
		const audio = this.querySelector('audio')! as HTMLAudioElement;
		const duration = audio.duration;
		audio.currentTime = (x / width) * duration;
	}

	private bindClickEvent(listener: any): void {
        this.element.querySelector('.progressBar')!.addEventListener('click', listener);
    }

	private bindTimeUpdateEvent(listener: any): void {
		const a = this.element.querySelector('audio')!;
        this.element.querySelector('audio')!.addEventListener('timeupdate', listener);
    }
}
