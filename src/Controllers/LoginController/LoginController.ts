import FeedModel from "../../Models/ContentModel/ContentModel";
import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import LoginView from "../../Views/LoginView/LoginView";
import paths from "../../Modules/Router/RouterPaths";


class LoginController extends IController<LoginView, UserModel> {
    public constructor(view: LoginView, model: UserModel) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindSubmitEvent(this.handleSubmit.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;
        switch (target.getAttribute('data-section')!) {
            case 'link':
                e.preventDefault();
                router.goToPage(target.getAttribute('data-url')!);
                return;
        }
    }

    private handleSubmit(e: Event): void {
        e.preventDefault();
        const {email, password} = this.view.getDataFromForm();
        this.model.signInUser(email, password, router.goToPage);
    }
}

export default LoginController;