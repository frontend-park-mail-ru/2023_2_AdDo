import type { HeaderConfigType } from './HeaderComponentTypes';

/** 
 * 	@constant
    @type {HeaderConfigType}
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
