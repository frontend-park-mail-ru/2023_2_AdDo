//import Handlebars from "handlebars";

export class Header {
    #parent
    #config

    constructor(parent, config) {
        this.#parent = parent;
        this.#config = config;
    }

    get config() {
        return this.#config;
    }

    // Адаптер для удобства
    get items() {
        return Object.entries(this.config).map(([key, { href, name, flag, image }]) => ({
            key,
            href,
            name, 
            flag,
            image
        }));
    }

    render() {
         // Чтобы это работало, нужно импортировать handlebars.runtime.js
        const template = Handlebars.templates['Header.hbs'];

        const items = this.items.map((element, index) => {
            let className = 'menu__item';
            return {...element, className};
        })

        this.#parent.innerHTML = template({items});
    }

    renderDOM() {
        this.items.map(({key, href, name}, index) => {
            const menuElement = document.createElement('a');
            menuElement.href = href;
            menuElement.textContent = name;
            menuElement.dataset.section = key;
            menuElement.classList.add('menu__item');

            this.state.menuElements[key] = menuElement;

            return menuElement;
        }).forEach(element => {
            this.#parent.appendChild(element);
        })
    }
}