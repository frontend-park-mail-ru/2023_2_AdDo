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
        return Object.entries(this.config).map(([key, { type, name}]) => ({
            key,
            type,
            name, 
        }));
    }

    render() {
        const template = Handlebars.templates['Login.hbs'];

        const items = this.items.map((element, index) => {
            let className = 'login__input';
            return {...element, className};
        })

        this.#parent.innerHTML = template({items});
    }
}