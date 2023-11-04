import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import SignUpView from "../../Views/SignUpView/SignUpView";


/** Class representing an SignUpController. */
class SignUpController extends IController<SignUpView, UserModel> {

    /**
     * Constructs a new instance of the SignUpController class.
     *
     * @param {SignUpView} view - The view object for the sign up functionality.
     * @param {UserModel} model - The model object for the user data.
     */   
    public constructor(view: SignUpView, model: UserModel) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindSubmitEvent(this.handleSubmit.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    /**
     * Handles the click event.
     *
     * @param {Event} e - The click event.
     * @return {void} This function does not return anything.
     */
    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;
        switch (target.getAttribute('data-section')!) {
            case 'link':
                e.preventDefault();
                this.view.renderError('ok');
                router.goToPage(target.getAttribute('data-url')!);
                return;
        }
    }

    /**
     * Submits the form data and signs up a user.
     *
     * @param {Event} e - The event object.
     * @return {void} This function does not return anything.
     */
    private handleSubmit(e: Event): void {
        e.preventDefault();
        const {email, password, passwordcheck, username, birthdate} = this.view.getDataFromForm();
        if (password !== passwordcheck) {
            this.view.renderError('password mismatch');
            return;
        }
        this.model.signUpUser(email, username, password, birthdate, router.goToPage.bind(router), this.view.renderError.bind(this.view));
    }
}

export default SignUpController;