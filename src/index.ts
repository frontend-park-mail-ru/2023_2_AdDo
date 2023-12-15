import LoginView from './Views/LoginView/LoginView';
import MainView from './Views/MainView/MainView';
import SignUpView from './Views/SignUpView/SignUpView';
import ProfileView from './Views/ProfileView/ProfileView';

import MainController from './Controllers/MainController/MainController';
import LoginController from './Controllers/LoginController/LoginController';
import SignUpController from './Controllers/SignUpController/SignUpController';

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

		this.initRoutes();
	}

	/**
	 * Executes the run function.
	 *
	 * @param {string} url - The URL to run the function on.
	 */
	public run(url: string) {
		this.usermodel.authUserByCookie();
		this.usermodel.getCSRFToken();
		if(url === paths.root) {
			url = paths.feedAll;
		}
		router.start(url);
	}

	/**
	 * Initializes the routes for the application.
	 *
	 * @return {void} 
	 */
	public initRoutes() {
		const routes = [
			{ path: paths.root, handler: this.renderFeedAll },
			{ path: paths.login, handler: this.renderLogin },
			{ path: paths.signup, handler: this.renderSignUp },
			{ path: paths.feedAll, handler: this.renderFeedAll },
			{ path: paths.feedChart, handler: this.renderFeedChart },
			{ path: paths.feedPlaylists, handler: this.renderFeedPlaylists },
			{ path: paths.feedNew, handler: this.renderFeedNew },
			{ path: paths.album, handler: this.renderAlbum },
			{ path: paths.artist, handler: this.renderArtist },
			{ path: paths.profile, handler: this.renderProfile },
			{ path: paths.favAlbums, handler: this.renderfavAlbums },
			{ path: paths.favArtists, handler: this.renderfavArtists },
			{ path: paths.favPlaylists, handler: this.renderfavPlaylists },
			{ path: paths.favTracks, handler: this.renderfavTracks },
			{ path: paths.track, handler: this.renderTrack },
			{ path: paths.search, handler: this.renderSearch },
			{ path: paths.playlist, handler: this.renderPlaylist },
			{ path: paths.onboardGenres, handler: this.renderOnboardGenres },
			{ path: paths.onboardArtists, handler: this.renderOnboardArtists },
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
		this.usermodel.getCSRFToken();
		this.logincontroller.mountComponent();
	}

	/**
	 * Renders the sign up component.
	 *
	 * @return {void} 
	 */
	public renderSignUp(): void {
		EventDispatcher.emit('unmount-all');
		this.usermodel.getCSRFToken();
		this.signupcontroller.mountComponent();
	}

	/**
	 * Renders the entire feed.
	 *
	 * @return {void} 
	 */	
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
		this.maincontroller.updateProfile();
		this.maincontroller.mountComponent();
		this.maincontroller.bindProfileEvents();
		EventDispatcher.subscribe('user-changed', this.maincontroller.bindProfileEvents.bind(this.maincontroller));
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

	public renderTrack(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateTrack();
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
	public renderfavPlaylists(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updatefavPlaylists();
		this.maincontroller.mountComponent();
	}

	/**
	 * Render favorite tracks.
	 *
	 * @return {void}
	 */
	public renderfavTracks(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updatefavTracks();
		this.maincontroller.mountComponent();
	}

	/**
	 * Renders the favorite albums.
	 *
	 * @return {void}
	 */
	public renderfavAlbums(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updatefavAlbums();
		this.maincontroller.mountComponent();
	}

	/**
	 * Renders the favorite artists.
	 *
	 * @return {void} 
	 */
	public renderfavArtists(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updatefavArtists();
		this.maincontroller.mountComponent();
	}
	/**
	 * Renders the search by emitting an 'unmount-all' event,
	 * updating the search, and mounting the component.
	 */
	public renderSearch(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateSearch();
		this.maincontroller.mountComponent();
	}
	/**
	 * Renders the playlist.
	 *
	 * @return {void} No return value.
	 */
	public renderPlaylist(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updatePlaylist();
		this.maincontroller.mountComponent();
	}
	/**
	 * Renders the onboard genres by emitting the 'unmount-all' event,
	 * updating the onboard genres in the main controller, and mounting
	 * the component.
	 */
	public renderOnboardGenres(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateOnboardGenres();
		this.maincontroller.mountComponent();
	}
	/**
	 * Renders the onboard artists by emitting the 'unmount-all' event,
	 * updating the onboard artists in the main controller, and mounting
	 * the component.
	 *
	 * @return {void}
	 */
	public renderOnboardArtists(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateOnboardArtists();
		this.maincontroller.mountComponent();
	}
}

const app = new App();
app.run(location.pathname);


