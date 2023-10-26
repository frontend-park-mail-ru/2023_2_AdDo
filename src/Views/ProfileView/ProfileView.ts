import IView from '../IView/IView';
import template from './MainView.hbs';
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
    public constructor(parent: HTMLElement, user: User) {
        super(parent, template({}));

        this.header = new HeaderComponent(this.element.querySelector('header')!);
        this.profile = new ProfileComponent(this.element.querySelector('main')!,user);

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

    public bindSubmitEvent(listener: any): void {
        this.profile.querySelector('form')!.addEventListener('submit', listener);
    }

    public getDataFromForm(): {email: string, username: string, birthdate: string, avatar: string} {
        const emailInput = this.profile.querySelector('[data-section="email"]') as HTMLInputElement;
        const birthdateInput = this.profile.querySelector('[data-section="birthdate"]') as HTMLInputElement;
        const usernameInput = this.profile.querySelector('[data-section="username"]') as HTMLInputElement;
        const avatarInput = this.profile.querySelector('[data-section="avatar"]') as HTMLInputElement;
        return {email: emailInput.value!, username: usernameInput.value!, birthdate: birthdateInput.value!, avatar: avatarInput.value!};
    }
}

export default ProfileView;