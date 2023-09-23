import {Header} from './components/Header/Header.js';

const rootElement = document.querySelector('#root');
const menuElement = document.createElement('div');
const pageElement = document.createElement('main');
rootElement.appendChild(menuElement);
rootElement.appendChild(pageElement);

const config = {
    header: {
        logo: {
            href: '/',
            name: 'MusicOn',
            flag: true,
            image: '/Lines.svg'
        },
        main: {
            href: '/main',
            name: 'Главное',
            flag: false,
            image: null
        },
        podcasts: {
            href: '/podcasts',
            name: 'Подкасты',
            flag: false,
            image: null

        },
        collection: {
            href: '/collection',
            name: 'Коллекция',
            flag: false,
            image: null
        },
        loupe: {
            href: '',
            name: '',
            flag: true,
            image: '/Loupe.svg'
        },
    }
};

const header = new Header(menuElement, config.header)
header.render();


function renderFeed() {
    
}


