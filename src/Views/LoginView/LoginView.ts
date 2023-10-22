import IView from '../IView/IView';
import template from './LoginView.hbs';
import {LoginComponent} from '../../Components/LoginComponent/LoginComponent';
import Feed from '../../Models/ContentModel/ContentModel';


class LoginView extends IView {

    private login: LoginComponent; 


    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.login = new LoginComponent(this.element);
        this.login.append();
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    public bindSubmitEvent(listener: any): void {
        this.login.querySelector('form')!.addEventListener('submit', listener);
    }

    public getDataFromForm(): {email: string, password: string} {
        const emailInput = this.login.querySelector('[data-section="email"]') as HTMLInputElement;
		const passwordInput = this.login.querySelector('[data-section="password"]') as HTMLInputElement;
        return {email: emailInput.value!, password: passwordInput.value!}
    }
}

export default LoginView;