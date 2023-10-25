import type { HeaderConfigType } from './HeaderComponentTypes';

/**
 * @type {HeaderConfigType}
 * @const
 */
export const HeaderConfig: HeaderConfigType = [
	{
		key: 'main',
		href: '/feed/all',
		name: 'Главное',
	},
	{
		key: 'podcasts',
		href: '/podcasts',
		name: 'Подкасты',
	},
	{
		key: 'collection',
		href: '/collection',
		name: 'Коллекция',
	},
];
