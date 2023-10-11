import { Component } from '../Component';
import type { Item } from '../../types'
import { source } from './HeaderTemplate'
import * as Handlebars from 'handlebars';

/** Class representing a Header. */
export class Header extends Component {
	protected items: Array<Item> = [];

	/**
     * Get the items.
     * @return {Array<Item>} items.
     */
	public get Items(): Array<Item> {
		return Object.entries(this.config).map(([key, { href, name}]) => ({
			key,
			href,
			name,
		}));
	}
	/**
    * Render header.
    */
	public render(isAuth: boolean): void {
		const items = this.Items.map((element) => {
			return {...element, className: 'menuItem'};
		});

		const template = Handlebars.compile(source);
		this.parent.innerHTML = template({items, isAuth});
	}
}
