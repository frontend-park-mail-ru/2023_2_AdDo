import { Component } from '../Component';
import type { Input } from '../../types';
import { source } from './LoginTemplate'
import * as Handlebars from 'handlebars';

/** Class representing a Login. */
export class Login extends Component {
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
    * Render login page.
    */
	public render(): void {
		const items = this.Items.map((element) => {
			return {...element, className: 'authInput'};
		});

		const template = Handlebars.compile(source);
		this.parent.innerHTML = template({items});
	}
}