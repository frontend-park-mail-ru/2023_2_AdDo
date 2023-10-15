import LoginView from './Views/LoginView/LoginView';
import MainView from './Views/MainView/MainView';
import SignUpView from './Views/SignUpView/SignUpView';
import './index.css';
import Ajax from './Modules/Ajax/Ajax';
import EventDispatcher from './Modules/EventDispatcher/EventDispatcher';
import router from './Modules/Router/Router';
import MainController from './Controllers/MainController/MainController';
import FeedModel from './Models/FeedModel/FeedModel';
import UserModel from './Models/UserModel/UserModel';
import paths from './Modules/Router/RouterPaths';


class App {
	public mainview: MainView;
	public loginview: LoginView;
	public signupview: SignUpView;

	public maincontroller: MainController;

	public feedmodel: FeedModel;
	public usermodel: UserModel;

	constructor() {

		const root: HTMLElement = document.querySelector('#root')!;
		this.mainview = new MainView(root);
		this.loginview = new LoginView(root);
		this.feedmodel = new FeedModel(this.mainview.fillContent.bind(this.mainview));
		this.usermodel = new UserModel();
		this.signupview = new SignUpView(root);
		this.maincontroller = new MainController(this.mainview, {FeedModel: this.feedmodel, UserModel: this.usermodel});
		this.initRoutes();
	}

	/**
	 * runs the application
	 */
	public run(url: string) {
		router.start(url);
		this.maincontroller.updateContent();
		this.maincontroller.mountComponent();
		// this.usermodel.authUserByCookie(); мб не тут надо 
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
		this.loginview.show();
	}

	public renderSignUp(): void {
		EventDispatcher.emit('unmount-all');
		this.signupview.show();
	}

	public renderFeedAll(): void {
		EventDispatcher.emit('unmount-all');
		this.mainview.show();
	}

	public renderFeedChart(): void {
		EventDispatcher.emit('unmount-all');
	}

	public renderFeedPlaylists(): void {
		EventDispatcher.emit('unmount-all');
	}

	public renderFeedNew(): void {
		EventDispatcher.emit('unmount-all');
	}

	public renderAlbum(): void {
		EventDispatcher.emit('unmount-all');
	}

	public renderArtist(): void {
		EventDispatcher.emit('unmount-all');
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