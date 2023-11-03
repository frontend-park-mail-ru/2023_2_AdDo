import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { User } from '../../types';
import IComponent from '../IComponent/IComponent';
import template  from './ProfileComponentTemplate.hbs';

/** Class representing a Login. */
export class ProfileComponent extends IComponent {
    private user: User = {avatar: '', email: '', username: '', birthdate: ''};
	/**
	 * Constructs a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({port: hosts.s3HOST}));

		EventDispatcher.subscribe('user-changed', (user: User) => {
			this.User = user;
		})
	}

    /**
	 * Returns the User property.
	 *
	 * @return {User} The User property.
	 */
    public get User(): User {
		return this.user;
	}

	/**
	 * Set the User property and render the header.
	 *
	 * @param {User} user - The User object to set.
	 * @return {void} 
	 */
	public set User(user: User) {
		this.user = user;
		this.renderProfile();
	}

    /**
     * Renders the profile.
     *
     * @return {void} 
     */    
    public renderProfile(): void {
		const img = this.element.querySelector('.info__photo') as HTMLImageElement;
		this.user.avatar === '' ? img.src = '/static/img/worm.jpg' : img.src = this.user.avatar;
		this.element.querySelector('[data-section="bigUsername"]')!.textContent = this.user.username;
		this.element.querySelector('[data-section="bigEmail"]')!.textContent = this.user.email;
		this.element.querySelector('[data-section="username"]')!.textContent = this.user.username;
		this.element.querySelector('[data-section="email"]')!.textContent = this.user.email;
		this.element.querySelector('[data-section="birthDate"]')!.textContent = this.user.birthdate;
		this.element.querySelector('[data-section="fileInput"]')!.textContent = this.user.avatar;
		// this.parent.innerHTML = '';
		// this.parent.innerHTML = template({ user: this.user, port: hosts.s3HOST });
	}


}
