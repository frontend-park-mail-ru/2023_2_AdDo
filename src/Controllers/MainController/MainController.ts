import ContentModel from "../../Models/ContentModel/ContentModel";
import UserModel from "../../Models/UserModel/UserModel";
import MainView from "../../Views/MainView/MainView";
import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import { Song, User } from "../../types";
import router from "../../Modules/Router/Router";
import paths from "../../Modules/Router/RouterPaths";
import { isThisTypeNode } from "typescript";

/** Class representing an MainController. */
class MainController extends IController<MainView, {ContentModel: ContentModel, UserModel: UserModel}> {
    private albumId: number = 0;
    private songId: number = 0;
    private Playing: boolean = false;
    private Liked: boolean = false;
    private redirectId: number = 0;
    private isActive: boolean = false;
    private isLooped: boolean = false;
    private isShuffled: boolean = false;
    private nextsongfunction: () => void = () => {};
    private repeatsongfunction: () => void = () => {};

    /**
     * Constructs a new instance of the class.
     *
     * @param {MainView} view - The main view object.
     * @param {{ContentModel: ContentModel, UserModel: UserModel}} model - The content model and user model.
     */   
    public constructor(view: MainView, model: {ContentModel: ContentModel, UserModel: UserModel}) {
        super(view, model);
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.nextsongfunction = this.nextSong.bind(this);
        this.view.bindEndedEvent(this.nextsongfunction);
        EventDispatcher.subscribe('unmount-all', this.unmountComponent.bind(this));
    }

    /**
     * Updates the Feed.
     *
     * @return {void} 
     */
    public updateFeed(): void {
        this.view.renderFeed();
        this.model.ContentModel.requestAlbums(this.view.fillContent.bind(this.view));
    }

    /**
     * Updates the Album.
     *
     * @return {void} 
     */    
    public updateAlbum(): void {
        this.view.renderAlbum();
        this.model.ContentModel.requestAlbum(this.view.fillAlbum.bind(this.view), parseInt(location.href.split('/')[location.href.split('/').length - 1]));
    }
    
    /**
     * Updates the Artist.
     *
     * @return {void} 
     */    
    public updateArtist(): void {
        this.view.renderArtist();
        this.model.ContentModel.requestArtist(this.view.fillArtist.bind(this.view), parseInt(location.href.split('/')[location.href.split('/').length - 1]));
    }

    /**
     * Updates the Chart.
     *
     * @return {void} 
     */
    public updateChart(): void {
        this.model.ContentModel.requestChart(this.view.fillContent.bind(this.view));
    }

    /**
     * Updates the New.
     *
     * @return {void} 
     */
    public updateNew(): void {
        this.model.ContentModel.requestNew(this.view.fillContent.bind(this.view));
    }

    /**
     * Updates the Playlists.
     *
     * @return {void} 
     */
    public updatePlaylists(): void {
        this.model.ContentModel.requestPlaylists(this.view.fillContent.bind(this.view));
    }

    public updateCollection(): void {
        this.model.ContentModel.requestCollection(this.view.fillCollection.bind(this.view));
    }

    public updateOffline(): void {
        this.model.ContentModel.requestOffline(this.view.fillCollection.bind(this.view));
    }



    /**
     * Handles the click event and performs different actions based on the target element.
     *
     * @param {Event} e - The click event object.
     * @return {void}
     */    
    private handleClick(e: Event): void {
        const target: HTMLElement = e.target as HTMLElement;

        switch (target.getAttribute('data-section')!) {
            case 'playButton':
                e.preventDefault();
                this.albumId = parseInt(target.getAttribute('data-url')!);
                this.songId = 0;
                this.model.ContentModel.getSongs(this.view.play.bind(this.view), this.albumId, this.model.UserModel.getCurrentUser());
                this.Playing = true;
                this.isActive = true;
                return;
            case 'miniPlayButton':
                e.preventDefault();
                this.songId = parseInt(target.getAttribute('data-url')!);
                this.model.ContentModel.nowPlaying();
                this.model.ContentModel.isLiked(this.view.play.bind(this.view), this.songId, this.model.UserModel.getCurrentUser());
                this.Playing = true;
                this.isActive = true;
                return;
            case 'miniArtistPlayButton':
                e.preventDefault();
                this.songId = parseInt(target.getAttribute('data-url')!);
                this.model.ContentModel.nowPlaying();
                this.model.ContentModel.isLiked(this.view.play.bind(this.view), this.songId, this.model.UserModel.getCurrentUser());
                this.Playing = true;
                this.isActive = true;
                return;
            case 'link':
                e.preventDefault();
                this.view.makeActive(e.target as HTMLElement);
                this.redirectId = parseInt(target.getAttribute('data-id')!);
                localStorage.setItem('redirectId',  this.redirectId.toString());
                router.goToPage(target.getAttribute('data-url')!);
                return;
            case 'signout':
                e.preventDefault();
                this.model.UserModel.logoutUser();
                router.goToPage(paths.feedAll);
                return;
            case 'prevBtn':
                if (this.isActive) {
                    this.prevSong();
                }
                return;
            case 'playBtn':
                if (this.isActive) {
                    if(this.Playing) {
                        this.Playing = false;
                        this.view.pause();
                    } else {
                        this.Playing = true;
                        this.view.resume();
                    }
                }
                return;
            case 'nextBtn':
                if (this.isActive) {
                    this.nextSong();
                }
                return;
            case 'shuffleBtn':
                if (this.isActive) {
                    this.shuffle();
                }
                return;
            case 'loopBtn':
                if (this.isActive) {
                    this.loop();
                }
                return;
            case 'likeBtn':
                if (this.isActive) {
                    this.model.ContentModel.getSongById(this.songId).isLiked ? this.dislike() : this.like();
                }
                return;
        }
    }

    /**
     * Advances to the next song in the playlist and plays it.
     *
     * @return {void} 
     */
    public nextSong(): void {
        this.songId >= this.model.ContentModel.getSongsLength() - 1 ? this.songId = 0 : this.songId++;
        this.model.ContentModel.isLiked(this.view.play.bind(this.view), this.songId, this.model.UserModel.getCurrentUser());
    }
    
    /**
     * Decrements the songId and plays the previous song.
     *
     * @return {void}
     */
    public prevSong(): void {
        this.songId <= 0 ? this.songId = 0 : this.songId--;
        this.model.ContentModel.isLiked(this.view.play.bind(this.view), this.songId, this.model.UserModel.getCurrentUser());
        return;
    }

    public shuffle(): void {
        if(this.isShuffled) {
            this.isShuffled = false;
            this.view.unshuffle();
            const currentId = this.model.ContentModel.getCurrentSongs()[this.songId].Id;
            this.model.ContentModel.unshuffle();
            this.songId = this.model.ContentModel.getCurrentSongs().findIndex(song => song.Id === currentId);
        } else {
            this.isShuffled = true;
            this.view.shuffle();
            this.model.ContentModel.shuffle();
        }
        return;
    }

    public loop(): void {
        if(this.isLooped) {
            this.isLooped = false;
            this.view.unloop();
            this.view.removeEndedEvent(this.repeatsongfunction);
            this.view.bindEndedEvent(this.nextsongfunction);
        } else {
            this.isLooped = true;
            this.view.removeEndedEvent(this.nextsongfunction);
            this.repeatsongfunction = this.repeatSong.bind(this);
            this.view.bindEndedEvent(this.repeatsongfunction);
            this.view.loop();
        }
        return;
    }

    public like(): void {
        this.model.ContentModel.like(this.songId, this.view.like.bind(this.view));
        return;
    }

    public dislike(): void {
        this.model.ContentModel.dislike(this.songId, this.view.dislike.bind(this.view));
        return;
    }

    public disablePlayer(): void {
        this.isActive = false;
    }

    public bindEvents(): void {
        this.view.bindEvents();
    }

    public repeatSong(): void {
        this.view.play(this.model.ContentModel.getSongById(this.songId), this.model.ContentModel.getSongById(this.songId).isLiked);
    }
}

export default MainController;