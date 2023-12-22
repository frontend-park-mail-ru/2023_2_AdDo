import IComponent from '../IComponent/IComponent';
import template from './ResetPasswordComponentTemplate.hbs';

/** Class representing a Login. */
export class ResetPasswordComponent extends IComponent {

	/**
	 * Creates a new instance of the constructor.
	 *
	 * @param {HTMLElement} parent - The parent element for the new instance.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({ }));
	}

}
