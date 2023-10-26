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
	constructor(parent: HTMLElement, User: User) {
		super(parent, template({ User }));
        this.user = User;
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
		this.parent.innerHTML = '';
		this.parent.innerHTML = template(template({user: this.user}));
	}
}
