import IModel from '../IModel/IModel';
import Ajax from '../../Modules/Ajax/Ajax';
import { Callback, User } from '../../types';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import paths from '../../Modules/Router/RouterPaths';


/** Class representing an UserModel. */
class UserModel extends IModel {

    private currentUser: User | null;

    /**
     * Constructor for the UserModel.
     */
    public constructor() {
        super();
        this.currentUser = null;
    }

    /**
     * Get the current user.
     * @return {User | null} 
     */
    public getCurrentUser(): User | null {
        return this.currentUser;
    }

    public setCurrentUser(user: User): void {
        this.currentUser = user;
    }

    /**
    * Signs in a user.
    *
    * @param {string} email - The user's email.
    * @param {string} password - The user's password.
    * @param {Callback} callback - The callback function.
    * @return {void}
    */
    public signInUser(email: string, password: string, callback: Callback, errorCallback: Callback): void {
        Ajax.post(
            hosts.HOST + hosts.PORT + '/api/v1/login',
            { 'Content-Type': 'application/json', },
            { email, password },
        )
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    this.getUser();
                    callback(paths.feedAll);
                    errorCallback('ok');
                    return;
                } else if (status === 403) {
                    errorCallback('incorrect password');
                    return;
                } else if (status === 400) {
                    errorCallback('password too short');
                    return;
                }
            })
            .catch((error) => {
                throw error;
            });
    }

    /**
    * Sign up a user.
    *
    * @param {string} email - The user's email.
    * @param {string} username - The user's username.
    * @param {string} password - The user's password.
    * @param {string} birthDate - The user's birth date.
    * @param {Callback} callback - A callback function.
    * @return {void}
    */
    public signUpUser(email: string,
        username: string,
        password: string,
        birthDate: string,
        routerCallback: Callback,
        errorCallback: Callback): void {
        Ajax.post(
            hosts.HOST + hosts.PORT + '/api/v1/sign_up',
            { 'Content-Type': 'application/json', },
            { email, username, password, birthDate },
        )
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    this.getUser();
                    routerCallback(paths.feedAll);
                    errorCallback('ok');
                    return;
                } else if (status === 400) {
                    errorCallback('password too short');
                    return;
                } else if (status === 409) {
                    errorCallback('user already exists');
                    return;
                }
            })
            .catch((error) => {
                throw error;
            });

    }


    /**
     * Logs out the user by making a POST request to the logout endpoint.
     *
     * @return {void} 
     */
    public logoutUser(): void {
        Ajax.post(
            hosts.HOST + hosts.PORT + '/api/v1/logout',
            {
                'Content-Type': 'application/json',
            },
            {},
        )
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    this.currentUser = null;
                    EventDispatcher.emit('user-changed', this.currentUser);
                    return;
                }
            })
            .catch((error) => {
                throw error;
            });
    }

    /**
     * Authenticates the user using a cookie.
     *
     * @return {void} No return value.
     */
    public authUserByCookie(): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/auth', {})
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    this.getUser();
                    return;
                }
            })
            .catch((error) => {
                throw error;
            });
    }

    /**
     * Retrieves the user data from the server.
     *
     * @private
     * @return {void}
     */
    private getUser(): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/me', {})
            .then(({ ok, status, responseBody }) => {
                if (status >= 200 && status < 300) {
                    this.currentUser = {
                        email: responseBody.Email,
                        username: responseBody.Username,
                        avatar: responseBody.Avatar,
                        birthdate: responseBody.BirthDate,
                    }
                    EventDispatcher.emit('user-changed', this.currentUser);
                }
            })
            .catch((error) => {
                throw error;
            });
    }

    public updateUser(user: User, errorCallback: Callback) {
        this.setCurrentUser(user);
        Ajax.put(hosts.HOST + hosts.PORT + '/api/v1/update_info', {'Content-Type': 'application/json',},
        {email: user.email, username: user.username, birthdate: user.birthdate})
            .then(({ ok, status, responseBody }) => {
                if (status >= 200 && status < 300) {
                    errorCallback('ok');
                    EventDispatcher.emit('user-changed', this.currentUser);
                } else if (status === 400) {
                    errorCallback('bad request');
                }
            })
            .catch((error) => {
                throw error;
            });
    }

    public uploadAvatar(FormData: FormData, errorCallback: Callback) {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/upload_avatar', {}, FormData, true)
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                this.currentUser!.avatar = responseBody.AvatarUrl;
                EventDispatcher.emit('user-changed', this.currentUser);
            } else if (status === 400) {
                errorCallback('not an image');
            }
        })
        .catch((error) => {
            throw error;
        });
    }
}

export default UserModel;