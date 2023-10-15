import FeedModel from "../../Models/FeedModel/FeedModel";
import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import SignUpView from "../../Views/SignUpView/SignUpView";


class SignUpController extends IController<SignUpView, UserModel> {
    public constructor(view: SignUpView, model: UserModel) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindSubmitEvent(this.handleSubmit.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;

    }

    private handleSubmit(e: Event): void {
        
    }
}

export default SignUpController;