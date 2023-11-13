import IComponent from '../IComponent/IComponent';
import { HeaderConfig } from './HeaderComponentConst';
import template from './HeaderComponentTemplate.hbs'
import { User } from '../../types';
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
		super(parent, template({ HeaderConfig, port: hosts.s3HOST, logo: '/static/img/Logo.svg' }));

		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		})
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
		this.parent.innerHTML = template({ HeaderConfig, port: hosts.s3HOST, user: this.user, logo: randomlogo });
	}
}
