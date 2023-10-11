import { routeConfigType, Song } from './types';
import { Header } from './components/Header/Header';
import { HeaderConfig } from './components/Header/HeaderConst';
import { Feed } from './components/Feed/Feed';
import { FeedConfig } from './components/Feed/FeedConst';
import { Login } from './components/Login/Login';
import { LoginConfig } from './components/Login/LoginConst';
import { Player } from './components/Player/Player';
import { PlayerConfig } from './components/Player/PlayerConfig';
import { Signup } from './components/SignUp/SignUp';
import { SignUpConfig } from './components/SignUp/SignUpConst';
import './index.css';
import Ajax from './modules/Ajax';

/** 
 * @constant
    @type {string}
*/
const HOST: string = 'http://musicon.space';

const s3HOST: string = 'http://82.146.45.164:9000';
/** 
 * @constant
    @type {string}
*/
const PORT: string = ':8080';

/** 
* @constant
* @type {Object}
*/
const routeConfig: routeConfigType = {
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
const footerElement = document.createElement('footer');
rootElement?.appendChild(menuElement);
rootElement?.appendChild(pageElement);
rootElement?.appendChild(footerElement);

const header = new Header(menuElement, HeaderConfig);
let feed = new Feed(pageElement, FeedConfig);
const login = new Login(pageElement, LoginConfig);
const signup = new Signup(pageElement, SignUpConfig);
const player = new Player(footerElement, PlayerConfig);

let isAuth: boolean = false;
let songId: number;
let Playing: boolean = false;

renderFeed();

let audio = document.querySelector('audio')!;
/**
* Renders home page.
*/
function renderFeed(): void {
	Ajax.get( HOST + PORT + '/api/v1/auth', false)
		.then(({ status }) => {
			if (status === 200) {
				isAuth = true;
			}	
		})
		.catch((error) => {
			throw error;
		});
	Ajax.get(HOST + PORT + '/api/v1/music', true)
		.then(({ ok, status, responseBody }) => {
			if (status === 200) {
				feed.Content = responseBody;
				header.render(isAuth);
				feed.render();	
				player.render();
				return;
			}
		})
		.catch((error) => {
			throw error;
		});

}

/**
 * Renders Signup page.
 */
function renderSignUp(): void {
	signup.render();
	const signupForm = document.querySelector('form');

	signupForm?.addEventListener('submit', (e) => {
		e.preventDefault();
        const email = document.querySelector('[data-section="email"]');
        const password = document.querySelector('[data-section="password"]');
        const passwordCheck = document.querySelector('[data-section="passwordCheck"]');
        const birthDate = document.querySelector('[data-section="date"]');
        const username = document.querySelector('[data-section="username"]');

		if (password == passwordCheck) {
			document.querySelector('[data-section="passcheck"]')!.className = 'passCheckDisabled';
			document.querySelector('[data-section="lengthPassword"]')!.className = 'passCheckDisabled';
			password!.className = 'authInput';                                                          // TODO: вынести в отдельные функцию
			passwordCheck!.className = 'authInput';
			username!.className = 'authInput';

			Ajax.post(
				HOST + PORT + '/api/v1/sign_up',
				{ email: email!.textContent, username: username!.textContent, password: password!.textContent, birthDate: birthDate!.textContent },
                true,
			)
				.then(({ ok, status, responseBody }) => {
					if (status === 200) {
						isAuth = true;
						localStorage.setItem('id', responseBody.Id);
						goToPage(document.querySelector('[data-section="/feed"]')!);
						return;
					} else if (status === 400) {
						document.querySelector('[data-section="passcheck"]')!.className = 'passCheckActive';
						document.querySelector('[data-section="lengthPassword"]')!.className = 'passCheckActive';
						document!.querySelector('[data-section="passcheck"]')!.textContent = 'Имя пользователя (от 2 до 30 символов)';
						username!.className = 'authWrongInput';
                        password!.className = 'authWrongInput';
						passwordCheck!.className = 'authWrongInput';
						return;
					} else if (status === 409) {
                        document.querySelector('[data-section="passcheck"]')!.textContent = 'Пользователь с такой почтой уже существует';
                        document.querySelector('[data-section="passcheck"]')!.className = 'passCheckActive';
					}
					alert('Ошибка при регистрации!');
				})
				.catch((error) => {
					throw error;
				});
		} else {
			document.querySelector('[data-section="passcheck"]')!.className = 'passCheckActive';
			document.querySelector('[data-section="passcheck"]')!.textContent = 'Пароли не совпадают';
			password!.className = 'authWrongInput';
			passwordCheck!.className = 'authWrongInput';
		}
	});
}


/**
 * Renders Login page.
 */
function renderLogin(): void {
	login.render();

	const loginForm = document.querySelector('form');

	loginForm?.addEventListener('submit', (e) => {
		e.preventDefault();

		const email = document.querySelector('[data-section="email"]');
		const password = document.querySelector('[data-section="password"]');

		Ajax.post(
			HOST + PORT + '/api/v1/login',
			{ email: email!.textContent, password: password!.textContent },
            true
	    )
			.then(({ ok, status, responseBody }) => {
				if (status === 200) {
					localStorage.setItem('id', responseBody.Id);
					isAuth = true;
					goToPage(document.querySelector('[data-section="/feed"]')!);
					return;
				}
                document.querySelector('[data-section="passcheck"]')!.className = 'passCheckActive';
			})
			.catch((error) => {
				throw error;
			});
	});
}

/**
 * Renders Podcasts page.
 */
function renderPodcasts(): void {

}

/**
 * Renders Collection page.
 */
function renderCollection(): void {

}

/**
 * Renders Signout page.
 */
function renderSignout(): void {
	Ajax.post(
		HOST + PORT + '/api/v1/logout',
		{Id: parseInt(localStorage.getItem('id')!)} 
	)
		.then(({ status }) => {
			if (status === 200) {
				isAuth = false;
				localStorage.removeItem('id');
				menuElement.innerHTML = '';
				header.render(isAuth);
				return;
			}
		})
		.catch((error) => {
			throw error;
		});
}

/**
 * Goes to another page
 * @param {HTMLAnchorElement} Link 
 */
function goToPage(Link: HTMLAnchorElement | HTMLButtonElement): void {
	menuElement.innerHTML = '';
	pageElement.innerHTML = '';

	for (let href in routeConfig) {
		if (Link.getAttribute('data-section') === href) {
			routeConfig[href as keyof routeConfigType].render(isAuth);
		}
	}
}

rootElement?.addEventListener('click', (e) => {
	const target: HTMLElement = e.target as HTMLElement;

	if(target.className  === 'playButton') {
		e.preventDefault();
		songId = parseInt(target.getAttribute('data-section')!);
		const song = feed.Content.find((song) => song.Id === songId)!
		footerElement.innerHTML = '';
		player.render(song, true);
		playSong(song);
		return;
	}

	if (target.getAttribute('data-section') === '/signout') {
		e.preventDefault();
		renderSignout();
		return;
	}

	if (target instanceof HTMLAnchorElement || (target instanceof HTMLButtonElement && target.getAttribute('data-section') === '/login')) {
		e.preventDefault();
		goToPage(target);
		return;
	}
});

footerElement?.addEventListener('click', (e) => {
	const target: HTMLElement = e.target as HTMLElement;
	switch (target.getAttribute('data-section')!) {
		case 'prevBtn':
			e.preventDefault();
			songId < 0 ? songId = 0 : songId--;
			let song: Song = feed.Content.find((song) => song.Id === songId)!
			footerElement.innerHTML = '';
			Playing = true;
			player.render(song, Playing);
			playSong(song);
			return;
		case 'playBtn':
			e.preventDefault();
			document.querySelector('audio')!.paused ? document.querySelector('audio')!.play() : pauseSong();
			player.render(feed.Content.find((song) => song.Id === songId)!, Playing);
			return;
		case 'nextBtn':
			e.preventDefault();
			songId++;
			song = feed.Content.find((song) => song.Id === songId % feed.Content.length)!
			footerElement.innerHTML = '';
			Playing = true;
			player.render(song, Playing);
			playSong(song);
			return;
	}
});

function playSong(song: Song): void {
	audio = document.querySelector('audio')!
	audio.src = s3HOST + song.Content;
	Playing = true;
	audio.play();
}

function pauseSong(): void {
	audio = document.querySelector('audio')!
	Playing = false;
	audio.pause();
}

function updateProgress(e: Event): void {
	const {duration, currentTime} = e.target as HTMLAudioElement;

	const progressPercent = (currentTime / duration) * 100;
	const progress: HTMLElement = document.querySelector('.progress')!;
	progress.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress);



