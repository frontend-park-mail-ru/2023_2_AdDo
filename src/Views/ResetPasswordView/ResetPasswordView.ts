import IView from '../IView/IView';
import template from './ResetPasswordView.hbs';
import { Callback } from '../../types';
import { ResetPasswordComponent } from '../../Components/ResetPasswordComponent/ResetPasswordComponent';

/** Class representing a LoginView. */
class ResetPasswordView extends IView {

    private resetpassword: ResetPasswordComponent; 

    /**
     * Creates a new instance of the constructor.
     *
     * @param {HTMLElement} parent - The parent element.
     */
    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.resetpassword = new ResetPasswordComponent(this.element);
        this.resetpassword.append();
    }

    /**
     * Binds a click event to the element, with the provided listener.
     *
     * @param {Callback} listener - The callback function to be executed when the click event is triggered.
     * @return {void}
     */
    public bindClickEvent(listener: Callback): void {
        this.element.addEventListener('click', listener);
    }

    /**
     * Binds a callback function to the submit event of the login form.
     *
     * @param {Callback} listener - The callback function to be executed when the form is submitted.
     * @return {void}
     */
    public bindSubmitEvent(listener: Callback): void {
        this.resetpassword.querySelector('form')!.addEventListener('submit', listener);
    }
    
    /**
     * Retrieves the email and password values from the login form.
     *
     * @return {{email: string, password: string}} An object containing the email and password values.
     */
    public getDataFromForm(): {password: string, passwordcheck: string} {
        const passwordInput = this.resetpassword.querySelector('[data-section="password"]') as HTMLInputElement;
        const passwordCheckInput = this.resetpassword.querySelector('[data-section="passwordCheck"]') as HTMLInputElement;
        return {password: passwordInput.value!, passwordcheck: passwordCheckInput.value!};
    }
    /**
     * Renders an error message based on the given error code.
     *
     * @param {string} err - The error code indicating the type of error.
     * @return {void}
     */
    public renderError(err: string): void {
        switch (err) {
            case 'passwords do not match':
                this.resetpassword.querySelector('[data-section="password"]').className = 'auth-wrong-input';
                this.resetpassword.querySelector('[data-section="passwordcheck"]').className = 'auth-wrong-input';
                this.resetpassword.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                return;
            case 'password too short':
                this.resetpassword.querySelector('[data-section="lengthPassword"]').className = 'authlist__error__active';
                return;
        }
    }
}

export default ResetPasswordView;