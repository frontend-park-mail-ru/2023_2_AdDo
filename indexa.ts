import LoginView from './Views/LoginView/LoginView';
import MainView from './Views/MainView/MainView';
import SignUpView from './Views/SignUpView/SignUpView';
import './index.css';
import Ajax from './modules/Ajax';
import router from './Router/Router';
import MainController from './Controllers/MainController/MainController';
import FeedModel from './Models/FeedModel/FeedModel';
import UserModel from './Models/UserModel/UserModel';
import paths from './Router/RouterPaths';


class App {
	public mainview: MainView;
	public loginview: LoginView;
	public signupview: SignUpView;

	public maincontroller: MainController;

	public feedmodel: FeedModel;
	public usermodel: UserModel;

	constructor() {
		const root: HTMLElement = document.querySelector('#root')!;
		this.feedmodel = new FeedModel();
		this.usermodel = new UserModel();
		this.mainview = new MainView(root);
		this.loginview = new LoginView(root);
		this.signupview = new SignUpView(root);
		this.maincontroller = new MainController(this.mainview, {FeedModel: this.feedmodel, UserModel: this.usermodel});
	}

	/**
	 * runs the application
	 */
	public run(url: string) {
		router.start(url);
		this.maincontroller.mountComponent();
		this.usermodel.authUserByCookie();
	}

	public initRoutes() {
		// router.setUnknownPageHandler(this.handleRedirectToNotFound.bind(this));  разберись что это

        const routes = [
            { path: paths.login, handler: this.renderLogin },
            { path: paths.signup, handler: this.renderSignUp },
            { path: paths.feedAll, handler: this.renderFeedAll },
            { path: paths.feedChart, handler: this.renderFeedChart },
            { path: paths.feedPlaylists, handler: this.renderFeedPlaylists },
            { path: paths.feedNew, handler: this.renderFeedNew },
            { path: paths.album, handler: this.renderAlbum },
            { path: paths.artist, handler: this.renderArtist },
            { path: paths.collection, handler: this.renderCollection },
            { path: paths.podcasts, handler: this.renderPodcasts },
        ];

        routes.forEach(({ path, handler }) => {
            router.addRule(path, handler.bind(this));
        });
	}
 
	public renderLogin(): void {
		
	}

	public renderSignUp(): void {
		
	}

	public renderFeedAll(): void {
		
	}

	public renderFeedChart(): void {
		
	}

	public renderFeedPlaylists(): void {
		
	}

	public renderFeedNew(): void {
		
	}

	public renderAlbum(): void {
		
	}

	public renderArtist(): void {
		
	}

	public renderCollection(): void {
		
	}

	public renderPodcasts(): void {
		
	}

}



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
				
				return;
			}
		})
		.catch((error) => {
			throw error;
		});
	player.render();

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
 * Renders Player.
 */
function renderPlayer(song: Song, Playing: boolean): void {
	player.render(song, Playing);
	const audio: HTMLAudioElement = document.querySelector('audio')!;
	audio.addEventListener('timeupdate', updateProgress);
	footerElement.querySelector('.progressBar')?.addEventListener('click', setProgress);
	audio.addEventListener('ended', nextSong);
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
		const audio: HTMLAudioElement = document.querySelector('audio')!;
		songId = parseInt(target.getAttribute('data-section')!);
		const song = feed.Content.find((song) => song.Id === songId)!
		footerElement.querySelector('.contentContainer')!.innerHTML = '';
		Playing = true;
		renderPlayer(song, Playing);
		playSong(audio, song);
		return;
	}

	if (target.getAttribute('data-section') === '/signout') {
		e.preventDefault();
		renderSignout();
		return;
	}

	if (target instanceof HTMLAnchorElement || (target instanceof HTMLButtonElement) && (target.getAttribute('data-section') === '/feed' || target.getAttribute('data-section') === '/login')) {
		e.preventDefault();
		goToPage(target);
		return;
	}
});

footerElement?.addEventListener('click', (e) => {
	const target: HTMLElement = e.target as HTMLElement;
	switch (target.getAttribute('data-section')!) {
		case 'prevBtn':
			prevSong();
			return;
		case 'playBtn':
			let img: HTMLImageElement = document.querySelector('[data-section="playBtn"]') as HTMLImageElement;
			if(Playing) {
				Playing = false;
				img.src = './static/img/Play.svg';
				pauseSong(footerElement.querySelector('audio')!);
			} else {
				img.src = './static/img/Pause.svg';
				Playing = true;
				resumeSong(footerElement.querySelector('audio')!);
			}
			return;
		case 'nextBtn':
			nextSong();
			return;
	}
});

function playSong(audio: HTMLAudioElement, song: Song): void {
	audio.src = s3HOST + song.Content;
	audio.play();
}

function resumeSong(audio: HTMLAudioElement): void {
	audio.play();
}
function pauseSong(audio: HTMLAudioElement): void {
	audio.pause();
}

function updateProgress(e: Event): void {
	const {duration, currentTime} = e.target as HTMLAudioElement;
	const progressPercent = (currentTime / duration) * 100;
	console.log(currentTime);
	const progress: HTMLElement = document.querySelector('.progress')!;
	progress.style.width = `${progressPercent}%`;
}

function setProgress(e: Event): void {
	const width: number = footerElement.querySelector('.progressBar')!.clientWidth;
	const target = e as MouseEvent;
	const x: number = target.offsetX;
	const audio = document.querySelector('audio')!;
	const duration = audio.duration;
	audio.currentTime = (x / width) * duration;
}

function nextSong(audio: HTMLAudioElement): void {
	songId >= feed.Content.length ? songId = 1 : songId++;
	let song: Song = feed.Content.find((song) => song.Id === songId)!
	footerElement.querySelector('.contentContainer')!.innerHTML = '';
	Playing = true;
	renderPlayer(song, Playing);
	playSong(audio, song);
}

function prevSong(audio: HTMLAudioElement): void {
	songId <= 1 ? songId = 1 : songId--;
	let song: Song = feed.Content.find((song) => song.Id === songId)!;
	footerElement.querySelector('.contentContainer')!.innerHTML = '';
	Playing = true;
	renderPlayer(song, Playing);
	playSong(audio, song);
}


function nxtSong() {

}


