import IView from '../IView/IView';
import template from './SignUpView.hbs';
import { SignUpComponent } from '../../Components/SignUpComponent/SignUpComponent';

/** Class representing a SignUpView. */
class SignUpView extends IView {

    private signup: SignUpComponent;

    /**
     * Creates a new instance of the constructor.
     *
     * @param {HTMLElement} parent - The parent element.
     */
    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.signup = new SignUpComponent(this.element);
        this.signup.append();
    }

    /**
     * Binds a click event to the element.
     *
     * @param {any} listener - The event listener function to be bound.
     * @return {void} This function does not return anything.
     */
    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    /**
     * Binds a submit event listener to the form element in the signup container.
     *
     * @param {any} listener - The event listener function to be executed when the form is submitted.
     * @return {void} This function does not return a value.
     */
    public bindSubmitEvent(listener: any): void {
        this.signup.querySelector('form')!.addEventListener('submit', listener);
    }

    /**
     * Retrieves data from the form.
     *
     * @return {{email: string, password: string, passwordcheck: string, username: string, birthdate: string}} The data from the form.
     */
    public getDataFromForm(): {email: string, password: string, passwordcheck: string, username: string, birthdate: string} {
        const emailInput = this.signup.querySelector('[data-section="email"]') as HTMLInputElement;
		const passwordInput = this.signup.querySelector('[data-section="password"]') as HTMLInputElement;
        const birthdateInput = this.signup.querySelector('[data-section="date"]') as HTMLInputElement;
        const passwordcheckInput = this.signup.querySelector('[data-section="passwordCheck"]') as HTMLInputElement;
        const usernameInput = this.signup.querySelector('[data-section="username"]') as HTMLInputElement;
        return {email: emailInput.value!, password: passwordInput.value!, passwordcheck: passwordcheckInput.value!, username: usernameInput.value!, birthdate: birthdateInput.value!};
    }


    public renderError(err: string): void {
        switch (err) {
            case 'password mismatch':
                this.signup.querySelector('[data-section="lengthPassword"]').className = 'authlist__error__disabled';
                this.signup.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.signup.querySelector('[data-section="passcheck"]').textContent = 'Пароли не совпадают!';
                return;
            case 'user already exists':
                this.signup.querySelector('[data-section="lengthPassword"]').className = 'authlist__error__disabled';
                this.signup.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.signup.querySelector('[data-section="passcheck"]').textContent = 'Пользователь с таким именем уже существует!';
                return;
            case 'password too short':
                this.signup.querySelector('[data-section="lengthPassword"]').className = 'authlist__error__active';
                this.signup.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.signup.querySelector('[data-section="passcheck"]').textContent = 'Имя пользователя (от a до z)';
                return;
        }
    }
}

export default SignUpView;