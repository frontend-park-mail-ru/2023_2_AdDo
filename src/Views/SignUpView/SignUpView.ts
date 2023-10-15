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


}

export default SignUpView;