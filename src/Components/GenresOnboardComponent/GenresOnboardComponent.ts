import { Callback, OnboardGenre } from '../../types';
import template from './GenresOnboardComponentTemplate.hbs';
import IComponent from '../IComponent/IComponent';
import hosts from '../../HostConsts';

/** Class representing a ArtistComponent. */
export class GenresOnboardComponent extends IComponent {
	private genres: Array<OnboardGenre>;
	/**
	 * Create a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 * @param {Artist} artist - The artist object.
	 */
	constructor(parent: HTMLElement, genres: Array<OnboardGenre>) {
		super(parent, template({ genres, port: hosts.s3HOST }));
		this.genres = genres;
		this.bindClickEvent(this.handleClick.bind(this));
	}

	/**
	 * Returns the Artist object.
	 *
	 * @return {Artist} The Artist object.
	 */
	public get Genres(): Array<OnboardGenre> {
        return this.genres;
    }
	/**
	 * A setter function for the Artist property.
	 *
	 * @param {Artist} artist - The new Artist to set.
	 */
	public set Genres(genres: Array<OnboardGenre>) {
        this.genres = genres;
		this.renderContent();
	}

    private bindClickEvent(listener: Callback): void {
		this.parent.addEventListener('click', listener);
	}

    private handleClick(e: Event): void {
		const target: HTMLElement = e.target as HTMLElement;
		const value: string = target.getAttribute('data-section')!
		switch (value) {
			case 'makeActive':
				this.makeActive(target);
                return;
		}
	}

    public makeActive(el: HTMLElement): void {
        if(el.classList.contains('active-genre')) {
            el.classList.remove('active-genre');
            return;
        }
        el.classList.add('active-genre');
    }

    public getActives(): Array<OnboardGenre> {
        const result: Array<OnboardGenre> = [];
        const activeGenres = this.parent.querySelectorAll('.active-genre');
        const error: HTMLElement = document.querySelector('.onboard__error')!;
        if(activeGenres.length > 2) {
			if(error.classList.contains('onboard__error__active')) {
            	error.classList.remove('onboard__error__active');
			}
            activeGenres.forEach((el) => {
                el.getAttribute('data-id');
                result.push(this.genres.find((genre) => genre.Id === parseInt(el.getAttribute('data-id')!))!);
            });
        } else {
			error.classList.add('onboard__error__active');
        }
        return result;
    }

	/**
	 * Renders the content by updating the innerHTML of the parent element.
	 *
	 * @return {void} 
	 */
	public renderContent(): void {
		if (this.isMounted) {
			this.parent.innerHTML = '';
			this.parent.innerHTML = template({ Genres: this.genres, port: hosts.s3HOST});
		}
	}
}
