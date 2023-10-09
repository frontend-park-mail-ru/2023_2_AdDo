import type { LoginConfigType } from './LoginTypes';

/**
 *  @constant
*  @type {LoginConfigType}
*/
export const LoginConfig: LoginConfigType  = {
	EmailInput: {
		type: 'email',
		text: 'Email',
		name: 'email',
	},
	PasswordInput: {
		type: 'password',
		text: 'Пароль',
		name: 'password',
	},
};

