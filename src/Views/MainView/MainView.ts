import IView from '../IView/IView';
import template from './MainView.hbs';
import { HeaderComponent } from '../../Components/HeaderComponent/HeaderComponent';
import { PlayerComponent } from '../../Components/PlayerComponent/PlayerComponent';
import { FeedComponent } from '../../Components/FeedComponent/FeedComponent';
import type { Album, Song, User, Artist, Callback } from '../../types';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { AlbumComponent } from '../../Components/AlbumComponent/AlbumComponent';
import { ArtistComponent } from '../../Components/ArtistComponent/ArtistComponent';
import { CollectionComponent } from '../../Components/CollectionComponent/CollectionComponent';


/** Class representing a MainView. */
class MainView extends IView {

    private header: HeaderComponent; 
    private feed: FeedComponent;
    private album: AlbumComponent;
    private artist: ArtistComponent;
    private collection: CollectionComponent;
    private footer: PlayerComponent;


    /**
     * Constructor for initializing the class.
     *
     * @param {HTMLElement} parent - The parent element to attach the class to.
     */
    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.header = new HeaderComponent(this.element.querySelector('header')!);
        this.feed = new FeedComponent(this.element.querySelector('main')!);
        this.album = new AlbumComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: []});
        this.artist = new ArtistComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Avatar: '', Albums: [], Tracks: []});
        this.collection = new CollectionComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: []});
        this.footer = new PlayerComponent(this.element.querySelector('footer')!);
        this.header.append();
        this.footer.append();

        EventDispatcher.subscribe('user-changed', (user: User | null = null) => {
            this.header.User = user;
        });
    }

    /**
     * Renders the feed by clearing the inner HTML of the main element
     * and appending the feed.
     *
     * @return {void}
     */
    public renderFeed(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.feed.append();
    }

    /**
     * Renders the album by clearing the inner HTML of the 'main' element
     * and appending the album.
     *
     * @return {void}
     */
    public renderAlbum(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.album.append();
    }

    /**
     * Renders the artist information.
     *
     * @return {void} 
     */
    public renderArtist(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.artist.append();
    }

    public renderCollection(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.collection.append();
    }
    /**
     * Sets the user object in the header.
     *
     * @param {User} user - The user to be set in the header.
     * @return {void} 
     */
    public fillHeader(user: User): void {
        this.header.User = user;
    }

    /**
     * Sets the content of the feed with the given array of albums.
     *
     * @param {Array<Album>} content - The array of albums to set as the content of the feed.
     * @return {void} 
     */    
    public fillContent(content: Array<Album>): void {
        this.feed.Content = content;
    }

    /**
     * Fill the album object with the given album.
     *
     * @param {Album} album - The album to fill the object with.
     * @return {void}
     */
    public fillAlbum(album: Album): void {
        this.album.Album = album;
    }

    /**
     * Fill the artist object with the provided artist.
     *
     * @param {Artist} artist - The artist object to fill.
     * @return {void} 
     */
    public fillArtist(artist: Artist): void {
        this.artist.Artist = artist;
    }

    
    public fillCollection(album: Album): void {
        this.collection.Album = album;
    }

    /**
     * Plays a song.
     *
     * @param {Song} song - The song to be played.
     * @return {void}
     */
    public play(song: Song, isLiked: boolean): void {
        let img: HTMLImageElement = this.footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Pause.svg';
        this.footer.playSong(song, isLiked);
    }

    /**
     * Resumes playback of the audio.
     *
     * @return {void}
     */
    public resume(): void {
        let img: HTMLImageElement = this.footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Pause.svg';
        this.footer.resumeSong();
    }
    /**
     * Pauses the audio player and updates the play button image.
     * 
     * @return {void}
     */
    public pause(): void {
        let img: HTMLImageElement = this.footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Play.svg';
        this.footer.pauseSong();
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

    /**
     * Binds an event listener to the 'ended' event of the audio element
     * in the footer.
     *
     * @param {Callback} listener - The event listener to bind.
     * @return {void}
     */
    public bindEndedEvent(listener: Callback): void {
        this.footer.querySelector('audio')!.addEventListener('ended', listener);
    }

    public removeEndedEvent(listener: Callback): void {
        this.footer.querySelector('audio')!.removeEventListener('ended', listener)
    }


    public makeActive(element: HTMLElement): void {
        if (!(element instanceof HTMLButtonElement || element.classList.contains('logo_text')) ) {
            this.element.querySelectorAll('.active').forEach(el => {
                el.classList.remove('active');
            });
            element.classList.add('active');
        }
    }

    public like() {
        let img = this.footer.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
        img.src = '/static/img/LikePressed.svg';
    }

    public dislike() {
        let img = this.footer.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
        img.src = '/static/img/Like.svg';
    }

    public bindEvents(): void {
        this.footer.bindEvents();
    }

    public loop(): void {
        const img = this.footer.querySelector('[data-section="loopBtn"]') as HTMLImageElement;
        img.src = '/static/img/RepeatActive.svg';
    }

    public unloop(): void {
        const img = this.footer.querySelector('[data-section="loopBtn"]') as HTMLImageElement;
        img.src = '/static/img/Repeat.svg';
    }

    public shuffle(): void {
        const img = this.footer.querySelector('[data-section="shuffleBtn"]') as HTMLImageElement;
        img.src = '/static/img/RandomActive.svg';
    }

    public unshuffle(): void {
        const img = this.footer.querySelector('[data-section="shuffleBtn"]') as HTMLImageElement;
        img.src = '/static/img/Random.svg';
    }

    public volume(): void {
        const audio = this.footer.querySelector('audio')! as HTMLAudioElement;
        if (audio.muted) {
            const img =  this.footer.querySelector('[data-section="volumeBtn"]')! as HTMLImageElement;
            img.src = '/static/img/SoundOn.svg';
            const volume = this.footer.querySelector('.volume-bar') as HTMLInputElement;
            volume.value = (audio.volume * 100).toString();
            audio.muted = false;
        } else {
            const img =  this.footer.querySelector('[data-section="volumeBtn"]')! as HTMLImageElement;
            img.src = '/static/img/SoundOff.svg';
            const volume = this.footer.querySelector('.volume-bar') as HTMLInputElement;
            volume.value = '0';
            audio.muted = true;
        }
    }
}

export default MainView;