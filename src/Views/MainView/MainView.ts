import IView from '../IView/IView';
import template from './MainView.hbs';
import { HeaderComponent } from '../../Components/HeaderComponent/HeaderComponent';
import { PlayerComponent } from '../../Components/PlayerComponent/PlayerComponent';
import { FeedComponent } from '../../Components/FeedComponent/FeedComponent';
import { s3HOST } from '../../HostConsts';
import FeedModel from '../../Models/FeedModel/FeedModel';
import type { Album, Song } from '../../types';


class MainView extends IView {

    private header: HeaderComponent; 
    private body: FeedComponent;  // TODO how to update content not render all page
    private footer: PlayerComponent;

    public constructor(parent: HTMLElement) {
        super(parent, template({}));

        this.header = new HeaderComponent(this.element.querySelector('header')!);
        this.body = new FeedComponent(this.element.querySelector('main')!, s3HOST);
        this.footer = new PlayerComponent(this.element.querySelector('footer')!, s3HOST);
        this.header.append();
        this.body.append();
        this.footer.append();
    }

    public fillContent(content: Array<Album>): void {
        this.body.Content = content;
    }

    public play(...songs: Array<Song>): void {
        this.footer.playSong(songs[0]);
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

}

export default MainView;