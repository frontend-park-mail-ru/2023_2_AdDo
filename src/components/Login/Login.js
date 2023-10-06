import template from './Login.hbs';
import { Component } from '../Component';

/** Class representing a Login. */
export class Login extends Component{

	/**
     * Get the items.
     * @return {Object} items.
     */
	get items() {
		return Object.entries(this.$config).map(([key, {type, text, name}]) => ({
			key,
			type,
			text,
			name, 
		}));
	}

	/**
    * Render login page.
    */
	render() {
		const items = this.items.map((element) => {
			let className = 'authInput';
			return {...element, className};
		});

		this.$parent.innerHTML = template({items});
	}
}
