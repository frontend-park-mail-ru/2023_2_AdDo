import IModel from "../IModel/IModel";
import { Album, Song } from "../../types";
import Ajax from '../../Modules/Ajax/Ajax';
import { HOST, PORT } from "../../HostConsts";

export default class FeedModel extends IModel {
    private albums: Array<Album> = [];
    private songs: Array<Song> = [];
    constructor (callback: any) {
        super();
        this.requestAlbums(callback);
    }

    public requestAlbums(callback: any): void {
        Ajax.get(HOST + PORT + '/api/v1/music', true)
		.then(({ ok, status, responseBody }) => {
            console.log(responseBody, status);
			if (status === 200) {
                this.albums = responseBody.slice(0);
                callback(this.albums); // надо чтоб копировалось и чтобы responsebody был массивом album
                return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    /**
     * GetAlbums
     */
    public getAlbums() {
        return this.albums;
    }

    /**
     * getSongs
     */
    public getSongs(AlbumId: number): Array<Song> {
        Ajax.get(HOST + PORT + '/api/v1/albums/' + AlbumId , true)
		.then(({ ok, status, responseBody }) => {
			if (status === 200) {
                this.songs = responseBody.slice(0); // надо чтоб копировалось и чтобы responsebody был массивом album
                return this.songs;
			}
		})
		.catch((error) => {
			throw error;
		});
        return [];
    }

    /**
     * getSongById
     */
    public getSongById(songId: number): Song {
        return this.songs[songId];
    }

    /**
     * getSongsLength
     */
    public getSongsLength(): number {
        return this.songs.length;
    }

}