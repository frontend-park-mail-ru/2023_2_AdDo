import FeedModel from "../../Models/ContentModel/ContentModel";
import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import LoginView from "../../Views/LoginView/LoginView";


class LoginController extends IController<LoginView, UserModel> {
    public constructor(view: LoginView, model: UserModel) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindSubmitEvent(this.handleSubmit.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;
        
    }

    private handleSubmit(e: Event): void {
        const {email, password} = this.view.getDataFromForm();
        this.model.signInUser(email, password);
    }
}

export default LoginController;