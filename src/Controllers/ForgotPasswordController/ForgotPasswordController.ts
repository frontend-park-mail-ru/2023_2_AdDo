import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import ForgotPasswordView from "../../Views/ForgotPasswordView/ForgotPasswordView";

/** Class representing an LoginController. */
class ForgotPasswordController extends IController<ForgotPasswordView, UserModel> {

    /**
     * Initializes a new instance of the LoginController class.
     *
     * @param {LoginView} view - The LoginView object.
     * @param {UserModel} model - The UserModel object.
     */    
    public constructor(view: ForgotPasswordView, model: UserModel) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindSubmitEvent(this.handleSubmit.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    /**
     * Handles the click event.
     *
     * @param {Event} e - The click event.
     * @return {void} This function does not return a value.
     */   
    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;
        switch (target.getAttribute('data-section')!) {
            case 'link':
                e.preventDefault();
                router.goToPage(target.getAttribute('data-url')!);
                return;
        }
    }

    /**
     * Handles the form submission event.
     *
     * @param {Event} e - The form submission event.
     * @return {void} This function does not return a value.
     */
    private handleSubmit(e: Event): void {
        e.preventDefault();
        const email = this.view.getDataFromForm();
        this.model.forgotPassword(email, this.view.renderError.bind(this.view));
    }
}

export default ForgotPasswordController;