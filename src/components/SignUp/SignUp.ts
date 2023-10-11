import type { Input } from '../../types';
import { Component } from '../Component';
import { source } from './SignUpTemplate';
import * as Handlebars from 'handlebars';

/** Class representing a SignUp. */
export class Signup extends Component {
	protected items: Array<Input> = [];
	/**
     * Get the items.
     * @return {Object} items.
     */
	public get Items(): Array<Input> {
		return Object.entries(this.config).map(([key, {type, text, name}]) => ({
			key,
			type,
			text,
			name, 
		}));
	}

	/**
     * Render signup page.
     */
	public render(): void {
		const items = this.Items.map((element) => {
			let className = 'authInput';
			return {...element, className};
		});

		const template = Handlebars.compile(source);
		this.parent.innerHTML = template({items});
	}
}