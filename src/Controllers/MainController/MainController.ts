import FeedModel from "../../Models/FeedModel/FeedModel";
import MainView from "../../Views/MainView/MainView";
import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import { Song } from "../../types";
import UserModel from "../../Models/UserModel/UserModel";
import router from "../../Modules/Router/Router";

/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 */

class MainController extends IController<MainView, {FeedModel: FeedModel, UserModel: UserModel}> {
    private albumId: number = 0;
    private songId: number = 0;
    private Playing: boolean = false;
    public constructor(view: MainView, model: {FeedModel: FeedModel, UserModel: UserModel}) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    public updateContent(): void {
        this.view.fillContent(this.model.FeedModel.getAlbums());
    }

    /**
     * Функция обработки нажатия на хедер
     * (приватное поле класса)
     * @param  {Event} e
     * @returns {void}
     */
    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;
        if(target.className  === 'playButton') {
            e.preventDefault();
            this.albumId = parseInt(target.getAttribute('data-section')!);
            const songs: Array<Song> = this.model.FeedModel.getSongs(this.albumId);
            this.songId = 0;
            this.Playing = true;
            this.view.play(...songs);
            return;
        }

        if (target instanceof HTMLAnchorElement || (target instanceof HTMLButtonElement) && (target.getAttribute('data-section') === '/feed' || target.getAttribute('data-section') === '/login')) {
            e.preventDefault();
            router.goToPage(target.getAttribute('data-section')!);
            return;
        }

        switch (target.getAttribute('data-section')!) {
            case '/signout':
                e.preventDefault();
                this.model.UserModel.logoutUser();
                return;
            case 'prevBtn':
                this.songId <= 0 ? this.songId = 0 : this.songId--;
                this.view.play(this.model.FeedModel.getSongById(this.songId));
                return;
            case 'playBtn':
                if(this.Playing) {
                    this.Playing = false;
                    this.view.pause();
                } else {
                    this.Playing = true;
                    this.view.resume();
                }
                return;
            case 'nextBtn':
                this.songId >= this.model.FeedModel.getSongsLength() - 1 ? this.songId = 0 : this.songId++;
                this.view.play(this.model.FeedModel.getSongById(this.songId));
                return;
        }
    }
}

export default MainController;