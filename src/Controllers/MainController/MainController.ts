import ContentModel from "../../Models/ContentModel/ContentModel";
import UserModel from "../../Models/UserModel/UserModel";
import MainView from "../../Views/MainView/MainView";
import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import { Song, User } from "../../types";
import router from "../../Modules/Router/Router";

/**
 * Котроллер для хэдера
 * @category Header
 * @extends {IController}
 * @param  {HeaderView} view Объект вида компонента хэдер
 */

class MainController extends IController<MainView, {ContentModel: ContentModel, UserModel: UserModel}> {
    private albumId: number = 0;
    private songId: number = 0;
    private Playing: boolean = false;
    private redirectId: number = 0;
    public constructor(view: MainView, model: {ContentModel: ContentModel, UserModel: UserModel}) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindEndedEvent(this.nextSong.bind(this));
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
        EventDispatcher.subscribe('user-changed', (user: User) => {
            if (user) {
                this.view.fillHeader(this.model.UserModel.getCurrentUser()!);
            }
        })
    }

    public updateFeed(): void {
        this.view.renderFeed();
        this.model.ContentModel.requestAlbums(this.view.fillContent.bind(this.view));
    }
    
    public updateAlbum(): void {
        this.view.renderAlbum();
        this.model.ContentModel.requestAlbum(this.view.fillAlbum.bind(this.view), this.redirectId);
    }
    
    public updateArtist(): void {
        this.view.renderArtist();
        this.model.ContentModel.requestArtist(this.view.fillArtist.bind(this.view), this.redirectId);
    }

    public updateChart(): void {
        this.model.ContentModel.requestChart(this.view.fillContent.bind(this.view));
    }

    public updateNew(): void {
        this.model.ContentModel.requestNew(this.view.fillContent.bind(this.view));
    }

    public updatePlaylists(): void {
        this.model.ContentModel.requestPlaylists(this.view.fillContent.bind(this.view));
    }


    /**
     * Функция обработки нажатия на хедер
     * (приватное поле класса)
     * @param  {Event} e
     * @returns {void}
     */
    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;

        console.log(target.getAttribute('data-section')!);
        switch (target.getAttribute('data-section')!) {
            case 'playButton':
                e.preventDefault();
                this.albumId = parseInt(target.getAttribute('data-url')!);
                this.model.ContentModel.getSongs(this.view.play,this.albumId);
                this.Playing = true;
                return;
            case 'miniplayButton':
                e.preventDefault();
                this.songId = parseInt(target.getAttribute('data-url')!);
                this.view.play(this.model.ContentModel.getSongById(this.songId));
                this.Playing = true;
                return;
            case 'link':
                e.preventDefault();
                this.redirectId = parseInt(target.getAttribute('data-id')!);
                router.goToPage(target.getAttribute('data-url')!);
                return;
            case 'signout':
                e.preventDefault();
                this.model.UserModel.logoutUser();
                return;
            case 'prevBtn':
                this.prevSong();
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
                this.nextSong();
                return;
        }
    }

    public nextSong(): void {
        this.songId >= this.model.ContentModel.getSongsLength() - 1 ? this.songId = 0 : this.songId++;
        this.view.play(this.model.ContentModel.getSongById(this.songId));
    }

    public prevSong(): void {
        this.songId <= 0 ? this.songId = 0 : this.songId--;
        this.view.play(this.model.ContentModel.getSongById(this.songId));
    }
}

export default MainController;