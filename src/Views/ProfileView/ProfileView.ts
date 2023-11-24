import IView from '../IView/IView';
import template from './ProfileView.hbs';
import { HeaderComponent } from '../../Components/HeaderComponent/HeaderComponent';
import type { User, Callback } from '../../types';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { ProfileComponent } from '../../Components/ProfileComponent/ProfileComponent';


/** Class representing a MainView. */
class ProfileView extends IView {

    private header: HeaderComponent; 
    private profile: ProfileComponent

    /**
     * Constructor for initializing the class.
     *
     * @param {HTMLElement} parent - The parent element to attach the class to.
     */
    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.header = new HeaderComponent(this.element.querySelector('header')!);
        this.profile = new ProfileComponent(this.element.querySelector('main')!);

        this.header.append();
        this.profile.append();


        EventDispatcher.subscribe('user-changed', (user: User) => {
            // todo
        });
    }

    /**
     * Fills the content of the function with the specified user.
     *
     * @param {User} user - The user to fill the content with.
     * @return {void}
     */  
    public fillContent(user: User): void {
        this.header.User = user;
        this.profile.User = user;
    }

    /**
     * Binds a click event to the element.
     *
     * @param {Callback} listener - The event listener function.
     * @return {void} 
     */
    public bindClickEvent(listener: Callback): void {
        this.element.addEventListener('click', listener);
    }

    /**
     * Binds a submit event listener to the form element within the profile element.
     *
     * @param {Callback} listener - The callback function to be executed when the submit event is triggered.
     * @return {void}
     */
    public bindSubmitEvent(listener: Callback): void {
        this.profile.querySelector('form')!.addEventListener('submit', listener);
    }

    /**
     * Binds an upload event listener to the 'change' event of the file input element in the profile section.
     *
     * @param {Callback} listener - The callback function to be executed when the 'change' event is triggered.
     * @return {void} 
     */
    public bindUploadEvent(listener: Callback): void {
        this.profile.querySelector('[data-section="fileInput"]')?.addEventListener('change', listener);
    }

    public bindEvents(): void {
        this.header.bindEvents();
    }
    /**
     * Retrieves data from a form.
     *
     * @return {{email: string, username: string, birthdate: string}} The data from the form.
     */
    public getDataFromForm(): {email: string, username: string, birthdate: string} {
        const emailInput = this.profile.querySelector('[data-section="email"]') as HTMLInputElement;
        const birthdateInput = this.profile.querySelector('[data-section="birthdate"]') as HTMLInputElement;
        const usernameInput = this.profile.querySelector('[data-section="username"]') as HTMLInputElement;
        return {email: emailInput.value!, username: usernameInput.value!, birthdate: birthdateInput.value!};
    }

    /**
     * 
     * Retrieves the avatar file from the form.
     *
     * @return {File} The avatar file selected in the form.
     */
    public getAvatarFromForm(): File {
        const avatarInput = this.profile.querySelector('[data-section="fileInput"]') as HTMLInputElement;
        return avatarInput.files![0];
    }
    
    /**
     * Renders an error message based on the given error.
     *
     * @param {string} err - The error message.
     * @return {void}
     */
    public renderError(err: string): void {
        switch (err) {
            case 'bad request':
                this.profile.querySelector('[data-section="username"]').className = 'auth-wrong-input';
                this.profile.querySelector('[data-section="email"]').className = 'auth-wrong-input';
                this.profile.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.profile.querySelector('[data-section="passcheck"]').textContent = 'Некорретное имя пользователя или email!';
                return;
            case 'ok':
                this.profile.querySelector('[data-section="username"]').className = 'auth-input';
                this.profile.querySelector('[data-section="email"]').className = 'auth-input';
                this.profile.querySelector('[data-section="passcheck"]').className = 'authlist__error__disabled';
                return;
            case 'not an image':
                this.profile.querySelector('[data-section="username"]').className = 'auth-wrong-input';
                this.profile.querySelector('[data-section="email"]').className = 'auth-wrong-input';
                this.profile.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                this.profile.querySelector('[data-section="passcheck"]').textContent = 'Выбранный файл не является изображением!';
        }
    }
}

export default ProfileView;