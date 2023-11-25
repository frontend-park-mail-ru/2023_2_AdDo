/**
 * Base class for all components
 * @class
 */
class IComponent {

    protected isMounted: boolean = false; 
    protected parent: HTMLElement;
    protected element: HTMLElement;

    /**
     * Initializes a new instance of the constructor.
     *
     * @param {HTMLElement} parent - The parent element.
     * @param {string} template - The template string.
     */
    public constructor(parent: HTMLElement, template: string) {
        this.parent = parent;

        const div = document.createElement('div');

        div.innerHTML = template;
        if (!div.firstElementChild) {
            throw Error('Невозможно найти корневой элемент в шаблоне!');
        }

        this.element = <HTMLElement>div.firstElementChild;
    }

    /**
     * Retrieves the first element that matches the specified CSS selector within the parent element.
     *
     * @param {string} element - The CSS selector to search for.
     * @return {HTMLElement} The first element that matches the specified CSS selector.
     */
    public querySelector(element: string): HTMLElement {
        return <HTMLElement>this.parent.querySelector(element);
    }

    /**
     * Append the element to the parent and set the isMounted flag to true.
     *
     * @returns {void} 
     */
    public append(): void {
        this.parent.append?.(this.element);
        this.isMounted = true;
    }

    /**
     * Hides the element by removing it from its parent if it is currently mounted.
     *
     * @return {void} 
     */
    public hide(): void {
        this.isMounted = false;
    }
}

export default IComponent;