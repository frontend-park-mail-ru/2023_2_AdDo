import IView from '../IView/IView';
import template from './LoginView.hbs';
import {LoginComponent} from '../../Components/LoginComponent/LoginComponent';
import { s3HOST } from '../../HostConsts';
import Feed from '../../Models/FeedModel/FeedModel';


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
}

export default LoginView;