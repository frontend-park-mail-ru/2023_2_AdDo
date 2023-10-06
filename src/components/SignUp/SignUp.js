import template from './SignUp.hbs';
import { Component } from '../Component';

/** Class representing a SignUp. */
export class Signup extends Component{
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
     * Render signup page.
     */
	render() {
		const items = this.items.map((element) => {
			let className = 'authInput';
			return {...element, className};
		});

		this.$parent.innerHTML = template({items});
	}
}
