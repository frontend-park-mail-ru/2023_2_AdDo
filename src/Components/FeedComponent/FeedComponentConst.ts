import type { FeedComponentConfigType } from './FeedComponentTypes';

/**
 * @type {FeedComponentConfigType}
 * @const
 */
export const FeedComponentConfig: FeedComponentConfigType = [
	{
		key: 'all',
		href: '/feed/all',
		name: 'Всё',
	},
	{
		key: 'new',
		href: '/feed/new',
		name: 'Новое',
	},
	{
		key: 'chart',
		href: '/feed/chart',
		name: 'Чарт',
	},
	{
		key: 'playlists',
		href: '/feed/playlists',
		name: 'Подборки',
	},
];
