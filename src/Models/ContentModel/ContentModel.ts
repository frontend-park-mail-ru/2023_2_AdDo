import IModel from "../IModel/IModel";
import { Album, Artist, Callback, Song } from "../../types";
import Ajax from '../../Modules/Ajax/Ajax';
import hosts from "../../HostConsts";


/** Class representing an ContentModel. */
export default class ContentModel extends IModel {
    private albums: Array<Album> = [];
    private songs: Array<Song> = [];
    private currentsongs: Array<Song> = [];
    private currentArtistSongs: Array<Song> = [];
    private artist: Artist = { Id: 0, Name: '', Avatar: '', Albums: [], Tracks: [] };
    private album: Album = { Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: [] };

    constructor () {
        super();
    }

    /**
     * Retrieves albums from the server and invokes a callback function with the albums.
     *
     * @param {Callback} callback - The callback function to be invoked with the albums.
     * @return {void} 
     */   
    public requestAlbums(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/feed')
		.then(({ ok, status, responseBody }) => {
            console.log(responseBody, status);
			if (status === 200) {
                this.albums = responseBody.slice(0);
                callback(this.albums); 
                return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    /**
     * Requests an album from the API and performs a callback with the album data.
     *
     * @param {Callback} callback - The callback function to be called with the album data.
     * @param {number} albumId - The ID of the album to request.
     * @return {void} This function does not return anything.
     */
    public requestAlbum(callback: Callback, albumId: number): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/album/' + albumId)
		.then(({ ok, status, responseBody }) => {
            console.log(responseBody, status);
			if (status === 200) {
                this.album = responseBody;
                this.songs = this.album.Tracks.slice(0);
                this.currentsongs = this.songs.slice(0);
                callback(this.album);
                return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    /**
     * Requests an artist from the API.
     *
     * @param {Callback} callback - The callback function to be called with the artist data.
     * @param {number} artistId - The ID of the artist to request.
     * @return {void}
     */
    public requestArtist(callback: Callback, artistId: number): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/artist/' + artistId)
		.then(({ status, responseBody }) => {
            console.log(responseBody, status);
			if (status === 200) {
                this.artist = responseBody;
                this.currentArtistSongs = this.artist.Tracks.slice(0);
                callback(this.artist);
                return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    /**
     * Retrieves a chart from the API and invokes the provided callback function with the chart data.
     *
     * @param {Callback} callback - The callback function to be invoked with the chart data.
     * @return {void}
     */
    public requestChart(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/chart')
		.then(({ status, responseBody }) => {
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
     * Requests playlists from the server and invokes a callback function with the response.
     *
     * @param {any} callback - The callback function to be invoked with the response.
     * @return {void} 
     */
    public requestPlaylists(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/playlists')
		.then(({ status, responseBody }) => {
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
     * Executes a new request and calls the provided callback function with the resulting albums.
     *
     * @param {Callback} callback - The callback function to be called with the albums.
     * @return {void} This function does not return a value.
     */
    public requestNew(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/new')
		.then(({ status, responseBody }) => {
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
     * Retrieves the albums.
     *
     * @return {Array} The albums.
     */ 
    public getAlbums() {
        return this.albums;
    }

    /**
     * Retrieves songs from the API based on the provided AlbumId.
     *
     * @param {Callback} callback - The callback function to be executed after the songs are retrieved.
     * @param {number} AlbumId - The ID of the album to retrieve songs from.
     */
    public getSongs(callback: Callback, AlbumId: number) {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/album/' + AlbumId)
		.then(({ status, responseBody }) => {
			if (status === 200) {
                this.songs = responseBody.Tracks.slice(0);
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
     * Retrieves a song from the current songs array based on its ID.
     *
     * @param {number} songId - The ID of the song to retrieve.
     * @return {Song} The song object corresponding to the given ID.
     */
    public getSongById(songId: number): Song {
        return this.currentsongs[songId];
    }

    /**
     * Retrieves a song from the current artist's songs collection based on the provided song ID.
     *
     * @param {number} songId - The ID of the song to retrieve.
     * @return {Song} The song object corresponding to the provided ID.
     */
    public getArtistSongById(songId: number): Song {
        return this.currentArtistSongs[songId];
    }

    /**
     * Returns the length of the current songs array.
     *
     * @return {number} The length of the current songs array.
     */
    public getSongsLength(): number {
        return this.currentsongs.length;
    }

}