import FeedModel from "../../Models/ContentModel/ContentModel";
import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import SignUpView from "../../Views/SignUpView/SignUpView";
import paths from "../../Modules/Router/RouterPaths";


class SignUpController extends IController<SignUpView, UserModel> {
    public constructor(view: SignUpView, model: UserModel) {
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
        const {email, password, passwordcheck, username, birthdate} = this.view.getDataFromForm();
        this.model.signUpUser(email, password, username, birthdate, router.goToPage);
    }
}

export default SignUpController;