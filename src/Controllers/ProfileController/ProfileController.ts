import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import ProfileView from "../../Views/ProfileView/ProfileView";


/** Class representing an LoginController. */
class ProfileController extends IController<ProfileView, UserModel> {

    /**
     * Initializes a new instance of the LoginController class.
     *
     * @param {LoginView} view - The LoginView object.
     * @param {UserModel} model - The UserModel object.
     */    
    public constructor(view: ProfileView, model: UserModel) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindSubmitEvent(this.handleSubmit.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    /**
     * Handles the click event.
     *
     * @param {Event} e - The click event.
     * @return {void} This function does not return a value.
     */   
    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;
        switch (target.getAttribute('data-section')!) {
            case 'link':
                e.preventDefault();
                router.goToPage(target.getAttribute('data-url')!);
                return;
        }
    }

    /**
     * Handles the form submission event.
     *
     * @param {Event} e - The form submission event.
     * @return {void} This function does not return a value.
     */
    private handleSubmit(e: Event): void {
        e.preventDefault();
        const {username, email, birthdate} = this.view.getDataFromForm();
        const avatar = this.view.getAvatarFromForm();
        this.model.updateUser({username, email, birthdate, avatar: ''});
        this.model.uploadAvatar(avatar);
    }

    
    public updateProfile(): void {
        this.view.fillContent(this.model.getCurrentUser()!);
    }
}
export default ProfileController;
