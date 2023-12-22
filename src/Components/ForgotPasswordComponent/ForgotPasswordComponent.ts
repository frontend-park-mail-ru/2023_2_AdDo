import IComponent from '../IComponent/IComponent';
import template from './ForgotPasswordComponentTemplate.hbs';

/** Class representing a Login. */
export class ForgotPasswordComponent extends IComponent {

	/**
	 * Creates a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element for the new instance.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({ }));
	}

}
