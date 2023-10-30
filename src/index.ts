import LoginView from './Views/LoginView/LoginView';
import MainView from './Views/MainView/MainView';
import SignUpView from './Views/SignUpView/SignUpView';
import ProfileView from './Views/ProfileView/ProfileView';

import MainController from './Controllers/MainController/MainController';
import LoginController from './Controllers/LoginController/LoginController';
import SignUpController from './Controllers/SignUpController/SignUpController';
import ProfileController from './Controllers/ProfileController/ProfileController';

import ContentModel from './Models/ContentModel/ContentModel';
import UserModel from './Models/UserModel/UserModel';


import EventDispatcher from './Modules/EventDispatcher/EventDispatcher';
import router from './Modules/Router/Router';
import paths from './Modules/Router/RouterPaths';
import './index.css';




/** Class representing an App. */
class App {
	public mainview: MainView;
	public loginview: LoginView;
	public signupview: SignUpView;
	public profileview: ProfileView;

	public maincontroller: MainController;
	public logincontroller: LoginController;
	public signupcontroller: SignUpController;
	public profilecontroller: ProfileController;

	public contentmodel: ContentModel;
	public usermodel: UserModel;

	/**
	 * Initializes the class by setting up the necessary components and controllers.
	 *
	 * @param {type} paramName - description of parameter
	 * @return {type} description of return value
	 */
	constructor() {

		const root: HTMLElement = document.querySelector('#root')!;

		this.contentmodel = new ContentModel();
		this.usermodel = new UserModel();

		this.mainview = new MainView(root);
		this.loginview = new LoginView(root);
		this.signupview = new SignUpView(root);
		this.profileview = new ProfileView(root);

		this.maincontroller = new MainController(this.mainview, { ContentModel: this.contentmodel, UserModel: this.usermodel });
		this.logincontroller = new LoginController(this.loginview, this.usermodel);
		this.signupcontroller = new SignUpController(this.signupview, this.usermodel);
		this.profilecontroller = new ProfileController(this.profileview, this.usermodel);

		this.initRoutes();
	}

	/**
	 * Executes the run function.
	 *
	 * @param {string} url - The URL to run the function on.
	 */
	public run(url: string) {
		this.usermodel.authUserByCookie();
		router.start(url);
	}

	/**
	 * Initializes the routes for the application.
	 *
	 * @return {void} 
	 */
	public initRoutes() {

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
			{ path: paths.profile, handler: this.renderPodcasts },
		];

		routes.forEach(({ path, handler }) => {
			router.addRule(path, handler.bind(this));
		});
	}

	/**
	 * Renders the login component.
	 *
	 * @return {void} 
	 */
	public renderLogin(): void {
		EventDispatcher.emit('unmount-all');
		this.logincontroller.mountComponent();
	}

	/**
	 * Renders the sign up component.
	 *
	 * @return {void} 
	 */
	public renderSignUp(): void {
		EventDispatcher.emit('unmount-all');
		this.signupcontroller.mountComponent();
	}

	public renderFeedAll(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateFeed();
		this.maincontroller.mountComponent();
	}

	/**
	 * Renders the feed for all users.
	 *
	 * @return {void}
	 */
	public renderFeedChart(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateChart();
		this.maincontroller.mountComponent();
	}

	/**
	 * Renders the feed playlists.
	 *
	 * @return {void} 
	 */
	public renderFeedPlaylists(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updatePlaylists();
		this.maincontroller.mountComponent();
	}

	/**
	 * Render the new feed.
	 *
	 * @return {void}
	 */
	public renderFeedNew(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateNew();
		this.maincontroller.mountComponent();
	}

	/**
	 * Render the new feed.
	 *
	 * @return {void}
	 */
	public renderProfile(): void {
		EventDispatcher.emit('unmount-all');
		this.profilecontroller.updateProfile();
		this.profilecontroller.mountComponent();
	}

	/**
	 * Renders the album by emitting an 'unmount-all' event and updating the album in the main controller.
	 *
	 * @return {void} 
	 */
	public renderAlbum(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateAlbum();
		this.maincontroller.mountComponent();
	}

	/**
	 * Renders the artist by emitting an 'unmount-all' event,
	 * updating the artist in the main controller, and mounting
	 * the component.
	 *
	 * @return {void} This function does not return a value.
	 */
	public renderArtist(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateArtist();
		this.maincontroller.mountComponent();
	}

	/**
	 * Renders the entire collection.
	 *
	 * @return {void} 
	 */
	public renderCollection(): void {
		EventDispatcher.emit('unmount-all');
	}

	/**
	 * Renders the podcasts.
	 *
	 * @return {void} 
	 */
	public renderPodcasts(): void {
		EventDispatcher.emit('unmount-all');
	}

}

const app = new App();
app.run(paths.feedAll);


