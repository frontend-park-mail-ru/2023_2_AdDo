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
import { favArtistsComponent } from '../../Components/FavArtistsComponent/FavArtistsComponent';
import { favTracksComponent } from '../../Components/FavTracksComponent/FavTracksComponent';
import { favAlbumsComponent } from '../../Components/FavAlbumsComponent/FavAlbumsComponent';
import { favPlaylistsComponent } from '../../Components/FavPlaylistsComponent/FavPlaylistsComponent';
import IComponent from '../../Components/IComponent/IComponent';


/** Class representing a MainView. */
class MainView extends IView {

    private header: HeaderComponent; 
    private feed: FeedComponent;
    private album: AlbumComponent;
    private artist: ArtistComponent;
    private collection: CollectionComponent;
    private footer: PlayerComponent;
    private favArtists: favArtistsComponent;
    private favTracks: favTracksComponent;
    private favAlbums: favAlbumsComponent;
    private favPlaylists: favPlaylistsComponent;
    private components: Map<string, IComponent> = new Map();


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
        this.collection = new CollectionComponent(this.element.querySelector('main')!, []);
        this.favArtists = new favArtistsComponent(this.element.querySelector('main')!, []);
        this.favTracks = new favTracksComponent(this.element.querySelector('main')!, []);
        this.favAlbums = new favAlbumsComponent(this.element.querySelector('main')!, []);
        this.favPlaylists = new favPlaylistsComponent(this.element.querySelector('main')!, []);
        this.footer = new PlayerComponent(this.element.querySelector('footer')!);
        this.initComponents();
        this.components.get('header')!.append();
        this.components.get('footer')!.append();
        this.header.append();
        this.footer.append();

        EventDispatcher.subscribe('user-changed', (user: User | null = null) => {
            this.header.User = user;
        });
    }

    private initComponents(): void {
        this.components.set('header', new HeaderComponent(this.element.querySelector('header')!));
        this.components.set('feed', new FeedComponent(this.element.querySelector('main')!));
        this.components.set('album', new AlbumComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: []}));
        this.components.set('artist', new ArtistComponent(this.element.querySelector('main')!, {Id: 0, Name: '', Avatar: '', Albums: [], Tracks: []}));
        this.components.set('collection', new CollectionComponent(this.element.querySelector('main')!, []));
        this.components.set('footer', new PlayerComponent(this.element.querySelector('footer')!));
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
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.album.append();
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
        this.artist.append();
    }

    public renderFavTracks(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.collection.append();
        this.favTracks.append();
    }
    public renderFavAlbums(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.collection.append();
        this.favAlbums.append();
    }
    public renderFavArtists(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.collection.append();
        this.favArtists.append();
    }
    public renderFavPlaylists(): void {
        this.element.querySelector('main')!.innerHTML = '';
        this.components.forEach((component: IComponent) => {
            component.hide();
        });
        this.collection.append();
        this.favPlaylists.append();
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
     * Fills the collection with the given array of songs.
     *
     * @param {Array<Song>} songs - The array of songs to fill the collection with.
     * @return {void} 
     */
    public fillCollection(songs: Array<Song>): void {
        this.collection.Songs = songs;
    }

    public fillFavArtists(artists: Array<Artist>): void {
        this.favArtists.Artists = artists;
    }

    public fillFavTracks(songs: Array<Song>): void {
        this.favTracks.Songs = songs;
    }

    public fillFavAlbums(albums: Array<Album>): void {
        this.favAlbums.Albums = albums;
    }

    public fillFavPlaylists(playlists: Array<Album>): void {
        this.favPlaylists.Playlists = playlists;
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
        if(navigator.userAgentData!.mobile) {
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
        this.footer.querySelector('audio')!.addEventListener('ended', listener);
    }

    /**
     * Removes the event listener for the 'ended' event.
     *
     * @param {Callback} listener - The callback function to be removed.
     * @return {void}
     */
    public removeEndedEvent(listener: Callback): void {
        this.footer.querySelector('audio')!.removeEventListener('ended', listener)
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

    /**
     * A function that performs the action of liking.
     *
     * @return {void}
     */
    public like(): void {
        let img = this.footer.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
        img.src = '/static/img/LikePressed.svg';
    }

    /**
     * Dislikes the item.
     *
     * @return {void}
     */
    public dislike(): void {
        let img = this.footer.querySelector('[data-section="likeBtn"]') as HTMLImageElement;
        img.src = '/static/img/Like.svg';
    }

    /**
     * Binds the events for the current object.
     *
     * @return {void} 
     */    
    public bindEvents(): void {
        this.footer.bindEvents();
    }

    /**
     * Loops through the elements in the footer and updates the image source of the loop button.
     *
     * @return {void}
     */
    public loop(): void {
        const img = this.footer.querySelector('[data-section="loopBtn"]') as HTMLImageElement;
        img.src = '/static/img/RepeatActive.svg';
    }

    /**
     * Unloops the function.
     *
     * @return {void} 
     */
    public unloop(): void {
        const img = this.footer.querySelector('[data-section="loopBtn"]') as HTMLImageElement;
        img.src = '/static/img/Repeat.svg';
    }

    /**
     * Shuffles the footer section by changing the source of the image element to a random image.
     *
     * @return {void}
     */
    public shuffle(): void {
        const img = this.footer.querySelector('[data-section="shuffleBtn"]') as HTMLImageElement;
        img.src = '/static/img/RandomActive.svg';
    }

    /**
     * Unshuffles the elements in the footer section.
     *
     * @return {void} 
     */
    public unshuffle(): void {
        const img = this.footer.querySelector('[data-section="shuffleBtn"]') as HTMLImageElement;
        img.src = '/static/img/Random.svg';
    }

    /**
     * Controls the volume of the audio player.
     *
     * @return {void}
     */
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