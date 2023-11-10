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
    /**
     * Updates the collection.
     *
     * @return {void} 
     */
    public updateCollection(): void {
        this.view.renderCollection();
        this.model.ContentModel.requestCollection(this.view.fillCollection.bind(this.view));
    }
    /**
     * Updates the offline content.
     *
     * @return {void} No return value.
     */
    public updateOffline(): void {
        this.view.renderCollection();
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
            case 'miniCollectionPlayButton':
                e.preventDefault();
                this.songId = parseInt(target.getAttribute('data-url')!);
                this.model.ContentModel.nowPlaying();
                this.view.play(this.model.ContentModel.getSongByCollectionId(this.songId), true);
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
            case 'volumeBtn':
                if (this.isActive) {
                    this.view.volume();
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
        this.isShuffled ? this.songId = Math.floor(Math.random() * this.model.ContentModel.getSongsLength()) :
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

    /**
     * Shuffles the elements in the array.
     *
     * @return {void} 
     */
    public shuffle(): void {
        if(this.isShuffled) {
            this.isShuffled = false;
            this.view.unshuffle();
        } else {
            this.isShuffled = true;
            this.view.shuffle();
        }
        return;
    }

    /**
     * Loops the song if it is not already looped, or stops looping if it is already looped.
     *
     * @return {void} 
     */
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

    /**
     * Likes the song.
     *
     * @return {void} 
     */
    public like(): void {
        this.model.ContentModel.like(this.songId, this.view.like.bind(this.view));
        return;
    }

    /**
     * Dislikes the song.
     *
     * @return {void} 
     */
    public dislike(): void {
        this.model.ContentModel.dislike(this.songId, this.view.dislike.bind(this.view));
        return;
    }

    /**
     * Disables the player.
     *
     * This function sets the `isActive` property of the object to `false`,
     * effectively disabling the player.
     *
     * @return {void} 
     */
    public disablePlayer(): void {
        this.isActive = false;
    }

    /**
     * Binds the events for the current instance.
     *
     * @return {void} 
     */
    public bindEvents(): void {
        this.view.bindEvents();
    }
    /**
     * Repeats the currently playing song.
     *
     * @return {void} 
     */
    public repeatSong(): void {
        this.view.play(this.model.ContentModel.getSongById(this.songId), this.model.ContentModel.getSongById(this.songId).isLiked);
    }
}

export default MainController;