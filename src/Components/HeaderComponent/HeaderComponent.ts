import  IComponent  from '../IComponent/IComponent';
import { HeaderConfig } from './HeaderComponentConst';
import  template from './HeaderComponentTemplate.hbs'
import * as Handlebars from 'handlebars';

/** Class representing a Header. */
export class HeaderComponent extends IComponent {

/**
     * Sets parent for HeaderComponent.
     * @param {HTMLElement} parent
     */
	constructor(parent: HTMLElement) {
		super(parent, template({HeaderConfig}));
	}
}
