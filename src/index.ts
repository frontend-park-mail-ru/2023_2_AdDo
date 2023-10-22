import LoginView from './Views/LoginView/LoginView';
import MainView from './Views/MainView/MainView';
import SignUpView from './Views/SignUpView/SignUpView';

import MainController from './Controllers/MainController/MainController';
import LoginController from './Controllers/LoginController/LoginController';
import SignUpController from './Controllers/SignUpController/SignUpController';

import ContentModel from './Models/ContentModel/ContentModel';
import UserModel from './Models/UserModel/UserModel';

import './index.css';
import Ajax from './Modules/Ajax/Ajax';
import EventDispatcher from './Modules/EventDispatcher/EventDispatcher';
import router from './Modules/Router/Router';
import paths from './Modules/Router/RouterPaths';









class App {
	public mainview: MainView;
	public loginview: LoginView;
	public signupview: SignUpView;

	public maincontroller: MainController;
	public logincontroller: LoginController;
	public signupcontroller: SignUpController;

	public contentmodel: ContentModel;
	public usermodel: UserModel;

	constructor() {

		const root: HTMLElement = document.querySelector('#root')!;

		this.contentmodel = new ContentModel();
		this.usermodel = new UserModel();

		this.mainview = new MainView(root);
		this.loginview = new LoginView(root);
		this.signupview = new SignUpView(root);

		this.maincontroller = new MainController(this.mainview, {ContentModel: this.contentmodel, UserModel: this.usermodel});
		this.logincontroller = new LoginController(this.loginview,  this.usermodel);
		this.signupcontroller = new SignUpController(this.signupview, this.usermodel);

		this.initRoutes();
	}

	/**
	 * runs the application
	 */
	public run(url: string) {
		this.usermodel.authUserByCookie(); 
		router.start(url);
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
		EventDispatcher.emit('unmount-all');
		this.logincontroller.mountComponent();
	}

	public renderSignUp(): void {
		EventDispatcher.emit('unmount-all');
		this.signupcontroller.mountComponent();
	}

	public renderFeedAll(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateFeed();
		this.maincontroller.mountComponent();
	}

	public renderFeedChart(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateChart();
		this.maincontroller.mountComponent();
	}

	public renderFeedPlaylists(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updatePlaylists();
		this.maincontroller.mountComponent();
	}

	public renderFeedNew(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateNew();
		this.maincontroller.mountComponent();
	}

	public renderAlbum(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateAlbum();	
		this.maincontroller.mountComponent();
	}

	public renderArtist(): void {
		EventDispatcher.emit('unmount-all');
		this.maincontroller.updateArtist();
		this.maincontroller.mountComponent();
	}

	public renderCollection(): void {
		EventDispatcher.emit('unmount-all');
	}

	public renderPodcasts(): void {
		EventDispatcher.emit('unmount-all');
	}

}

const app = new App();
app.run(paths.feedAll);


