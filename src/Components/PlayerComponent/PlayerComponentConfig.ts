import type { PlayerComponentConfigType } from './PlayerComponentTypes';

/**
 * @type {PlayerComponentConfigType}
 * @const
 */
export const PlayerComponentConfig: PlayerComponentConfigType = [
    {
        key: 'nextBtn',
        href: '/static/img/SwitchForward.svg',
        name: 'Следующий',
    },
    {
        key: 'shuffleBtn',
        href: '/static/img/Random.svg',
        name: 'Перемешать',
    },
    {
        key: 'loopBtn',
        href: '/static/img/Repeat.svg',
        name: 'Зациклить',
    },
];
