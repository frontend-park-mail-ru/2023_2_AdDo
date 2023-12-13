import ContentModel from "../../Models/ContentModel/ContentModel";
import UserModel from "../../Models/UserModel/UserModel";
import MainView from "../../Views/MainView/MainView";
import IController from "../IController/IController";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import { Callback, Song, User } from "../../types";
import router from "../../Modules/Router/Router";
import paths from "../../Modules/Router/RouterPaths";
import { debounce } from "../../Modules/lib/Debounce";
import hosts from "../../HostConsts";


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
    private searchDebounced: (term: string, callback: Callback) => void = () => {};
    private addPlaylistDebounced: (callback: Callback) => void = () => {};
    private playSongDebounced: (callback: Callback, id: number, user: User | null) => void = () => {};
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
        EventDispatcher.subscribe('logout', this.logout.bind(this));
        EventDispatcher.subscribe('search', this.search.bind(this));
        this.searchDebounced = debounce(this.model.ContentModel.requestSearch.bind(this.model.ContentModel), 300);
        this.playSongDebounced = debounce(this.model.ContentModel.isLiked.bind(this.model.ContentModel), 150);
        this.addPlaylistDebounced = debounce(this.model.ContentModel.createPlaylist.bind(this.model.ContentModel), 300);
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
        this.model.ContentModel.requestAlbum(this.view.fillAlbum.bind(this.view), location.href.split('/')[location.href.split('/').length - 2] + '/' + location.href.split('/')[location.href.split('/').length - 1]);
    }

    public updateTrack(): void {
        this.view.renderAlbum();
        this.model.ContentModel.requestAlbum(this.view.fillTrack.bind(this.view), location.href.split('/')[location.href.split('/').length - 2] + '/' + location.href.split('/')[location.href.split('/').length - 1], parseInt(location.href.split('/')[location.href.split('/').length - 1]));
        this.isActive = true;
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
    public updatefavArtists(): void {
        this.view.renderFavArtists();
        this.model.ContentModel.requestfavArtists(this.view.fillFavArtists.bind(this.view));
    }

    public updatefavTracks(): void {
        this.view.renderFavTracks();
        this.model.ContentModel.requestfavTracks(this.view.fillFavTracks.bind(this.view));
    }

    public updatefavAlbums(): void {
        this.view.renderFavAlbums();
        this.model.ContentModel.requestfavAlbums(this.view.fillFavAlbums.bind(this.view));
    }

    public updatefavPlaylists(): void {
        this.view.renderFavPlaylists();
        this.model.ContentModel.requestfavPlaylists(this.view.fillFavPlaylists.bind(this.view));
    }

    public updateSearch(): void {
        this.view.renderSearch();
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        this.model.ContentModel.requestSearch(urlParams.get('query')!, this.view.fillSearch.bind(this.view));
    }

    public updateOnboardGenres(): void {
        this.view.renderGenresOnboard();
        this.model.ContentModel.requestOnboardGenres(this.view.fillOnboardGenres.bind(this.view));
    }

    public updateOnboardArtists(): void {
        this.view.renderArtistsOnboard();
        this.model.ContentModel.requestOnboardArtists(this.view.fillOnboardArtists.bind(this.view));
    }

    public updatePlaylist(): void {
        this.view.renderPlaylist();
        this.model.ContentModel.requestPlaylist(this.view.fillPlaylist.bind(this.view), parseInt(location.href.split('/')[location.href.split('/').length - 1]));
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
            case 'playlistPlayButton':
                e.preventDefault();
                this.albumId = parseInt(target.getAttribute('data-url')!);
                this.songId = 0;
                this.model.ContentModel.getPlaylistSongs(this.view.play.bind(this.view), this.albumId, this.model.UserModel.getCurrentUser());
                this.Playing = true;
                this.isActive = true;
                return;
            case 'miniPlayButton':
                e.preventDefault();
                this.songId = parseInt(target.getAttribute('data-url')!);
                this.model.ContentModel.nowPlaying();
                this.playSongDebounced(this.view.play.bind(this.view), this.songId, this.model.UserModel.getCurrentUser());
                this.Playing = true;
                this.isActive = true;
                return;
            case 'miniCollectionPlayButton':
                e.preventDefault();
                this.songId = parseInt(target.getAttribute('data-url')!);
                this.model.ContentModel.nowPlaying();
                this.view.play(this.model.ContentModel.getSongById(this.songId), this.model.ContentModel.getSongById(this.songId).isLiked);
                this.Playing = true;
                this.isActive = true;
                return;
            case 'myWavePlayButton':
                e.preventDefault();
                this.songId = 0;
                this.model.ContentModel.openSocket(this.view.play.bind(this.view), this.songId, this.model.UserModel.getCurrentUser());
                if(this.model.ContentModel.isSocketConnected){
                    this.model.ContentModel.requestSocketTracks();
                }
                this.Playing = true;
                this.isActive = true;
                return;
            case 'link':
                e.preventDefault();
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
                    && target.getAttribute('data-url')!.split('/')[target.getAttribute('data-url')!.split('/').length - 2] === 'album'
                    && target instanceof HTMLImageElement) {
                    return;
                }
                this.view.makeActive(e.target as HTMLElement);
                this.redirectId = parseInt(target.getAttribute('data-id')!);
                localStorage.setItem('redirectId',  this.redirectId.toString());
                router.goToPage(target.getAttribute('data-url')!);
                return;
            case 'innerlink':
                e.preventDefault();
                router.goToPage(target.getAttribute('data-url')!);
                return;
            case 'searchlink':
                e.preventDefault();
                router.goToPage(target.getAttribute('data-url')!);
                return;
            case 'signout':
                e.preventDefault();
                EventDispatcher.emit('logout-confirmation');
                return;
            case 'moreBtn':
                e.preventDefault();
                EventDispatcher.emit('show-more');
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
            case 'mobileLikeBtn':
                if (this.isActive) {
                    this.model.ContentModel.getSongById(this.songId).isLiked ? this.dislike() : this.like();
                }
                return;
            case 'trackLike':
                e.preventDefault();
                this.model.ContentModel.getSongByIdFromSongs(parseInt(target.getAttribute('data-id')!)).isLiked ? this.trackDislike(parseInt(target.getAttribute('data-id')!)) : this.trackLike(parseInt(target.getAttribute('data-id')!));
                return;
            case 'albumlike':
                e.preventDefault();
                this.model.ContentModel.getAlbum().isLiked ? this.albumDislike() : this.albumLike();
                return;
            case 'artistlike':
                e.preventDefault();
                this.model.ContentModel.getArtist().isLiked ? this.artistDislike() : this.artistLike();
                return;
            case 'playlistlike':
                e.preventDefault();
                this.model.ContentModel.getAlbum().isLiked ? this.playlistDislike() : this.playlistLike();
                return;
            case 'createPlaylist':
                e.preventDefault();
                this.addPlaylistDebounced(router.goToPage.bind(router));
                return;
            case 'deletePlaylist':
                e.preventDefault();
                this.model.ContentModel.deletePlaylist(parseInt(target.getAttribute('data-id')!));
                router.goToPage(paths.favPlaylists);
                return;
            case 'updatePlaylist':
                e.preventDefault();
                const {name, id} = this.view.getDataFromPlaylistForm();
                const avatar = this.view.getAvatarFromPlaylistForm();
                if (avatar) {
                    if (avatar.type.startsWith('image/') && !avatar.type.startsWith('image/gif')) {
                        const formdata = new FormData();
                        formdata.append('Preview', avatar, avatar.name);
                        this.model.ContentModel.updatePlaylistAvatar(id, formdata);
                        const img: HTMLImageElement = document.querySelector('.info__photo')!
                        img.src = URL.createObjectURL(avatar);
                    } else {
                        this.view.renderError('not an image');
                    }
                }
                this.model.ContentModel.updatePlaylistData(name, id, router.goToPage.bind(router), this.view.renderError.bind(this.view));
                return;
            case 'volumeBtn':
                if (this.isActive) {
                    this.view.volume();
                }
                return;
            case 'trackOptions':
                e.preventDefault();
                EventDispatcher.emit('show-options', target.getAttribute('data-id')!);
                return;
            case 'playerTrackOptions':
                if (this.isActive) {
                    e.preventDefault();
                    EventDispatcher.emit('player-show-options', target.getAttribute('data-id')!);
                }
                return;
            case 'mobilePlayerTrackOptions':
                e.preventDefault();
                EventDispatcher.emit('mobile-player-show-options', target.getAttribute('data-id')!);
                return;
            case 'showAvaliblePlaylists':
                e.preventDefault();
                this.model.ContentModel.requestUserPlaylists(target.getAttribute('data-id')!, 'show-playlists');
                return;
            case 'playerShowAvaliblePlaylists':
                e.preventDefault();
                this.model.ContentModel.requestUserPlaylists(target.getAttribute('data-id')!, 'player-show-playlists');
                return;
            case 'mobilePlayerShowAvaliblePlaylists':
                e.preventDefault();
                this.model.ContentModel.requestUserPlaylists(target.getAttribute('data-id')!, 'mobile-player-show-playlists');
                return;
            case 'addTrackToPlaylist':
                e.preventDefault();
                this.model.ContentModel.addTrackToPlaylist(target.getAttribute('data-id')!, target.getAttribute('data-playlist-id')!, 'add-track-to-playlist');
                return;
            case 'playerAddTrackToPlaylist':
                e.preventDefault();
                this.model.ContentModel.addTrackToPlaylist(target.getAttribute('data-id')!, target.getAttribute('data-playlist-id')!, 'player-add-track-to-playlist');
                return;
            case 'mobilePlayerAddTrackToPlaylist':
                e.preventDefault();
                this.model.ContentModel.addTrackToPlaylist(target.getAttribute('data-id')!, target.getAttribute('data-playlist-id')!, 'mobile-player-add-track-to-playlist');
                return;
            case 'deleteTrackFromPlaylist':
                e.preventDefault();
                this.model.ContentModel.deleteTrackFromPlaylist(target.getAttribute('data-id')!, target.getAttribute('data-playlist-id')!, router.goToPage.bind(router));
                return;
            case 'onboardGenres':
                e.preventDefault();
                const genres = this.view.getActiveGenres();
                if(genres.length > 2) {
                    this.model.ContentModel.sendGenres(genres);
                    router.goToPage(paths.onboardArtists);
                }
                return;
            case 'onboardArtists':
                e.preventDefault();
                const artists = this.view.getActiveArtists();
                if(artists.length > 2) {
                    this.model.ContentModel.sendArtists(artists);
                    router.goToPage(paths.feedAll);
                } 
                return;
            case 'trackShare':
                this.copyToClipboard(hosts.HOST + '/track/' + target.getAttribute('data-id')!);
                EventDispatcher.emit('copied-to-clipboard',  {id: target.getAttribute('data-id')!, type: 'data-track-share'});
                return;
            case 'albumShare':
                this.copyToClipboard(hosts.HOST + '/album/' + target.getAttribute('data-id')!);
                EventDispatcher.emit('copied-to-clipboard',  {id: target.getAttribute('data-id')!, type: 'data-album-share'});
                return;
            case 'artistShare':
                this.copyToClipboard(hosts.HOST + '/artist/' + target.getAttribute('data-id')!);
                EventDispatcher.emit('copied-to-clipboard', {id: target.getAttribute('data-id')!, type: 'data-artist-share'});
                return;
            case 'playerTrackShare':
                if (this.isActive) {
                    this.copyToClipboard(hosts.HOST + '/track/' + target.getAttribute('data-id')!);
                    EventDispatcher.emit('copied-to-clipboard', {id: target.getAttribute('data-id')!, type: 'data-player-track-share'});
                }
                return;
            case 'mobilePlayerTrackShare':
                this.copyToClipboard(hosts.HOST + '/track/' + target.getAttribute('data-id')!);
                EventDispatcher.emit('copied-to-clipboard', {id: target.getAttribute('data-id')!, type: 'data-mobile-player-track-share'});
                return;
        }
    }

    public logout(): void {
        this.model.UserModel.logoutUser();
        router.goToPage(paths.feedAll);
    }

    public search(value: string): void {
        this.searchDebounced(value, this.view.searchResults.bind(this.view));
    }

    public copyToClipboard(text: string): void {
        navigator.clipboard.writeText(text);
    }

    /**
     * Advances to the next song in the playlist and plays it.
     *
     * @return {void} 
     */
    public nextSong(): void {
        this.view.listen(this.model.ContentModel.listenCount.bind(this.model.ContentModel));
        if(this.model.ContentModel.isSocketConnected) {
            if(this.songId < this.model.ContentModel.getSongsLength() - 1) {
                this.songId++;
            } else {
                this.model.ContentModel.requestSocketTracks();
            }
        } else {
            this.isShuffled ? this.songId = Math.floor(Math.random() * this.model.ContentModel.getSongsLength()) :
            this.songId >= this.model.ContentModel.getSongsLength() - 1 ? this.songId = 0 : this.songId++;
            this.model.ContentModel.isLiked(this.view.play.bind(this.view), this.songId, this.model.UserModel.getCurrentUser());
        }
        
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

    public trackLike(songId: number): void {
        this.model.ContentModel.like(songId, this.view.trackLike.bind(this.view));
        return;
    }

    public artistLike(): void {
        this.model.ContentModel.artistLike(this.view.artistLike.bind(this.view));
        return;
    }

    public albumLike(): void {
        this.model.ContentModel.albumLike(this.view.albumLike.bind(this.view));
        return;
    }

    public playlistLike(): void {
        this.model.ContentModel.playlistLike(this.view.playlistLike.bind(this.view));
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

    public trackDislike(songId: number): void {
        this.model.ContentModel.dislike(songId, this.view.trackLike.bind(this.view));
        return;
    }

    public albumDislike(): void {
        this.model.ContentModel.albumDislike(this.view.albumDislike.bind(this.view));
        return;
    }

    public artistDislike(): void {
        this.model.ContentModel.artistDislike(this.view.artistDislike.bind(this.view));
        return;
    }

    public playlistDislike(): void {
        this.model.ContentModel.playlistDislike(this.view.playlistDislike.bind(this.view));
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

    public bindSearchEvents(): void {
        this.view.bindSearchEvents();
    }
    /**
     * Repeats the currently playing song.
     *
     * @return {void} 
     */
    public repeatSong(): void {
        this.view.play(this.model.ContentModel.getSongById(this.songId), this.model.ContentModel.getSongById(this.songId).isLiked);
    }

    /**
     * Handles the form submission event.
     *
     * @param {Event} e - The form submission event.
     * @return {void} This function does not return a value.
     */
    private handleSubmit(e: Event): void {
        e.preventDefault();
        const {username, email, birthdate} = this.view.getDataFromForm();
        const avatar = this.view.getAvatarFromForm();
        if (avatar) {
            if (avatar.type.startsWith('image/') && !avatar.type.startsWith('image/gif')) {
                const formdata = new FormData();
                formdata.append('Avatar', avatar, avatar.name);
                this.model.UserModel.uploadAvatar(formdata, this.view.renderError.bind(this.view));
                this.model.UserModel.updateUser({username, email, birthdate, avatar: avatar.name}, this.view.renderError.bind(this.view));
            } else {
                this.view.renderError('not an image');
            }
        } else {
            this.model.UserModel.updateUser({username, email, birthdate, avatar: this.model.UserModel.getCurrentUser()!.avatar}, this.view.renderError.bind(this.view));
        }
    }

    /**
     * Update the user profile.
     *
     * @return {void}
     */ 
    public updateProfile(): void {
        this.view.renderProfile();
        this.view.fillProfile(this.model.UserModel.getCurrentUser()!);
    }
    
    /**
     * Handles the upload event.
     *
     * @param {Event} event - The upload event.
     * @return {void} This function does not return anything.
     */
    public handleUpload(event: Event): void {
        let target = event.target as HTMLInputElement;
        const selectedFile = target.files![0];
        if (selectedFile && selectedFile.type.startsWith('image/') && !selectedFile.type.startsWith('image/gif')) {
            const img: HTMLImageElement = document.querySelector('.info__photo')!
            img.src = URL.createObjectURL(selectedFile);
        } else {
            this.view.renderError('not an image');
        }
    }

    public bindProfileEvents(): void {
        this.view.bindClickEvent(this.handleClick.bind(this));
        this.view.bindSubmitEvent(this.handleSubmit.bind(this));
        this.view.bindUploadEvent(this.handleUpload.bind(this));
    }

}
export default MainController;