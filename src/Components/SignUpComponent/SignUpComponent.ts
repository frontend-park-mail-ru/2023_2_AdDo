import type { Input } from '../../types';
import IComponent from '../IComponent/IComponent';
import template from './SignUpComponentTemplate.hbs';
import { SignUpConfig } from './SignUpComponentConst';
import formatDate from '../../Modules/lib/FormatDate';



/** Class representing a SignUp. */
export class SignUpComponent extends IComponent {
	protected items: Array<Input> = [];

	/**
	 * Constructor for the class.
	 *
	 * @param {HTMLElement} parent - The parent element.
	 */
	constructor(parent: HTMLElement) {
		super(parent, template({ SignUpConfig, Date: formatDate(new Date()) }));
	}

}
