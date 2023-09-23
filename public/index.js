import {Header} from './components/Header/Header.js';
import {Feed} from './components/Feed/Feed.js';

const rootElement = document.querySelector('#root');
const menuElement = document.createElement('div');
const pageElement = document.createElement('main');
rootElement.appendChild(menuElement);
rootElement.appendChild(pageElement);

const config = {
    header: {
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
    },
    feed: {
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
        }
    },
    content: {
        first: {
            albumHref: '/feed/Oba',
            artistHref: '/feed/Mayot',
            name: 'Оба',
            artist: 'Mayot',
            image: 'both.jpg'
        },
        second: {
            albumHref: '/feed/Fantasy_mixtape_vol.1',
            artistHref: '/feed/Skryptonite',
            name: 'Fantasy mixtape, vol.1',
            artist: 'Скриптонит',
            image: 'skryp.jpg',
        },
        third: {
            albumHref: '/feed/LONG_LIVE_812',
            artistHref: '/feed/ALBLAK_52',
            name: 'LONG LIVE 812',
            artist: 'ALBLAK 52',
            image: 'long live.jpg'
        },
        fourth: {
            albumHref: '/feed/PUSSY_BOY',
            artistHref: '/feed/ЕГОР_КРИД',
            name: 'PUSSY BOY',
            artist: 'ЕГОР КРИД',
            image: 'Pussy_Boy.png'
        },
        fifth: {
            albumHref: '/feed/JAZZ_DO_IT',
            artistHref: '/feed/Toxi$',
            name: 'JAZZ DO IT',
            artist: 'Toxi$',
            image: 'Jazz do it.png'
        },
        sixth: {
            albumHref: '/feed/Sense_Of_Human',
            artistHref: '/feed/Markul',
            name: 'Sense Of Human',
            artist: 'Markul',
            image: 'sense of human.png'
        },
        seventh: {
            albumHref: '/feed/california_rocket_fuel_pt_1',
            artistHref: '/feed/Bumble_Beezy',
            name: 'california rocket fuel: pt. 1',
            artist: 'Bumble Beezy',
            image: 'california.jpg'
        },
        eighth: {
            albumHref: '/feed/PHILARMONIA',
            artistHref: '/feed/PHARAOH',
            name: 'PHILARMONIA',
            artist: 'PHARAOH',
            image: 'PHILARMONIA.png'
        },
    }
};

const header = new Header(menuElement, config.header);
const feed = new Feed(pageElement, config.feed, config.content);
header.render();
feed.render();



