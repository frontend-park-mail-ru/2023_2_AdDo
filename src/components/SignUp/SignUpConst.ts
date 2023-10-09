import type { SignupConfigType } from './SignUpTypes';

/** 
 * 	@constant
    @type {Object}
*/
export const SignUpConfig: SignupConfigType = {
	UsernameInput: {
		type: 'username',
		text: 'Имя пользователя',
		name: 'username',
	},
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
	PasswordCheckInput: {
		type: 'password',
		text: 'Повторите пароль',
		name: 'passwordCheck',
	},
	DateInput: {
		type: 'date',
		text: 'asd',
		name: 'date',
	},
};