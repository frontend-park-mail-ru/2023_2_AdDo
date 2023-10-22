import IView from '../IView/IView';
import template from './MainView.hbs';
import { HeaderComponent } from '../../Components/HeaderComponent/HeaderComponent';
import { PlayerComponent } from '../../Components/PlayerComponent/PlayerComponent';
import { FeedComponent } from '../../Components/FeedComponent/FeedComponent';
import { s3HOST } from '../../HostConsts';
import FeedModel from '../../Models/ContentModel/ContentModel';
import type { Album, Song, User, Artist } from '../../types';
import EventDispatcher from '../../Modules/EventDispatcher/EventDispatcher';
import { AlbumComponent } from '../../Components/AlbumComponent/AlbumComponent';
import { ArtistComponent } from '../../Components/ArtistComponent/ArtistComponent';
import UserModel from '../../Models/UserModel/UserModel';


class MainView extends IView {

    private header: HeaderComponent; 
    private feed: FeedComponent;
    private album: AlbumComponent;
    private artist: ArtistComponent;
    private footer: PlayerComponent;

    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.header = new HeaderComponent(this.element.querySelector('header')!);
        this.feed = new FeedComponent(this.element.querySelector('main')!, s3HOST);
        this.album = new AlbumComponent(this.element.querySelector('main')!, s3HOST, {Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: []});
        this.artist = new ArtistComponent(this.element.querySelector('main')!, s3HOST, {Id: 0, Name: '', Avatar: '', Albums: [], Tracks: []});
        this.footer = new PlayerComponent(this.element.querySelector('footer')!, s3HOST);
        this.header.append();
        this.footer.append();

        EventDispatcher.subscribe('user-changed', (user: User) => {
            // todo
        });
    }

    public renderFeed(): void {
        this.feed.append();
    }

    public renderAlbum(): void {
        this.album.append();
    }

    public renderArtist(): void {
        this.artist.append();
    }

    public fillHeader(user: User): void {
        this.header.User = user;
    }

    public fillContent(content: Array<Album>): void {
        this.feed.Content = content;
    }

    public fillAlbum(album: Album): void {
        this.album.Album = album;
    }

    public fillArtist(artist: Artist): void {
        this.artist.Artist = artist;
    }

    public play(song: Song): void {
        this.footer.playSong(song);
    }

    public resume(): void {
        let img: HTMLImageElement = this.footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = './static/img/Pause.svg';
        this.footer.resumeSong();
    }

    public pause(): void {
        let img: HTMLImageElement = this.footer.querySelector('[data-section="playBtn"]') as HTMLImageElement;
        img.src = './static/img/Play.svg';
        this.footer.pauseSong();
    }


    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener);
    }

    public bindEndedEvent(listener: any): void {
        this.footer.querySelector('audio')!.addEventListener('ended', listener);
    }
}

export default MainView;