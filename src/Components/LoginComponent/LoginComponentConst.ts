import type { LoginComponentConfigType } from './LoginComponentTypes';

/**
 * @type {LoginComponentConfigType}
 * @const
 */
export const LoginComponentConfig: LoginComponentConfigType  = [
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
];

