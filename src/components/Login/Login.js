import Handlebars from 'handlebars'
import template from './Login.hbs';

export class Login {
    #parent
    #config

    constructor(parent, config) {
        this.#parent = parent;
        this.#config = config;
    }

    get config() {
        return this.#config;
    }

    get items() {
        return Object.entries(this.config).map(([key, {type, text, name}]) => ({
            key,
            type,
            text,
            name, 
        }));
    }

    render() {
        const items = this.items.map((element, index) => {
            let className = 'login__input';
            return {...element, className};
        })

        this.#parent.innerHTML = template({items});
    }
}