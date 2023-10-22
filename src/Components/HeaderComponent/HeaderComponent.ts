import UserModel from '../../Models/UserModel/UserModel';
import  IComponent  from '../IComponent/IComponent';
import { HeaderConfig } from './HeaderComponentConst';
import  template from './HeaderComponentTemplate.hbs'
import { User } from '../../types';
import { s3HOST } from '../../HostConsts';

/** Class representing a Header. */
export class HeaderComponent extends IComponent {
     private user: User = {avatar: '', email: '', username: ''};
/**
     * Sets parent for HeaderComponent.
     * @param {HTMLElement} parent
     */
	constructor(parent: HTMLElement) {
		super(parent, template({HeaderConfig, s3HOST}));
	}

     public get User() : User {
		return this.user;
	}


	public set User(user: User) {
		this.user = user;
		this.renderHeader();
	}

     public renderHeader(): void {
		this.parent.innerHTML = '';
		this.parent.innerHTML = template(template({HeaderConfig, s3HOST, user: this.user}));
	}

}
