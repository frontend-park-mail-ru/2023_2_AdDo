import IView from '../IView/IView';
import template from './SignUpView.hbs';
import { SignUpComponent } from '../../Components/SignUpComponent/SignUpComponent';

class SignUpView extends IView {

    private signup: SignUpComponent; 

    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.signup = new SignUpComponent(this.element);
        this.signup.append();
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    public bindSubmitEvent(listener: any): void {
        this.signup.querySelector('form')!.addEventListener('submit', listener);
    }

    public getDataFromForm(): {email: string, password: string, passwordcheck: string, username: string, birthdate: string} {
        const emailInput = this.signup.querySelector('[data-section="email"]') as HTMLInputElement;
		const passwordInput = this.signup.querySelector('[data-section="password"]') as HTMLInputElement;
        const birthdateInput = this.signup.querySelector('[data-section="date"]') as HTMLInputElement;
        const passwordcheckInput = this.signup.querySelector('[data-section="passwordCheck"]') as HTMLInputElement;
        const usernameInput = this.signup.querySelector('[data-section="username"]') as HTMLInputElement;
        return {email: emailInput.value!, password: passwordInput.value!, passwordcheck: passwordcheckInput.value!, username: usernameInput.value!, birthdate: birthdateInput.value!};
    }

}

export default SignUpView;