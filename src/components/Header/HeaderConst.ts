import type { HeaderConfigType } from './HeaderTypes';

/** 
 * 	@constant
    @type {HeaderConfigType}
*/
export const HeaderConfig: HeaderConfigType = {
	main: {
		href: '/feed',
		name: 'Главное',
	},
	podcasts: {
		href: '/podcasts',
		name: 'Подкасты',
	},
	collection: {
		href: '/collection',
		name: 'Коллекция',
	},
};
