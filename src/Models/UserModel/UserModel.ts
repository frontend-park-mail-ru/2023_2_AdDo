import IModel from '../IModel/IModel';
import Ajax from '../../Modules/Ajax/Ajax';
import { Callback, User } from '../../types';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import paths from '../../Modules/Router/RouterPaths';
import router from '../../Modules/Router/Router';


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
            { Email: email, Password: password },
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
            { Email: email, Username: username , Password: password, BirthDate: birthDate },
        )
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    this.getUser();
                    routerCallback(paths.onboardGenres);
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

    public getCSRFToken(): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/get_csrf', {})
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    return;
                }
            })
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

    /**
     * Updates the user information on the server.
     *
     * @param {User} user - The user object containing the updated information.
     * @param {Callback} errorCallback - The callback function to handle any errors.
     * @return {void}
     */
    public updateUser(user: User, errorCallback: Callback) {
        this.setCurrentUser(user);
        Ajax.put(hosts.HOST + hosts.PORT + '/api/v1/update_info', {'Content-Type': 'application/json',},
        {Email: user.email, Username: user.username, BirthDate: user.birthdate})
            .then(({ ok, status, responseBody }) => {
                if (status >= 200 && status < 300) {
                    errorCallback('user-profile-changed');
                    EventDispatcher.emit('user-changed', this.currentUser);
                } else if (status === 400) {
                    errorCallback('bad request');
                }
            })
            .catch((error) => {
                throw error;
            });
    }

    /**
     * Uploads the user's avatar to the server.
     *
     * @param {FormData} FormData - The FormData object containing the user's avatar file.
     * @param {Callback} errorCallback - A callback function to handle errors during the upload process.
     */
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

    

    public forgotPassword(email: string, errorCallback: Callback) {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/auth/forgot_password', {'Content-Type': 'application/json',}, {Email: email})
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    errorCallback('code sent');
                } else if (status === 400) {
                    errorCallback('user does not exist');
                }
            })
            .catch((error) => {
                throw error;
            });
    }

    public resetPassword(password: string, token: string, errorCallback: Callback) {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/auth/reset_password/' + token, {'Content-Type': 'application/json',}, {Password: password})
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    router.goToPage(paths.feedAll);
                } else if (status === 400) {
                    errorCallback('password too short');
                }
            })
            .catch((error) => {
                throw error;
            });
    }
}

export default UserModel;