import type { Input } from '../../types';
import IComponent from '../IComponent/IComponent';
import  template  from './SignUpComponentTemplate.hbs';
import * as Handlebars from 'handlebars';
import { SignUpConfig } from './SignUpComponentConst';

/** Class representing a SignUp. */
export class SignUpComponent extends IComponent {
	protected items: Array<Input> = [];

	constructor(parent: HTMLElement) {
		super(parent, template({ SignUpConfig }));
	}
}
