import IModel from '../IModel/IModel';
import Ajax from '../../Modules/Ajax/Ajax';
import { User } from '../../types';
import hosts from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import paths from '../../Modules/Router/RouterPaths';

class UserModel extends IModel {
    private currentUser: User | null;

    public constructor() {
        super();
        this.currentUser = null;
    }

    public getCurrentUser(): User | null {
        return this.currentUser;
    }

    public signInUser(email: string, password: string, callback: any): void {
        Ajax.post(
			hosts.HOST + hosts.PORT + '/api/v1/login',
			{ email, password },
            false
	    )
			.then(({ ok, status, responseBody }) => {
				if (status === 200) {
                    this.getUser();
                    callback(paths.feedAll);
					return;
				} 
			})
			.catch((error) => {
				throw error;
			});
    }

    public signUpUser(email: string, username: string, password: string, birthDate: string, callback: any): void {
        Ajax.post(
        hosts.HOST + hosts.PORT + '/api/v1/sign_up',
        { email, username, password, birthDate },
        false,
        )
        .then(({ ok, status, responseBody }) => {
            if (status === 200) {
                this.getUser();
                callback(paths.feedAll);
                return;
            } else if (status === 400) {
                return;
            } else if (status === 409) {
                return;
            }
        })
        .catch((error) => {
            throw error;
        });

    } 

    public logoutUser() {
        Ajax.post(
        hosts.HOST + hosts.PORT + '/api/v1/logout',
        {},
	    )
		.then(({ status }) => {
			if (status === 200) {
                EventDispatcher.emit('user-changed', this.currentUser); 
				return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    public authUserByCookie() {
        Ajax.get( hosts.HOST + hosts.PORT + '/api/v1/auth', true)
		.then(({ status, responseBody }) => {
			if (status === 200) {
                this.getUser();
                return;
			}	
		})
		.catch((error) => {
			throw error;
		});
    }

    private getUser() {
        Ajax.get( hosts.HOST + hosts.PORT + '/api/v1/me', true)
		.then(({ ok, status, responseBody }) => {
			if (status === 200) {
                this.currentUser = {
                    email: responseBody.email,
                    username: responseBody.username,
                    avatar: responseBody.avatar
                }
                EventDispatcher.emit('user-changed', this.currentUser);
			}	
		})
		.catch((error) => {
			throw error;
		});
    }
}

export default UserModel;