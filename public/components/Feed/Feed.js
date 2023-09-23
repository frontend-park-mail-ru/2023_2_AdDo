
export class Feed {
    #parent
    #configFeed
    #configContent

    constructor(parent, configFeed, configContent) {
        this.#parent = parent;
        this.#configFeed = configFeed;
        this.#configContent = configContent;
    }

    get configFeed() {
        return this.#configFeed;
    }

    get configContent() {
        return this.#configContent;
    }

    get items() {
        return Object.entries(this.configFeed).map(([key, { href, name}]) => ({
            key,
            href,
            name, 
        }));
    }

    get content() {
        return Object.entries(this.configContent).map(([key, { albumHref, artistHref, name, artist, image}]) => ({
            key,
            albumHref,
            artistHref,
            name,
            artist,
            image,
        }));
    }

    render() {
        const template = Handlebars.templates['Feed.hbs'];

        const items = this.items.map((element, index) => {
            let className = 'feed__item';
            return {...element, className};
        })

        const content = this.content.map((element, index) => {
            let className = 'content__item';
            return {...element, className};
        })

        this.#parent.innerHTML = template({items, content});
    }
}