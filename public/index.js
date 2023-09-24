import {Header} from './components/Header/Header.js';
import {Feed} from './components/Feed/Feed.js';
import {Login} from './components/Login/Login.js';
import {Signup} from './components/SignUp/SignUp.js';
import { FeedConfig } from './components/Feed/FeedConst.js';
import { HeaderConfig } from './components/Header/HeaderConst.js';
import { LoginConfig } from './components/Login/LoginConst.js';
import { SignUpConfig } from './components/SignUp/SignUpConst.js';

const rootElement = document.querySelector('#root');
const menuElement = document.createElement('div');
const pageElement = document.createElement('main');
rootElement.appendChild(menuElement);
rootElement.appendChild(pageElement);

const routeConfig = {
    '/feed': {
        name: 'Главное',
        render: renderFeed,
    },
    '/podcasts': {
        name: 'Подкасты',
        render: renderPodcasts,
    },
    '/collection': {
        name: 'Коллекция',
        render: renderCollection,
    },
    '/login': {
        name: 'Логин',
        render: renderLogin,
    },
    '/signup': {
        name: 'Регистрация',
        render: renderSignUp,
    },
}


const header = new Header(menuElement, HeaderConfig);
const feed = new Feed(pageElement, FeedConfig.feed, FeedConfig.content);
const login = new Login(pageElement, LoginConfig);
const signup = new Signup(pageElement, SignUpConfig);


renderFeed();


function renderFeed() {
    header.render();
    feed.render();
}

function renderSignUp() {
    signup.render();
}


function renderLogin() {
    login.render();
}

function renderPodcasts() {
}

function renderCollection() {
}

function goToPage(Link) {
    menuElement.innerHTML = '';
    pageElement.innerHTML = '';

    for(let href in routeConfig) {
        if (Link.name === href)
        {
            makeActive(Link);
            routeConfig[href].render();
        }
    }
}

function makeActive(Link) {

}

rootElement.addEventListener('click', (e) => {
    const { target } = e;

    if (target instanceof HTMLAnchorElement || (target instanceof HTMLButtonElement && target.name === '/login')) {
        e.preventDefault();
       goToPage(e.target);
    }

});




