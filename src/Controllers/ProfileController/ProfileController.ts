import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";
import ProfileView from "../../Views/ProfileView/ProfileView";
import paths from "../../Modules/Router/RouterPaths";


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
            case 'signout':
                e.preventDefault();
                this.model.logoutUser();
                router.goToPage(paths.feedAll);
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
        if (avatar) {
            if (avatar.type.startsWith('image/')) {
                const formdata = new FormData();
                formdata.append('Avatar', avatar, avatar.name);
                this.model.uploadAvatar(formdata, this.view.renderError.bind(this.view));
                this.model.updateUser({username, email, birthdate, avatar: avatar.name}, this.view.renderError.bind(this.view));
            } else {
                this.view.renderError('not an image');
            }
        } else {
            this.model.updateUser({username, email, birthdate, avatar: this.model.getCurrentUser()!.avatar}, this.view.renderError.bind(this.view));
        }
    }

    
    public updateProfile(): void {
        this.view.fillContent(this.model.getCurrentUser()!);
    }

    public handleUpload(event: Event): void {
        let target = event.target as HTMLInputElement;
        const selectedFile = target.files![0];
        if (selectedFile && selectedFile.type.startsWith('image/')) {
            let fileName = target.files![0].name;
            document.querySelector('.upload-button__input')!.textContent = fileName;
        } else {
            this.view.renderError('not an image');
        }
       
       
    }

    public bindEvents(): void {
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindSubmitEvent(this.handleSubmit.bind(this));
        this.view.bindUploadEvent(this.handleUpload.bind(this));
    }

}
export default ProfileController;
