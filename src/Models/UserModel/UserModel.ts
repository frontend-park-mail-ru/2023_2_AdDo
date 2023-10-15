import IModel from '../IModel/IModel';
import Ajax from '../../Modules/Ajax/Ajax';
import { User } from '../../types';
import {HOST, PORT} from '../../HostConsts';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';

class UserModel extends IModel {
    private currentUser: User | null;

    public constructor() {
        super();
        this.currentUser = null;
    }

    // private parseUser(json: any): IUser {
    //     return {
    //         email:             json.email,
    //         avatar:            json.avatar_url,
    //     };
    // }

    public getCurrentUser(): User | null {
        return this.currentUser;
    }

    public signInUser(email: string, password: string) {
        
        Ajax.post(
			HOST + PORT + '/api/v1/login',
			{ email, password },
            true
	    )
			.then(({ ok, status, responseBody }) => {
				if (status === 200) {
					return;
				} 
			})
			.catch((error) => {
				throw error;
			});

        // EventDispatcher.emit('user-changed', this.currentUser);  тут должно стригириться событие аутентификации которые либо отрисует ошибку либо зарегает пользователя с редиректом
    }

    public  signUpUser(email: string, username: string, password: string, birthDate: string) {
        Ajax.post(
            HOST + PORT + '/api/v1/sign_up',
            { email, username, password, birthDate },
            true,
        )
            .then(({ ok, status, responseBody }) => {
                if (status === 200) {
                    return;
                } else if (status === 400) {
                    return;
                } else if (status === 409) {
                    return;
                }
                alert('Ошибка при регистрации!');
            })
            .catch((error) => {
                throw error;
            });
    } 

    public logoutUser() {
        Ajax.post(
		HOST + PORT + '/api/v1/logout',
        {},
	)
		.then(({ status }) => {
			if (status === 200) {
				return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    public authUserByCookie() {
        Ajax.get( HOST + PORT + '/api/v1/auth', false)
		.then(({ status }) => {
			if (status === 200) {
			}	
		})
		.catch((error) => {
			throw error;
		});
    }
}

export default UserModel;