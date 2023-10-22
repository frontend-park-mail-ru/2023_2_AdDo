import IModel from "../IModel/IModel";
import { Album, Artist, Song } from "../../types";
import Ajax from '../../Modules/Ajax/Ajax';
import hosts from "../../HostConsts";

export default class ContentModel extends IModel {
    private albums: Array<Album> = [];
    private songs: Array<Song> = [];
    private currentsongs: Array<Song> = [];
    private artist: Artist = { Id: 0, Name: '', Avatar: '', Albums: [], Tracks: [] };
    private album: Album = { Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: [] };
    constructor () {
        super();
    }

    public requestAlbums(callback: any): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/feed', true)
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

    public requestAlbum(callback: any, albumId: number): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/album/' + albumId, true)
		.then(({ ok, status, responseBody }) => {
            console.log(responseBody, status);
			if (status === 200) {
                this.album = responseBody;
                this.songs = this.album.Tracks.slice(0);
                callback(this.album);
                return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    public requestArtist(callback: any, artistId: number): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/artist/' + artistId, true)
		.then(({ ok, status, responseBody }) => {
            console.log(responseBody, status);
			if (status === 200) {
                this.artist = responseBody;
                callback(this.artist);
                return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    public requestChart(callback: any): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/chart', true)
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

    public requestPlaylists(callback: any): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/playlists', true)
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

    public requestNew(callback: any): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/new', true)
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
    public getSongs(callback: any, AlbumId: number) {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/albums/' + AlbumId , true)
		.then(({ ok, status, responseBody }) => {
			if (status === 200) {
                this.songs = responseBody.tracks.slice(0);
                callback(this.songs[0]);
                this.currentsongs = this.songs.slice(0); // надо чтоб копировалось и чтобы responsebody был массивом album
                return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    /**
     * getSongById
     */
    public getSongById(songId: number): Song {
        return this.currentsongs[songId];
    }

    /**
     * getSongsLength
     */
    public getSongsLength(): number {
        return this.currentsongs.length;
    }

}