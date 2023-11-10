import IView from '../IView/IView';
import template from './LoginView.hbs';
import {LoginComponent} from '../../Components/LoginComponent/LoginComponent';
import { Callback } from '../../types';

/** Class representing a LoginView. */
class LoginView extends IView {

    private login: LoginComponent; 

    /**
     * Creates a new instance of the constructor.
     *
     * @param {HTMLElement} parent - The parent element.
     */
    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.login = new LoginComponent(this.element);
        this.login.append();
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
        this.login.querySelector('form')!.addEventListener('submit', listener);
    }
    
    /**
     * Retrieves the email and password values from the login form.
     *
     * @return {{email: string, password: string}} An object containing the email and password values.
     */
    public getDataFromForm(): {email: string, password: string} {
        const emailInput = this.login.querySelector('[data-section="email"]') as HTMLInputElement;
		const passwordInput = this.login.querySelector('[data-section="password"]') as HTMLInputElement;
        return {email: emailInput.value!, password: passwordInput.value!}
    }

    /**
     * Renders an error message based on the given error code.
     *
     * @param {string} err - The error code indicating the type of error.
     * @return {void}
     */
    public renderError(err: string): void {
        switch (err) {
            case 'incorrect password':
                this.login.querySelector('[data-section="password"]').className = 'auth-wrong-input';
                this.login.querySelector('[data-section="email"]').className = 'auth-wrong-input';
                this.login.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.login.querySelector('[data-section="passcheck"]').textContent = 'Неверный пароль или email!';
                return;
            case 'password too short':
                this.login.querySelector('[data-section="password"]').className = 'auth-wrong-input';
                this.login.querySelector('[data-section="email"]').className = 'auth-wrong-input';
                this.login.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.login.querySelector('[data-section="passcheck"]').textContent = 'Email или пароль(от 6 до 30 символов) неверный!';
                return;
            case 'ok':
                this.login.querySelector('[data-section="password"]').className = 'auth-input';
                this.login.querySelector('[data-section="email"]').className = 'auth-input';
                this.login.querySelector('[data-section="passcheck"]').className = 'authlist__error__disabled';
                return;
        }
    }
}

export default LoginView;