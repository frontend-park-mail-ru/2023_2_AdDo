import IComponent from '../IComponent/IComponent';
import template from './HeaderComponentTemplate.hbs'
import { Album, Artist, Callback, Playlist, Song, User } from '../../types';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

/** Class representing a HeaderComponent. */
export class HeaderComponent extends IComponent {
	private user: User | null = { avatar: '', email: '', username: '', birthdate: '' };

	/**
	 * Constructs a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({ port: hosts.s3HOST, logo: '/static/img/Logo.svg' }));
		this.bindClickEvent(this.handleClick.bind(this));
		this.bindInputEvent(this.handleInput.bind(this));
		this.bindFocusEvent(this.handleFocus.bind(this));
		this.bindBlurEvent(this.handleBlur.bind(this));
		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		});
		EventDispatcher.subscribe('logout-confirmation', () => {
			document.getElementById('overlay')!.style.display = 'block';
			this.parent.querySelector('[data-section="logout-confirmation"]')!.classList.toggle('logout-confirmation_active');
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
		this.renderHeader();
	}
	
	private handleClick(e: Event): void {
		const target: HTMLElement = e.target as HTMLElement;
		const value: string = target.getAttribute('data-section')!
		switch (value) {
			case 'menu-icon':
				e.preventDefault();
				const mobileMenu: HTMLElement = this.parent.querySelector('[data-section="mobile-menu"]')!;
				const menuIcon: HTMLElement = this.parent.querySelector('[data-section="menu-icon"]')!;
				mobileMenu.style.display === 'grid' ? mobileMenu.style.display = 'none' : mobileMenu.style.display = 'grid';
				menuIcon.classList.toggle('close-icon');
				break;
			case 'search':
				e.preventDefault();
				let searchInput: HTMLElement = this.parent.querySelector('[data-section="inputSearch"]')!;
				searchInput.classList.toggle('search-active');
				const menu: HTMLElement = this.parent.querySelector('.menu__links')!;
				const menuu: HTMLElement =	this.parent.querySelector('.mobile-menu')!;
				menu.style.display === 'none' ? menu.style.display = 'flex' : menu.style.display = 'none';
				menuu.style.display === 'none' ? menuu.style.display = 'flex' : menuu.style.display = 'none';
				break;
			case 'confirm':
				e.preventDefault();
				EventDispatcher.emit('logout');
				document.getElementById('overlay')!.style.display = 'none';
				this.parent.querySelector('[data-section="logout-confirmation"]')!.classList.toggle('logout-confirmation_active');
				break;
			case 'cancel':
				e.preventDefault();
				document.getElementById('overlay')!.style.display = 'none';
				this.parent.querySelector('[data-section="logout-confirmation"]')!.classList.toggle('logout-confirmation_active');
				break;
			case 'searchlink':
				const input: HTMLInputElement = document.querySelector('.input-search')!;
				const link: HTMLElement = document.querySelector('.menu__search-results__link')!;
				link.setAttribute('data-url', '/search?query=' + input.value);
				break;
		}
	}

	private handleBlur(e: Event): void {
		const searchresults: HTMLElement = this.parent.querySelector('.menu__search-results')!;
		searchresults.style.display = 'none';
	}

	private handleFocus(e: Event): void {
		const searchresults: HTMLElement = this.parent.querySelector('.menu__search-results')!;
		searchresults.style.display = 'grid';
	}

	private handleInput(e: Event): void {
		EventDispatcher.emit('search', (e.target as HTMLInputElement).value);
	}

	private bindInputEvent(listener: Callback): void {
		this.parent.addEventListener('input', listener);
	}

	private bindClickEvent(listener: Callback): void {
		this.parent.addEventListener('click', listener);
	}

	public bindFocusEvent(listener: Callback): void {
		this.element.querySelector('.input-search')!.addEventListener('focus', listener);
	}

	public bindBlurEvent(listener: Callback): void {
		this.element.querySelector('.input-search')!.addEventListener('blur', listener);
	}

	public bindSearchEvents(): void {
		this.parent.querySelector('.input-search')!.addEventListener('focus', this.handleFocus.bind(this));
		this.parent.querySelector('.input-search')!.addEventListener('blur', this.handleBlur.bind(this));
	}

	public searchResults(tracks: Array<Song>, albums: Array<Album>, artists: Array<Artist>, playlists: Array<Playlist>): void {
		const searchPopUp = this.parent.querySelector('.search-list')!;
		searchPopUp.innerHTML = '';
		tracks.forEach((track, index) => {
			if (index > 3) {
				return;
			}
			const li = document.createElement('li');
			li.classList.add('search-list__item');
			const a = document.createElement('a');
			a.classList.add('search-list__link');
			a.classList.add('medium-text');
			a.setAttribute('href', `/track/${track.Id}`);
			a.setAttribute('data-section', 'link');
			a.setAttribute('data-url', `/track/${track.Id}`);
			a.textContent = track.Name;
			li.appendChild(a);
			searchPopUp.appendChild(li);
		});
		albums.forEach((album, index) => {
			if (index > 3) {
				return;
			}
			const li = document.createElement('li');
			li.classList.add('search-list__item');
			const a = document.createElement('a');
			a.classList.add('search-list__link');
			a.classList.add('medium-text');
			a.setAttribute('href', `/album/${album.Id}`);
			a.setAttribute('data-section', 'link');
			a.setAttribute('data-url', `/album/${album.Id}`);
			a.textContent = album.Name;
			li.appendChild(a);
			searchPopUp.appendChild(li);
		});
		artists.forEach((artist, index) => {
			if (index > 3) {
				return;
			}
			const li = document.createElement('li');
			li.classList.add('search-list__item');
			const a = document.createElement('a');
			a.classList.add('search-list__link');
			a.classList.add('medium-text');
			a.setAttribute('href', `/artist/${artist.Id}`);
			a.setAttribute('data-section', 'link');
			a.setAttribute('data-url', `/artist/${artist.Id}`);
			a.textContent = artist.Name;
			li.appendChild(a);
			searchPopUp.appendChild(li);
		});
		playlists.forEach((track, index) => {
			if (index > 3) {
				return;
			}
			const li = document.createElement('li');
			li.classList.add('search-list__item');
			const a = document.createElement('a');
			a.classList.add('search-list__link');
			a.classList.add('medium-text');
			a.setAttribute('href', `/album/${track.Id}`);
			a.setAttribute('data-section', 'link');
			a.setAttribute('data-url', `/album/${track.Id}`);
			a.textContent = track.Name;
			li.appendChild(a);
			searchPopUp.appendChild(li);
		});

	}
	/**
	 * Renders the header of the page.
	 *
	 * @return {void} This function does not return a value.
	 */
	public renderHeader(): void {
		let randomlogo = '';
		let randomNum = Math.floor(Math.random() * 3);
		switch (randomNum) {
			case 0:
				randomlogo = '/static/img/Logo.svg';
				break;
			case 1:
				randomlogo = '/static/img/Logo2.svg';
				break;
			case 2:
				randomlogo = '/static/img/Logo3.svg';
				break;
		}
		const menuRest: HTMLUListElement = this.parent.querySelector('.menu__rest')!;
		menuRest.lastElementChild!.remove();
		const li: HTMLLIElement = document.createElement('li');
		li.classList.add('menu__item');
		if(this.user !== null) {
			const div = document.createElement('div');
			div.classList.add('mini-profile');
			const img: HTMLImageElement = document.createElement('img');
			if(this.user.avatar !== null && this.user.avatar !== '') {
				img.setAttribute('src', hosts.s3HOST + this.user.avatar);
			} else {
				img.setAttribute('src', '/static/img/worm.webp');
			}
			img.classList.add('mini-profile__avatar');
			img.setAttribute('data-url', '/profile');
			img.setAttribute('data-section', 'link');
			div.appendChild(img);
			const h2: HTMLHeadingElement = document.createElement('h2');
			h2.classList.add('menu-item__link');
			h2.setAttribute('data-section', 'signout');
			h2.textContent = 'Войти';
			div.appendChild(h2);
			li.appendChild(div);
		} else {
			const button: HTMLButtonElement = document.createElement('button');
			button.classList.add('default-button');
			button.setAttribute('data-url', '/login');
			button.setAttribute('data-section', 'link');
			button.textContent = 'Войти';
			li.appendChild(button);
		}
		menuRest.appendChild(li);
		const logo = this.parent.querySelector('.logo__photo')!;
		logo.setAttribute('src', randomlogo);
	}
}
