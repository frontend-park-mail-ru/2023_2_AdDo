import IView from '../IView/IView';
import template from './ForgotPasswordView.hbs';
import { Callback } from '../../types';
import { ForgotPasswordComponent } from '../../Components/ForgotPasswordComponent/ForgotPasswordComponent';

/** Class representing a LoginView. */
class ForgotPasswordView extends IView {

    private forgotpassword: ForgotPasswordComponent; 

    /**
     * Creates a new instance of the constructor.
     *
     * @param {HTMLElement} parent - The parent element.
     */
    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.forgotpassword = new ForgotPasswordComponent(this.element);
        this.forgotpassword.append();
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
        this.forgotpassword.querySelector('form')!.addEventListener('submit', listener);
    }
    
    /**
     * Retrieves the email and password values from the login form.
     *
     * @return {{email: string, password: string}} An object containing the email and password values.
     */
    public getDataFromForm(): string {
        const emailInput = this.forgotpassword.querySelector('[data-section="email"]') as HTMLInputElement;
        return emailInput.value!;
    }
    /**
     * Renders an error message based on the given error code.
     *
     * @param {string} err - The error code indicating the type of error.
     * @return {void}
     */
    public renderError(err: string): void {
        switch (err) {
            case 'user does not exist':
                this.forgotpassword.querySelector('[data-section="email"]').className = 'auth-wrong-input';
                this.forgotpassword.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.forgotpassword.querySelector('[data-section="passcheck"]').textContent = 'Такого пользователя не существует!';
                this.forgotpassword.querySelector('[data-section="passcheck"]').style.color = 'red';
                return;
            case 'code sent':
                this.forgotpassword.querySelector('[data-section="email"]').className = 'auth-input';
                this.forgotpassword.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.forgotpassword.querySelector('[data-section="passcheck"]').textContent = 'Код отправлен на почту!';
                this.forgotpassword.querySelector('[data-section="passcheck"]').style.color = 'white';
                return;
        }
    }
}

export default ForgotPasswordView;