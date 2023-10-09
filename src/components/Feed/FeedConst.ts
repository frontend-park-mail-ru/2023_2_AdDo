import type { FeedConfigType } from './FeedTypes';

/** 
 * 	@constant
    @type {Object}
*/
export const FeedConfig: FeedConfigType = {
	all: {
		href: '/feed/all',
		name: 'Всё',
	},
	new: {
		href: '/feed/new',
		name: 'Новое',
	},
	chart: {
		href: '/feed/chart',
		name: 'Чарт',
	},
	playlists: {
		href: '/feed/playlists',
		name: 'Подборки',
	},
};
