class IComponent {
    /**
     * Родительский элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    protected parent: HTMLElement;
    /**
     * Корневой элемент для данного вида
     * @member
     * @protected
     * @type {HTMLElement}
     */
    protected element: HTMLElement;

    public constructor(parent: HTMLElement, template: string) {
        this.parent = parent;

        const div = document.createElement('div');

        div.innerHTML = template;
        if (!div.firstElementChild) {
            throw Error('Невозможно найти корневой элемент в шаблоне!');
        }

        this.element = <HTMLElement>div.firstElementChild;
    }

    public querySelector(element: string): HTMLElement {
        return <HTMLElement>this.parent.querySelector(element);
    }

    public show(): void {
        this.parent.appendChild(this.element);
    }

    public prepend(): void {
        this.parent.prepend(this.element);
    }

    public append(): void {
        this.parent.append(this.element);
    }

    public hide(): void {
        this.parent.removeChild(this.element);
    }
}

export default IComponent;