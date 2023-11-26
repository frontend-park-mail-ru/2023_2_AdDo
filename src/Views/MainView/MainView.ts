import IView from '../IView/IView';
import template from './MainView.hbs';
import { HeaderComponent } from '../../Components/HeaderComponent/HeaderComponent';
import { PlayerComponent } from '../../Components/PlayerComponent/PlayerComponent';
import { FeedComponent } from '../../Components/FeedComponent/FeedComponent';
import type { Album, Song, User, Artist, Callback, Playlist } from '../../types';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { AlbumComponent } from '../../Components/AlbumComponent/AlbumComponent';
import { ArtistComponent } from '../../Components/ArtistComponent/ArtistComponent';
import { favArtistsComponent } from '../../Components/FavArtistsComponent/FavArtistsComponent';
import { favTracksComponent } from '../../Components/FavTracksComponent/FavTracksComponent';
import { favAlbumsComponent } from '../../Components/FavAlbumsComponent/FavAlbumsComponent';
import { favPlaylistsComponent } from '../../Components/FavPlaylistsComponent/FavPlaylistsComponent';
import IComponent from '../../Components/IComponent/IComponent';


/** Class representing a MainView. */
class MainView extends IView {

    private components: Map<string, IComponent> = new Map();
    public isMobile: boolean = false;

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
        this.components.set('album', new AlbumComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: []}));
        this.components.set('artist', new ArtistComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Avatar: '', Albums: [], Tracks: []}));
        this.components.set('footer', new PlayerComponent(this.element.querySelector('footer')!, this.isMobile));
        this.components.set('favArtists', new favArtistsComponent(this.element.querySelector('main')!, []));
        this.components.set('favTracks', new favTracksComponent(this.element.querySelector('main')!, []));
        this.components.set('favAlbums', new favAlbumsComponent(this.element.querySelector('main')!, []));
        this.components.set('favPlaylists', new favPlaylistsComponent(this.element.querySelector('main')!, []));
    }

    /**
     * Renders the feed by clearing the inner HTML of the main element
     * and appending the feed.
     *
     * @return {void}
     */
    public renderFeed(): void {
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


    /**
     * Sets the content of the feed with the given array of albums.
     *
     * @param {Array<Album>} content - The array of albums to set as the content of the feed.
     * @return {void} 
     */    
    public fillContent(content: Array<Album>): void {
        const feed = this.components.get('feed') as FeedComponent;
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

    public fillFavPlaylists(playlists: Array<Album>): void {
        const favPlaylists = this.components.get('favPlaylists') as favPlaylistsComponent;
        favPlaylists.Playlists = playlists;
    }

    /**
     * Plays a song.
     *
     * @param {Song} song - The song to be played.
     * @return {void}
     */
    public play(song: Song, isLiked: boolean): void {
        const footer = this.components.get('footer') as PlayerComponent;
        let img: HTMLImageElement = footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Pause.svg';
        footer.playSong(song, isLiked);
    }

    /**
     * Resumes playback of the audio.
     *
     * @return {void}
     */
    public resume(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        if(this.isMobile) {
            let img: HTMLImageElement = footer.querySelector('.mobile-player__playbutton') as HTMLImageElement;
            img.src = '/static/img/pauseBtn.png';
        } else {
            let img: HTMLImageElement = footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
            img.src = '/static/img/Pause.svg';
        }
        
        footer.resumeSong();
    }
    /**
     * Pauses the audio player and updates the play button image.
     * 
     * @return {void}
     */
    public pause(): void {
        const footer = this.components.get('footer') as PlayerComponent;
        let img: HTMLImageElement = footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Play.svg';
        footer.pauseSong();
    }

    /**
     * Binds a click event to the element.
     *
     * @param {Callback} listener - The event listener function.
     * @return {void} 
     */
    public bindClickEvent(listener: Callback): void {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this.element.addEventListener('touchstart', listener);
        } else {
            this.element.addEventListener('click', listener);
        }
        
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

    public searchResults(tracks: Array<Song>, albums: Array<Album>, artists: Array<Artist>, playlists: Array<Playlist>): void {
        const header = this.components.get('header')! as HeaderComponent;
        header.searchResults(tracks, albums, artists, playlists);
    }
}

export default MainView;