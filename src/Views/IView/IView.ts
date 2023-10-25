/**
 * Base class for all views
 * @class
 */
class IView {

    protected parent: HTMLElement;
    protected element: HTMLElement;

    /**
     * Constructs a new instance of the class.
     *
     * @param {HTMLElement} parent - The parent element.
     * @param {string} template - The template string.
     */
    public constructor(parent: HTMLElement, template: string) {
        this.parent = parent;

        const div = document.createElement('div')!;

        div.innerHTML = template;
        if (!div.firstElementChild) {
            throw Error('Невозможно найти корневой элемент в шаблоне!');
        }

        this.element = <HTMLElement>div.firstElementChild;
    }

    /**
     * Executes the show operation.
     *
     * @return {void}
     */
    public show(): void {
        this.parent.appendChild(this.element);
    }

    /**
     * Hides the element by removing it from its parent.
     *
     * @return {void} 
     */
    public hide(): void {
        this.parent.removeChild(this.element);
    }
}

export default IView;