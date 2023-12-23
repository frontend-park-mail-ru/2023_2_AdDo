import IView from '../IView/IView';
import template from './MainView.hbs';
import { HeaderComponent } from '../../Components/HeaderComponent/HeaderComponent';
import { PlayerComponent } from '../../Components/PlayerComponent/PlayerComponent';
import { FeedComponent } from '../../Components/FeedComponent/FeedComponent';
import type { Album, Song, User, Artist, Callback, Playlist, OnboardArtist, OnboardGenre } from '../../types';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { AlbumComponent } from '../../Components/AlbumComponent/AlbumComponent';
import { ArtistComponent } from '../../Components/ArtistComponent/ArtistComponent';
import { favArtistsComponent } from '../../Components/FavArtistsComponent/FavArtistsComponent';
import { favTracksComponent } from '../../Components/FavTracksComponent/FavTracksComponent';
import { favAlbumsComponent } from '../../Components/FavAlbumsComponent/FavAlbumsComponent';
import { favPlaylistsComponent } from '../../Components/FavPlaylistsComponent/FavPlaylistsComponent';
import IComponent from '../../Components/IComponent/IComponent';
import { SearchComponent } from '../../Components/SearchComponent/SearchComponent';
import { ProfileComponent } from '../../Components/ProfileComponent/ProfileComponent';
import { PlaylistComponent } from '../../Components/PlaylistComponent/PlaylistComponent';
import { ArtistsOnboardComponent } from '../../Components/ArtistsOnboardComponent/ArtistsOnboardComponent';
import { GenresOnboardComponent } from '../../Components/GenresOnboardComponent/GenresOnboardComponent';



/** Class representing a MainView. */
class MainView extends IView {

    public components: Map<string, IComponent> = new Map();
    public isMobile: boolean = false;
    public totalListningTime: number = 0;
	public currentListningTime: number = 0;

    /**
     * Constructor for initializing the class.
     *
     * @param {HTMLElement} parent - The parent element to attach the class to.
     */
    public constructor(parent: HTMLElement) {
        super(parent, template({}));
        this.initComponents();
        this.components.get('header')!.append();
        this.components.get('footer')!.append();
        
        EventDispatcher.subscribe('user-changed', (user: User | null = null) => {
            const header = this.components.get('header') as HeaderComponent;
            header.User = user;
        });

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
    }

    private initComponents(): void {
        this.components.set('header', new HeaderComponent(this.element.querySelector('header')!));
        this.components.set('feed', new FeedComponent(this.element.querySelector('main')!));
        this.components.set('album', new AlbumComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: [], isLiked: false, IsSingle: false}));
        this.components.set('artist', new ArtistComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Avatar: '', Albums: [], Tracks: [], isLiked: false}));
        this.components.set('footer', new PlayerComponent(this.element.querySelector('footer')!, this.isMobile));
        this.components.set('favArtists', new favArtistsComponent(this.element.querySelector('main')!, []));
        this.components.set('favTracks', new favTracksComponent(this.element.querySelector('main')!, []));
        this.components.set('favAlbums', new favAlbumsComponent(this.element.querySelector('main')!, []));
        this.components.set('favPlaylists', new favPlaylistsComponent(this.element.querySelector('main')!, []));
        this.components.set('search', new SearchComponent(this.element.querySelector('main')!));
        this.components.set('profile', new ProfileComponent(this.element.querySelector('main')!));
        this.components.set('playlist', new PlaylistComponent(this.element.querySelector('main')!));
        this.components.set('onboardArtists', new ArtistsOnboardComponent(this.element.querySelector('main')!, []));
        this.components.set('onboardGenres', new GenresOnboardComponent(this.element.querySelector('main')!, []));
    }

    /**
     * Renders the feed by clearing the inner HTML of the main element
     * and appending the feed.
     *
     * @return {void}
     */
    public renderFeed(): void {
        const header = this.element.querySelector('header')!;
        if (header.style.display === 'none') {
            header.style.display = 'block';
        }
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('feed')!.append();
    }

    /**
     * Renders the album by clearing the inner HTML of the 'main' element
     * and appending the album.
     *
     * @return {void}
     */
    public renderAlbum(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('album')!.append();
    }

    /**
     * Renders the artist information.
     *
     * @return {void} 
     */
    public renderArtist(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('artist')!.append();
    }

    public renderFavTracks(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('favTracks')!.append();
    }
    public renderFavAlbums(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('favAlbums')!.append();
    }
    public renderFavArtists(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('favArtists')!.append();
    }
    public renderFavPlaylists(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('favPlaylists')!.append();
    }

    public renderSearch(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('search')!.append();
    }

    public renderProfile(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('profile')!.append();
    }

    public renderPlaylist(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('playlist')!.append();
    }

    public renderArtistsOnboard(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('onboardArtists')!.append();
    }

    public renderGenresOnboard(): void {
        this.element.querySelector('header')!.style.display = 'none';
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.components.get('onboardGenres')!.append();
    }



    /**
     * Sets the content of the feed with the given array of albums.
     *
     * @param {Array<Album>} content - The array of albums to set as the content of the feed.
     * @return {void} 
     */    
    public fillContent(content: Array<Album>, title: string): void {
        const feed = this.components.get('feed') as FeedComponent;
        feed.title = title;
        feed.Content = content;
    }

    /**
     * Fill the album object with the given album.
     *
     * @param {Album} album - The album to fill the object with.
     * @return {void}
     */
    public fillAlbum(album: Album): void {
        const albumComponent = this.components.get('album') as AlbumComponent;
        albumComponent.Album = album;
    }

    public fillTrack(album: Album, id: number, isLiked: boolean): void {
        const albumComponent = this.components.get('album') as AlbumComponent;
        albumComponent.Album = album;
    }

    public fillTrackPlaying(album: Album, id: number, isLiked: boolean): void {
        const albumComponent = this.components.get('album') as AlbumComponent;
        albumComponent.Album = album;
        const player = this.components.get('footer') as PlayerComponent;
        const song: Song = album.Tracks.find((track) => track.Id === id)!;
        player.setSong(song, isLiked);
    }

    /**
     * Fill the artist object with the provided artist.
     *
     * @param {Artist} artist - The artist object to fill.
     * @return {void} 
     */
    public fillArtist(artist: Artist): void {
        const artistComponent = this.components.get('artist') as ArtistComponent;
        artistComponent.Artist = artist;
    }

    /**
     * Fills the collection with the given array of songs.
     *
     * @param {Array<Song>} songs - The array of songs to fill the collection with.
     * @return {void} 
     */
    public fillFavArtists(artists: Array<Artist>): void {
        const favArtists = this.components.get('favArtists') as favArtistsComponent;
        favArtists.Artists = artists;
    }

    public fillFavTracks(songs: Array<Song>): void {
        const favTracks = this.components.get('favTracks') as favTracksComponent;
        favTracks.Songs = songs;
    }

    public fillFavAlbums(albums: Array<Album>): void {
        const favAlbums = this.components.get('favAlbums') as favAlbumsComponent;
        favAlbums.Albums = albums;
    }

    public fillFavPlaylists(liked_playlists: Array<Album>, user_playlists: Array<Album>): void {
        const favPlaylists = this.components.get('favPlaylists') as favPlaylistsComponent;
        favPlaylists.Playlists = {likedPlaylists: liked_playlists, userPlaylist: user_playlists};
    }

    public fillSearch(playlists: Array<Album>, songs: Array<Song>, artists: Array<Artist>, albums: Array<Album>): void {
        const search = this.components.get('search') as SearchComponent;
        search.Content = {Playlists: playlists, Tracks: songs, Artists: artists, Albums: albums};
    }

    public fillPlaylist({playlist, isMine}: {playlist: Playlist, isMine: boolean}): void {
        const playlistComponent = this.components.get('playlist') as PlaylistComponent;
        playlistComponent.Playlist = {playlist, isMine};
    }

    public fillOnboardArtists(artists: Array<OnboardArtist>): void {
        const onboardArtists = this.components.get('onboardArtists') as ArtistsOnboardComponent;
        onboardArtists.Artists = artists;
    }

    public fillOnboardGenres(genres: Array<OnboardGenre>): void {
        const onboardGenres = this.components.get('onboardGenres') as GenresOnboardComponent;
        onboardGenres.Genres = genres;
    }

    /**
     * Plays a song.
     *
     * @param {Song} song - The song to be played.
     * @return {void}
     */
    public play(song: Song, isLiked: boolean): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const img: HTMLImageElement = footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Pause.svg';
        const mobileImg: HTMLImageElement = footer.querySelector('.mobile-player__playbutton') as HTMLImageElement;
        mobileImg.src = '/static/img/pauseBtn.webp';
        footer.playSong(song, isLiked);
        this.totalListningTime = 0;
        this.currentListningTime = Date.now();
    }

    /**
     * Resumes playback of the audio.
     *
     * @return {void}
     */
    public resume(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const mobileImg: HTMLImageElement = footer.querySelector('.mobile-player__playbutton') as HTMLImageElement;
        mobileImg.src = '/static/img/pauseBtn.webp';
        const img: HTMLImageElement = footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Pause.svg';
        footer.resumeSong();
        this.currentListningTime = Date.now();
    }

    /**
     * Resumes playback of the audio.
     *
     * @return {void}
     */
    public waveResume(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const feed = this.components.get('feed') as FeedComponent;
        const mobileImg: HTMLImageElement = footer.querySelector('.mobile-player__playbutton') as HTMLImageElement;
        mobileImg.src = '/static/img/pauseBtn.webp';
        const img: HTMLImageElement = footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Pause.svg';
        const waveImg: HTMLImageElement = feed.querySelector('.feed__my-wave__img') as HTMLImageElement;
        if(waveImg) {
            waveImg.src = '/static/img/Pause.svg';
        }
        feed.isWavePlaying = true;
        footer.resumeSong();
        this.currentListningTime = Date.now();
    }

    /**
     * Resumes playback of the audio.
     *
     * @return {void}
     */
    public waveResumePhoto(): void {
        const feed = this.components.get('feed') as FeedComponent;
        const waveImg: HTMLImageElement = feed.querySelector('.feed__my-wave__img') as HTMLImageElement;
        feed.isWavePlaying = true;
        if(waveImg) {
            waveImg.src = '/static/img/Pause.svg';
        }
    }

    /**
     * Resumes playback of the audio.
     *
     * @return {void}
     */
    public wavePause(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const feed = this.components.get('feed') as FeedComponent;
        const mobileImg: HTMLImageElement = footer.querySelector('.mobile-player__playbutton') as HTMLImageElement;
        mobileImg.src = '/static/img/playButton.webp';
        const img: HTMLImageElement = footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Play.svg';
        const waveImg: HTMLImageElement = feed.querySelector('.feed__my-wave__img') as HTMLImageElement;
        if(waveImg) {
            waveImg.src = '/static/img/Play.svg';
        }
        footer.pauseSong();
        feed.isWavePlaying = false;
		this.currentListningTime = Date.now() - this.currentListningTime;
		this.totalListningTime += this.currentListningTime;
    }


    /**
     * Pauses the audio player and updates the play button image.
     * 
     * @return {void}
     */
    public pause(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const mobileImg: HTMLImageElement = footer.querySelector('.mobile-player__playbutton') as HTMLImageElement;
        mobileImg.src = '/static/img/playButton.webp';
        const img: HTMLImageElement = footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Play.svg';
        footer.pauseSong();
		this.currentListningTime = Date.now() - this.currentListningTime;
		this.totalListningTime += this.currentListningTime;
    }

    /**
     * Binds a click event to the element.
     *
     * @param {Callback} listener - The event listener function.
     * @return {void} 
     */
    public bindClickEvent(listener: Callback): void {
        this.element.addEventListener('click', listener);
    }

    public bindTouchEvent(listener: Callback): void {
        this.element.addEventListener('touchstart', listener);
    }

    

    /**
     * Binds an event listener to the 'ended' event of the audio element
     * in the footer.
     *
     * @param {Callback} listener - The event listener to bind.
     * @return {void}
     */
    public bindEndedEvent(listener: Callback): void {
        const footer = this.components.get('footer') as PlayerComponent;
        footer.querySelector('audio')!.addEventListener('ended', listener);
    }

    /**
     * Removes the event listener for the 'ended' event.
     *
     * @param {Callback} listener - The callback function to be removed.
     * @return {void}
     */
    public removeEndedEvent(listener: Callback): void {
        const footer = this.components.get('footer') as PlayerComponent;
        footer.querySelector('audio')!.removeEventListener('ended', listener)
    }

    /**
     * Makes the given element active.
     *
     * @param {HTMLElement} element - The element to make active.
     * @return {void} 
     */
    public makeActive(element: HTMLElement): void {
        if (!(element instanceof HTMLButtonElement || element.classList.contains('logo__text')) ) {
            this.element.querySelectorAll('.active').forEach(el => {
                el.classList.remove('active');
            });
            element.classList.add('active');
        }
    }

    public makeActiveInnerLink(element: HTMLElement): void {
        if (!(element instanceof HTMLButtonElement || element.classList.contains('logo__text')) ) {
            this.element.querySelectorAll('.activeinnerlink').forEach(el => {
                el.classList.remove('activeinnerlink');
            });
            element.classList.add('activeinnerlink');
        }
    }
    
    /**
     * A function that performs the action of liking.
     *
     * @return {void}
     */
    public like(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        let img = footer.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
        img.src = '/static/img/LikePressed.svg';
        let mobileimg = footer.querySelector('[data-section="mobileLikeBtn"]') as HTMLImageElement;
        mobileimg.src = '/static/img/LikePressed.svg';
        const trackLike: HTMLImageElement | null = document.querySelector(`[data-track="${footer.currentSong.Id}"]`);
        if(trackLike) {
            trackLike.src = '/static/img/LikePressed.svg';
        }
    }

    public trackLike(songId: number): void {
        let img = document.querySelector(`[data-track="${songId}"]`) as HTMLImageElement;
        img.src = '/static/img/LikePressed.svg';
        const footer = this.components.get('footer') as PlayerComponent;
        let playerimg = footer.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
        playerimg.src = '/static/img/LikePressed.svg';
        let mobileimg = footer.querySelector('[data-section="mobileLikeBtn"]') as HTMLImageElement;
        mobileimg.src = '/static/img/LikePressed.svg';
    }

    public albumLike(): void {
        const album = this.components.get('album') as AlbumComponent;
        let img = album.querySelector('.big-like-btn__like') as HTMLImageElement;
        img.src = '/static/img/LikePressed.svg';
    }

    public artistLike(): void {
        const artist = this.components.get('artist') as ArtistComponent;
        let img = artist.querySelector('.big-like-btn__like') as HTMLImageElement;
        img.src = '/static/img/LikePressed.svg';
    }

    public playlistLike(): void {
        const playlist = this.components.get('playlist') as PlaylistComponent;
        let img = playlist.querySelector('.big-like-btn__like') as HTMLImageElement;
        img.src = '/static/img/LikePressed.svg';
    }

    /**
     * Dislikes the item.
     *
     * @return {void}
     */
    public dislike(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        let img = footer.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
        img.src = '/static/img/Like.svg';
        let mobileimg = footer.querySelector('[data-section="mobileLikeBtn"]') as HTMLImageElement;
        mobileimg.src = '/static/img/Like.svg';
        const trackLike: HTMLImageElement | null = document.querySelector(`[data-track="${footer.currentSong.Id}"]`);
        if(trackLike) {
            trackLike.src = '/static/img/Like.svg';
        }
    }

    public trackDislike(songId: number): void {
        const footer = this.components.get('footer') as PlayerComponent;
        let playerimg = footer.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
        playerimg.src = '/static/img/Like.svg';
        let mobileimg = footer.querySelector('[data-section="mobileLikeBtn"]') as HTMLImageElement;
        mobileimg.src = '/static/img/Like.svg';
        let img = document.querySelector(`[data-track="${songId}"]`) as HTMLImageElement;
        img.src = '/static/img/Like.svg';
    }

    public albumDislike(): void {
        const album = this.components.get('album') as AlbumComponent;
        let img = album.querySelector('.big-like-btn__like') as HTMLImageElement;
        img.src = '/static/img/Like.svg';
    }

    public artistDislike(): void {
        const artist = this.components.get('artist') as ArtistComponent;
        let img = artist.querySelector('.big-like-btn__like') as HTMLImageElement;
        img.src = '/static/img/Like.svg';
    }

    public playlistDislike(): void {
        const playlist = this.components.get('playlist') as PlaylistComponent;
        let img = playlist.querySelector('.big-like-btn__like') as HTMLImageElement;
        img.src = '/static/img/Like.svg';
    }

    /**
     * Binds the events for the current object.
     *
     * @return {void} 
     */    
    public bindEvents(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        footer.bindEvents();
    }

    public bindSearchEvents(): void {
        const header = this.components.get('hedaer') as HeaderComponent;
        header.bindSearchEvents();
    }

    /**
     * Loops through the elements in the footer and updates the image source of the loop button.
     *
     * @return {void}
     */
    public loop(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const img = footer.querySelector('[data-section="loopBtn"]') as HTMLImageElement;
        img.src = '/static/img/RepeatActive.svg';
    }

    /**
     * Unloops the function.
     *
     * @return {void} 
     */
    public unloop(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const img = footer.querySelector('[data-section="loopBtn"]') as HTMLImageElement;
        img.src = '/static/img/Repeat.svg';
    }

    /**
     * Shuffles the footer section by changing the source of the image element to a random image.
     *
     * @return {void}
     */
    public shuffle(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const img = footer.querySelector('[data-section="shuffleBtn"]') as HTMLImageElement;
        img.src = '/static/img/RandomActive.svg';
    }

    /**
     * Unshuffles the elements in the footer section.
     *
     * @return {void} 
     */
    public unshuffle(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const img = footer.querySelector('[data-section="shuffleBtn"]') as HTMLImageElement;
        img.src = '/static/img/Random.svg';
    }

    /**
     * Controls the volume of the audio player.
     *
     * @return {void}
     */
    public volume(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        const audio = footer.querySelector('audio')! as HTMLAudioElement;
        if (audio.muted) {
            const img =  footer.querySelector('[data-section="volumeBtn"]')! as HTMLImageElement;
            img.src = '/static/img/SoundOn.svg';
            const volume = footer.querySelector('.volume-bar') as HTMLInputElement;
            volume.value = (audio.volume * 100).toString();
            audio.muted = false;
        } else {
            const img = footer.querySelector('[data-section="volumeBtn"]')! as HTMLImageElement;
            img.src = '/static/img/SoundOff.svg';
            const volume = footer.querySelector('.volume-bar') as HTMLInputElement;
            volume.value = '0';
            audio.muted = true;
        }
    }

    public searchResults(playlists: Array<Playlist>, tracks: Array<Song>, artists: Array<Artist>, albums: Array<Album> ): void {
        const header = this.components.get('header')! as HeaderComponent;
        header.searchResults(playlists, tracks, artists, albums);
    }

    public onboardSearchResults(playlists: Array<Playlist>, tracks: Array<Song>, artists: Array<Artist>, albums: Array<Album>): void {
        const onboardArtists = this.components.get('onboardArtists')! as ArtistsOnboardComponent;
        onboardArtists.Artists = artists;
    }

    /**
     * Fills the content of the function with the specified user.
     *
     * @param {User} user - The user to fill the content with.
     * @return {void}
     */  
    public fillProfile(user: User): void {
        const header = this.components.get('header')! as HeaderComponent;
        header.User = user;
        const profile = this.components.get('profile')! as ProfileComponent;
        profile.User = user;
    }


    /**
     * Binds a submit event listener to the form element within the profile element.
     *
     * @param {Callback} listener - The callback function to be executed when the submit event is triggered.
     * @return {void}
     */
    public bindSubmitEvent(listener: Callback): void {
        const profile = this.components.get('profile')! as ProfileComponent;
        profile.querySelector('form')!.addEventListener('submit', listener);
    }

    /**
     * Binds an upload event listener to the 'change' event of the file input element in the profile section.
     *
     * @param {Callback} listener - The callback function to be executed when the 'change' event is triggered.
     * @return {void} 
     */
    public bindUploadEvent(listener: Callback): void {
        const profile = this.components.get('profile')! as ProfileComponent;
        profile.querySelector('[data-section="fileInput"]')?.addEventListener('change', listener);
    }

    /**
     * Retrieves data from a form.
     *
     * @return {{email: string, username: string, birthdate: string}} The data from the form.
     */
    public getDataFromForm(): {email: string, username: string, birthdate: string} {
        const profile = this.components.get('profile')! as ProfileComponent;
        const emailInput = profile.querySelector('[data-section="email"]') as HTMLInputElement;
        const birthdateInput = profile.querySelector('[data-section="birthdate"]') as HTMLInputElement;
        const usernameInput = profile.querySelector('[data-section="username"]') as HTMLInputElement;
        return {email: emailInput.value!, username: usernameInput.value!, birthdate: birthdateInput.value!};
    }

    public getDataFromPlaylistForm(): {name: string, id: number} {
        const playlist = this.components.get('playlist')! as PlaylistComponent;
        const nameInput = playlist.querySelector('[data-section="playlistName"]') as HTMLInputElement;
        return {name: nameInput.value, id: parseInt(nameInput.getAttribute('data-id')!)};
    }

    /**
     * 
     * Retrieves the avatar file from the form.
     * 
     * @return {File} The avatar file selected in the form.
     */
    public getAvatarFromForm(): File {
        const profile = this.components.get('profile')! as ProfileComponent;
        const avatarInput = profile.querySelector('[data-section="fileInput"]') as HTMLInputElement;
        return avatarInput.files![0];
    }

    public getAvatarFromPlaylistForm(): File {
        const playlist = this.components.get('playlist')! as ProfileComponent;
        const avatarInput = playlist.querySelector('[data-section="fileInput"]') as HTMLInputElement;
        return avatarInput.files![0];
    }
    
    /**
     * Renders an error message based on the given error.
     *
     * @param {string} err - The error message.
     * @return {void}
     */
    public renderError(err: string): void {
        const profile = this.components.get('profile')! as ProfileComponent;
        const playlist = this.components.get('playlist')! as PlaylistComponent;
        switch (err) {
            case 'bad request':
                profile.querySelector('[data-section="username"]').className = 'auth-wrong-input';
                profile.querySelector('[data-section="email"]').className = 'auth-wrong-input';
                profile.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                profile.querySelector('[data-section="passcheck"]').textContent = 'Некорретное имя пользователя или email!';
                profile.querySelector('[data-section="passcheck"]').style.color = 'red';
                return;
            case 'ok':
                profile.querySelector('[data-section="username"]').className = 'auth-input';
                profile.querySelector('[data-section="email"]').className = 'auth-input';
                profile.querySelector('[data-section="passcheck"]').className = 'authlist__error__disabled';
                profile.querySelector('[data-section="passcheck"]').style.color = 'red';
                return;
            case 'not an image':
                profile.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                profile.querySelector('[data-section="passcheck"]').textContent = 'Выбранный файл не является изображением!';
                profile.querySelector('[data-section="passcheck"]').style.color = 'red';
                return;
            case 'not an image playlist':
                playlist.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                playlist.querySelector('[data-section="passcheck"]').textContent = 'Выбранный файл не является изображением!';
                return;
            case 'no spaces': 
                playlist.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                playlist.querySelector('[data-section="passcheck"]').textContent = 'Название плейлиста может быть только без пробелов. Извините!';
                return;
            case 'user-profile-changed':
                profile.querySelector('[data-section="passcheck"]').className = 'authlist__error__active';
                profile.querySelector('[data-section="passcheck"]').textContent = 'Профиль успешно обновлен';
                profile.querySelector('[data-section="passcheck"]').style.color = 'white';
                return;
        }
    }

    public listen(callback: Callback): void {
        this.totalListningTime += Date.now() - this.currentListningTime;
        const player = this.components.get('footer')! as PlayerComponent;
        callback(this.totalListningTime / 1000, player.currentSong.Id);
    }

    public getActiveGenres(): Array<OnboardGenre> {
        const onboardGenres = this.components.get('onboardGenres')! as GenresOnboardComponent;
        return onboardGenres.getActives();
    }

    public getActiveArtists(): Array<OnboardArtist> {
        const onboardArtists = this.components.get('onboardArtists')! as ArtistsOnboardComponent;
        return onboardArtists.getActives();
    }
}

export default MainView;