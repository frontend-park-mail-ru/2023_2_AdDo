import type IView from '../../Views/IView/IView';
import type IModel from '../../Models/IModel/IModel';

/**
 * Base class for all controllers
 * @class
 * @virtual
 */
abstract class IController<templateView extends IView, templateModel extends IModel> {

    protected view: templateView;
    protected model: templateModel;
    protected isMounted: boolean;
    
    /**
     * Create a new instance of the class.
     *
     * @param {templateView} view - The view for the template.
     * @param {templateModel} model - The model for the template.
     */
    protected constructor(view: templateView, model: templateModel) {
        this.view = view;
        this.model = model;
        this.isMounted = false;
    }

    /**
     * Mounts the component if it is not already mounted.
     *
     * @return {void} This function does not return a value.
     */
    public mountComponent(): void {
        if (!this.isMounted) {
            this.view.show();
            this.isMounted = true;
        }
    }

    /**
     * Unmounts the component.
     *
     * @return {void} 
     */
    public unmountComponent(): void {
        if (this.isMounted) {
            this.view.hide();
            this.isMounted = false;
        }
    }
}

export default IController;