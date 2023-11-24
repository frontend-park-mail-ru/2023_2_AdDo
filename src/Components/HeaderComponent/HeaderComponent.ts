import IComponent from '../IComponent/IComponent';
import template from './HeaderComponentTemplate.hbs'
import { Callback, User } from '../../types';
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
		this.bindSearchClickEvent(this.handleSearchClick.bind(this));
		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
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
		let mobileMenu: HTMLElement = this.element.querySelector('[data-section="mobile-menu"]')!;
		let menuIcon: HTMLElement = this.element.querySelector('[data-section="menu-icon"]')!;
		mobileMenu.style.display = (mobileMenu.style.display === 'grid') ? 'none' : 'grid';
		menuIcon.classList.toggle('close-icon');
	}

	private handleSearchClick(e: Event): void {
		let searchInput: HTMLElement = this.element.querySelector('[data-section="inputSearch"]')!;
		searchInput.style.display = (searchInput.style.display === 'block') ? 'none' : 'block';
	}

	private bindSearchClickEvent(listener: Callback): void {
		document.querySelector('[data-section="search"]')!.addEventListener('click', listener);
	}
	private bindClickEvent(listener: Callback): void {
		document.querySelector('[data-section="menu-icon"]')!.addEventListener('click', listener);
	}

	public bindEvents(): void {
		this.bindClickEvent(this.handleClick.bind(this));
		this.bindSearchClickEvent(this.handleSearchClick.bind(this));
	}
	/**
	 * Renders the header of the page.
	 *
	 * @return {void} This function does not return a value.
	 */
	public renderHeader(): void {
		this.parent.innerHTML = '';
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
		this.parent.innerHTML = template({ port: hosts.s3HOST, user: this.user, logo: randomlogo });
		this.bindClickEvent(this.handleClick.bind(this));
		this.bindSearchClickEvent(this.handleSearchClick.bind(this));
	}
}
