import { Callback, OnboardArtist } from '../../types';
import template from './ArtistsOnboardComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';

/** Class representing a ArtistComponent. */
export class ArtistsOnboardComponent extends IComponent {
	private artists: Array<OnboardArtist>;
	/**
	 * Create a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Artist} artist - The artist object.
	 */
	constructor(parent: HTMLElement, artists: Array<OnboardArtist>) {
		super(parent, template({ artists, port: hosts.s3HOST }));
		this.artists = artists;
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
			case 'onboardArtists':

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
            return;
        }
        el.classList.add('active-artist');
    }

	/**
	 * Renders the content by updating the innerHTML of the parent element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		if (this.isMounted) {
			this.parent.innerHTML = '';
			this.parent.innerHTML = template({ Artists: this.artists, port: hosts.s3HOST});
		}
	}
}
