import IComponent from '../IComponent/IComponent';
import template from './LoginComponentTemplate.hbs';
import { LoginComponentConfig } from './LoginComponentConst';

/** Class representing a Login. */
export class LoginComponent extends IComponent {

	/**
	 * Creates a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element for the new instance.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({ LoginComponentConfig }));
	}

}
