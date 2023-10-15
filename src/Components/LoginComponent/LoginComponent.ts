import IComponent from '../IComponent/IComponent';
import template  from './LoginComponentTemplate.hbs';
import * as Handlebars from 'handlebars';
import { LoginComponentConfig } from './LoginComponentConst';

/** Class representing a Login. */
export class LoginComponent extends IComponent {

	constructor(parent: HTMLElement) {
		super(parent, template({ LoginComponentConfig }));
	}

}
