import { Component } from '../Component';
import type { Input } from '../../types';
import './Login.hbs';
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
		const items = this.items.map((element) => {
			let className = 'authInput';
			return {...element, className};
		});

		const template = Handlebars.compile('./Login.hbs');
		this.parent.innerHTML = template({items});
	}
}
