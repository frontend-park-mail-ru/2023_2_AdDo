import IView from '../IView/IView';
import template from './MainView.hbs';
import { HeaderComponent } from '../../Components/HeaderComponent/HeaderComponent';
import { PlayerComponent } from '../../Components/PlayerComponent/PlayerComponent';
import { FeedComponent } from '../../Components/FeedComponent/FeedComponent';
import type { Album, Song, User, Artist, Callback } from '../../types';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { AlbumComponent } from '../../Components/AlbumComponent/AlbumComponent';
import { ArtistComponent } from '../../Components/ArtistComponent/ArtistComponent';


/** Class representing a MainView. */
class MainView extends IView {

    private header: HeaderComponent; 
    private feed: FeedComponent;
    private album: AlbumComponent;
    private artist: ArtistComponent;
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
        this.footer = new PlayerComponent(this.element.querySelector('footer')!);
        this.header.append();
        this.footer.append();

        EventDispatcher.subscribe('user-changed', (user: User) => {
            // todo
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

    /**
     * Plays a song.
     *
     * @param {Song} song - The song to be played.
     * @return {void}
     */
    public play(song: Song): void {
        let img: HTMLImageElement = this.footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = '/static/img/Pause.svg';
        this.footer.playSong(song);
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


    public makeActive(element: HTMLElement): void {
        this.element.querySelectorAll('.active').forEach(el => {
            el.classList.remove('active');
        });
        element.classList.add('active');
    }
}

export default MainView;