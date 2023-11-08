import type { SignupConfigType } from './SignUpComponentTypes';

/**
 * @type {SignupConfigType}
 * @const
 */
export const SignUpConfig: SignupConfigType = [
	{
		key: 'UsernameInput',
		type: 'username',
		text: 'Имя пользователя',
		name: 'username',
	},
	{
		key: 'EmailInput',
		type: 'email',
		text: 'Email',
		name: 'email',
	},
	{
		key: 'PasswordInput',
		type: 'password',
		text: 'Пароль',
		name: 'password',
	},
	{
		key: 'PasswordCheckInput',
		type: 'password',
		text: 'Повторите пароль',
		name: 'passwordCheck',
	},
	{
		key: 'DateInput',
		type: 'date',
		text: '',
		name: 'date',
	},
]