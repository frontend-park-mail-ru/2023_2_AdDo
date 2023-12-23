import { Callback, OnboardArtist } from '../../types';
import template from './ArtistsOnboardComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a ArtistComponent. */
export class ArtistsOnboardComponent extends IComponent {
	private artists: Array<OnboardArtist>;
	private picked: Array<OnboardArtist> = [];
	/**
	 * Create a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Artist} artist - The artist object.
	 */
	constructor(parent: HTMLElement, artists: Array<OnboardArtist>) {
		super(parent, template({ artists, port: hosts.s3HOST }));
		this.artists = artists;
		this.bindInputEvent(this.handleInput.bind(this));
		this.bindClickEvent(this.handleClick.bind(this));
	}

	private handleInput(e: Event): void {
		EventDispatcher.emit('onboard-search', (e.target as HTMLInputElement).value);
	}

	private bindInputEvent(listener: Callback): void {
		this.parent.addEventListener('input', listener);
	}

	/**
	 * Returns the Artist object.
	 *
	 * @return {Artist} The Artist object.
	 */
	public get Artists(): Array<OnboardArtist> {
        return this.artists;
    }
	/**
	 * A setter function for the Artist property.
	 *
	 * @param {Artist} artist - The new Artist to set.
	 */
	public set Artists(artists: Array<OnboardArtist>) {
        this.artists = artists;
		this.renderContent();
	}

    private bindClickEvent(listener: Callback): void {
		this.parent.addEventListener('click', listener);
	}

    private handleClick(e: Event): void {
		const target: HTMLElement = e.target as HTMLElement;
		const value: string = target.getAttribute('data-section')!
		switch (value) {
			case 'makeArtistActive':
				this.makeActive(target);
                return;
		}
	}

    public getActives(): Array<OnboardArtist> {
        const result: Array<OnboardArtist> = [];
        const activeArtists = this.parent.querySelectorAll('.active-genre');
        const error: HTMLElement = document.querySelector('.onboard__error')!;
        if(activeArtists.length > 2) {
			if(error.classList.contains('onboard__error__active')) {
            	error.classList.remove('onboard__error__active');
			}
            activeArtists.forEach((el) => {
                el.getAttribute('data-id');
                result.push(this.artists.find((artist) => artist.Id === parseInt(el.getAttribute('data-id')!))!);
            });
        } else {
			error.classList.add('onboard__error__active');
        }
        return result;
    }

    public makeActive(el: HTMLElement): void {
        if(el.classList.contains('active-artist')) {
            el.classList.remove('active-artist');
			this.picked.filter((artist) => artist.Id !== parseInt(el.getAttribute('data-id')!));
            return;
        }
        el.classList.add('active-artist');
		this.picked.push({
			Id: parseInt(el.getAttribute('data-id')!),
			Name: el.getAttribute('data-name')!,
			Avatar: el.getAttribute('data-src')!
		});
    }

	/**
	 * Renders the content by updating the innerHTML of the parent element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		if (this.isMounted) {
			const list = this.element.querySelector('.onboard__list')! as HTMLElement;
			list.innerHTML = '';
			this.picked.forEach((artist) => {
				const li = document.createElement('li');
				li.classList.add('onboard__list__item');
				const img = document.createElement('img');
				img.classList.add('onboard__list__item__photo');
				img.classList.add('active-artist');
				img.setAttribute('src', hosts.s3HOST + artist.Avatar);
				img.setAttribute('data-section', 'makeArtistActive');
				img.setAttribute('data-id', artist.Id.toString());
				img.setAttribute('data-src', artist.Avatar);
				img.setAttribute('data-name', artist.Name);
				li.appendChild(img);
				const div = document.createElement('div');
				div.classList.add('medium-text');
				div.classList.add('onboard__list__item__name');
				div.textContent = artist.Name;
				li.appendChild(div);
				list.appendChild(li);
			});
			let filteredArtists = this.artists.filter(element => !this.picked.includes(element));
			filteredArtists.forEach((artist) => {
				const li = document.createElement('li');
				li.classList.add('onboard__list__item');
				const img = document.createElement('img');
				img.classList.add('onboard__list__item__photo');
				img.setAttribute('src', hosts.s3HOST + artist.Avatar);
				img.setAttribute('data-section', 'makeArtistActive');
				img.setAttribute('data-id', artist.Id.toString());
				img.setAttribute('data-src', artist.Avatar);
				img.setAttribute('data-name', artist.Name);
				li.appendChild(img);
				const div = document.createElement('div');
				div.classList.add('medium-text');
				div.classList.add('onboard__list__item__name');
				div.textContent = artist.Name;
				li.appendChild(div);
				list.appendChild(li);
			});
		}
	}
}
