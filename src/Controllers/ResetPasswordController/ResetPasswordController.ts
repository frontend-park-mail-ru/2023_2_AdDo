import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import ResetPasswordView from "../../Views/ResetPasswordView/ResetPasswordView";

/** Class representing an LoginController. */
class ResetPasswordController extends IController<ResetPasswordView, UserModel> {

    /**
     * Initializes a new instance of the LoginController class.
     *
     * @param {LoginView} view - The LoginView object.
     * @param {UserModel} model - The UserModel object.
     */    
    public constructor(view: ResetPasswordView, model: UserModel) {
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
        const {password, passwordcheck} = this.view.getDataFromForm();
        if(password !== passwordcheck) {
            this.view.renderError('passwords do not match');
            return;
        }
        const token = location.href.split('/')[location.href.split('/').length - 1];
        this.model.resetPassword(password, token, this.view.renderError.bind(this.view));
        return;
    }
}

export default ResetPasswordController;