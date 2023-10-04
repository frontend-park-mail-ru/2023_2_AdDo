import template from './Header.hbs';
import { Component } from '../Component';

/** Class representing a Header. */
export class Header extends Component{
	/**
    * Render header.
    */
	render(isAuth) {
		const items = this.items.map((element) => {
			let className = 'menuItem';
			return {...element, className};
		});

		this.$parent.innerHTML = template({items, isAuth});
	}
}
