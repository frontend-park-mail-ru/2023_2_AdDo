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

/** 
 * @constant
    @type {string}
*/
const HOST = 'http://82.146.45.164';

/** 
 * @constant
    @type {string}
*/
const PORT = ':8080';

/** 
* @constant
* @type {Object}
*/
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
};


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


/**
* Renders home page.
*/
function renderFeed() {
	window.Ajax.get({
		url: HOST + PORT + '/api/v1/auth?id=' + localStorage.getItem('id'),
	})
		.then(({ status, parsedJson }) => {
			if (status === 200) {
				if (parsedJson.Id) {
					isAuth = true;
				}
				header.render(isAuth);
				feed.render();
				return;
			} else {
				header.render(isAuth);
				feed.render();
			}
		});

	
}

/**
 * Renders Signup page.
 */
function renderSignUp() {
	signup.render();
	const signupForm = document.querySelector('form');

	signupForm.addEventListener('submit', (e) => {
		e.preventDefault();

		const email = signupForm.elements.email.value;
		const password = signupForm.elements.password.value;
		const passwordCheck = signupForm.elements.passwordCheck.value;
		const birthDate = signupForm.elements.date.value;
		const username = signupForm.elements.username.value;

		if (password == passwordCheck) {
			document.querySelector('[name="passcheck"]').style = 'visibility: hidden';
			signupForm.elements.password.style = 'border-color: #FFFFFF';
			signupForm.elements.passwordCheck.style = 'border-color: #FFFFFF';

			window.Ajax.post({
				url: HOST + PORT + '/api/v1/sign_up',
				body: { email, username, password, birthDate },
			})
				.then(({ status, parsedJson }) => {
					if (status === 200) {
						isAuth = true;
						localStorage.setItem('id', parsedJson.Id);
						goToPage(document.querySelector('[data-section="/feed"]'));
						return;
					} else if (status >= 400) {
						goToPage(document.querySelector('[data-section="/feed"]'));
						return;
					}
					alert('Ошибка при регистрации!');
				});
		} else {
			document.querySelector('[name="passcheck"]').style = 'visibility: visible';
			signupForm.elements.password.style = 'border-color: #EF5858';
			signupForm.elements.passwordCheck.style = 'border-color: #EF5858';
		}
	});
}


/**
 * Renders Login page.
 */
function renderLogin() {
	login.render();

	const loginForm = document.querySelector('form');

	loginForm.addEventListener('submit', (e) => {
		e.preventDefault();

		const email = loginForm.elements.email.value;
		const password = loginForm.elements.password.value;

		window.Ajax.post({
			url: HOST + PORT + '/api/v1/login',
			body: { email, password },
		})
			.then(({ status, parsedJson }) => {
				if (status === 200) {
					localStorage.setItem('id', parsedJson.Id);
					isAuth = true;
					goToPage(document.querySelector('[data-section="/feed"]'));
					return;
				}
				alert('Неверное имя пользователя или пароль!');
			});
	});
}

/**
 * Renders Podcasts page.
 */
function renderPodcasts() {

}

/**
 * Renders Collection page.
 */
function renderCollection() {

}

/**
 * Renders Signout page.
 */
function renderSignout() {
	window.Ajax.post({
		url: HOST + PORT + '/api/v1/logout',
		body: {id: localStorage.getItem('id')}
	})
		.then(({ status, parsedJson }) => {
			if (status === 200) {
				isAuth = false;
				localStorage.setItem('id', null);
				goToPage(document.querySelector('[data-section="/feed"]'));
				return;
			}
			console.log(parsedJson.err);
			alert('Неверное имя пользователя или пароль!');
		});
}

/**
 * Goes to another page
 * @param {HTMLAnchorElement} Link 
 */
function goToPage(Link) {
	menuElement.innerHTML = '';
	pageElement.innerHTML = '';

	for (let href in routeConfig) {
		if (Link.getAttribute('data-section') === href) {
			routeConfig[href].render(isAuth);
		}
	}
}

rootElement.addEventListener('click', (e) => {
	const { target } = e;

	if (target instanceof HTMLAnchorElement || (target instanceof HTMLButtonElement && target.getAttribute('data-section') === '/login')) {
		e.preventDefault();
		goToPage(e.target);
	}
});
