/**
 * Базовый класс для отображения компонента приложения
 * @class
 * @param {HTMLElement} parent - родительский элемент для отображения
 */
class IView {
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

        const div = document.createElement('div')!;

        div.innerHTML = template;
        if (!div.firstElementChild) {
            throw Error('Невозможно найти корневой элемент в шаблоне!');
        }

        this.element = <HTMLElement>div.firstElementChild;
    }

    /**
     * Функция для отрисовки вида
     * @method
     * @returns {void}
     */
    public show(): void {
        this.parent.appendChild(this.element);
    }

    /**
     * Функция для скрытия вида
     * @method
     * @returns {void}
     */
    public hide(): void {
        this.parent.removeChild(this.element);
    }
}

export default IView;