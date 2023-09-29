import './modules/ajax.js';
import { Header } from './components/Header/Header.js';
import { Feed } from './components/Feed/Feed.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/SignUp/SignUp.js';
import { FeedConfig } from './components/Feed/FeedConst.js';
import { HeaderConfig } from './components/Header/HeaderConst.js';
import { LoginConfig } from './components/Login/LoginConst.js';
import { SignUpConfig } from './components/SignUp/SignUpConst.js';
import './index.css';

const host = "http://82.146.45.164";
const port = ":8080";

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
    '/signout': {
        name: 'Выйти',
        render: renderSignout,
    },
}

const rootElement = document.querySelector('#root');
const menuElement = document.createElement('div');
const pageElement = document.createElement('main');
rootElement.appendChild(menuElement);
rootElement.appendChild(pageElement);

const header = new Header(menuElement, HeaderConfig);
const feed = new Feed(pageElement, FeedConfig.feed, FeedConfig.content);
const login = new Login(pageElement, LoginConfig);
const signup = new Signup(pageElement, SignUpConfig);
let isAuth = false;

renderFeed();

function renderFeed() {
    // Ajax.get({
    //     url: host + port + '/home',
    //     id: localStorage.getItem('id'),
    // })
    //     .then(({ status, parsedJson }) => {
    //         if (status === 200) {
    //             if (parsedJson.id) {
    //                 isAuth = true;
    //             }
    //             return;
    //         }
    //         alert('Ошибка при регистрации!');
    //     })
    header.render(isAuth);
    feed.render();
}

function renderSignUp() {
    signup.render();
    const signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signupForm.elements.email.value;
        const password = signupForm.elements.password.value;
        const passwordCheck = signupForm.elements.passwordCheck.value;
        if (password == passwordCheck) {
            document.querySelector('[name="passcheck"]').style = 'visibility: hidden';
            signupForm.elements.password.style = 'border-color: #FFFFFF';
            signupForm.elements.passwordCheck.style = 'border-color: #FFFFFF';

            Ajax.post({
                url: host + port + '/sign_up',
                body: { username: email, password },
            })
                .then(({ status, parsedJson }) => {
                    if (status === 200) {
                        console.log(parsedJson);
                        localStorage.setItem('id', parsedJson.id)
                        goToPage(document.getElementsByName('/feed')[0])
                        return;
                    }
                    alert('Ошибка при регистрации!');
                })

        } else {
            document.querySelector('[name="passcheck"]').style = 'visibility: visible';
            signupForm.elements.password.style = 'border-color: #EF5858';
            signupForm.elements.passwordCheck.style = 'border-color: #EF5858';
        }


    });
}

function renderLogin() {
    login.render();
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.elements.email.value;
        const password = loginForm.elements.password.value;

        Ajax.post({
            url: host + port + '/login',
            body: { email, password },
        })
            .then(({ status, parsedJson }) => {
                if (status === 200) {
                    localStorage.setItem('id', parsedJson.id);
                    isAuth = true;
                    goToPage(document.getElementsByName('/feed')[0]);
                    return;
                } else {
                    console.log(parsedJson.err);
                }
                alert('Неверное имя пользователя или пароль!');
            })
    });
}

function renderPodcasts() {

}

function renderCollection() {

}

function renderSignout() {
    isAuth = false;
    localStorage.setItem('id', null);
    renderFeed();
}

function goToPage(Link) {
    menuElement.innerHTML = '';
    pageElement.innerHTML = '';

    for (let href in routeConfig) {
        if (Link.name === href) {
            routeConfig[href].render(isAuth);
        }
    }
}

rootElement.addEventListener('click', (e) => {
    const { target } = e;

    if (target instanceof HTMLAnchorElement || (target instanceof HTMLButtonElement && target.name === '/login')) {
        e.preventDefault();
        goToPage(e.target);
    }

});
