import IComponent from '../IComponent/IComponent';
import template from './HeaderComponentTemplate.hbs'
import { Callback, User } from '../../types';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { isJSDocThisTag } from 'typescript';

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
				const menu: HTMLElement = this.parent.querySelector('.menu__links"]')!;
				const menuu: HTMLElement =	this.parent.querySelector('.mobile-menu"]')!;
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
				document.getElementById('overlay')!.style.display = 'none';
				this.parent.querySelector('[data-section="logout-confirmation"]')!.classList.toggle('logout-confirmation_active');
				break;
		}
	}

	private bindClickEvent(listener: Callback): void {
		this.parent.addEventListener('click', listener);
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
	}
}
