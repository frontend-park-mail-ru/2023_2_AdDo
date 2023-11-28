import IModel from "../IModel/IModel";
import { Album, Artist, Callback, Playlist, Song, User } from "../../types";
import Ajax from '../../Modules/Ajax/Ajax';
import hosts from "../../HostConsts";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";


/** Class representing an ContentModel. */
export default class ContentModel extends IModel {
    private albums: Array<Album> = [];
    private artists: Array<Artist> = [];
    private songs: Array<Song> = [];
    private currentsongs: Array<Song> = [];
    private collectionSongs: Array<Song> = [];
    private artist: Artist = { Id: 0, Name: '', Avatar: '', Albums: [], Tracks: [], isLiked: false };
    private album: Album = { Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: [], isLiked: false };
    private playlist: Playlist = { Id: 0, Name: '', Preview: '', Tracks: [], isLiked: false };

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
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/feed', {})
		.then(({ ok, status, responseBody }) => {
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
    public requestAlbum(callback: Callback, url: string): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/' + url, {})
		.then(({ ok, status, responseBody }) => {
			if (status === 200) {
                this.album = responseBody;
                this.songs = this.album.Tracks.slice(0);
                Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/album/' + responseBody.Id + '/is_like', {})
                .then(({ status, responseBody }) => {
                    if (status >= 200 && status < 300) {
                        this.album.isLiked = responseBody.IsLiked;
                        callback(this.album);
                        return;
                    }
                    if (status === 401) {
                        callback(this.album);
                        return;
                    }
                })
                .catch((error) => {
                    throw error;
                });
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
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/artist/' + artistId, {})
		.then(({ status, responseBody }) => {
			if (status === 200) {
                this.artist = responseBody;
                this.songs = this.artist.Tracks.slice(0);
                Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/artist/' + artistId + '/is_like', {})
                .then(({ status, responseBody }) => {
                    if (status >= 200 && status < 300) {
                        this.artist.isLiked = responseBody.IsLiked;
                        callback(this.artist);
                        return;
                    }
                    if (status === 401) {
                        callback(this.album);
                        return;
                    }
                })
                .catch((error) => {
                    throw error;
                });
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
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/chart', {})
		.then(({ status, responseBody }) => {
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
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/playlists', {})
		.then(({ status, responseBody }) => {
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
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/new', {})
		.then(({ status, responseBody }) => {
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
     * @return {Array<Album>} The albums.
     */ 
    public getAlbums(): Array<Album> {
        return this.albums;
    }

    /**
     * Retrieves the current songs.
     *
     * @return {Array<Song>} The array of current songs.
     */
    public getCurrentSongs(): Array<Song> {
        return this.currentsongs;
    }

    /**
     * Retrieves songs from the API based on the provided AlbumId.
     *
     * @param {Callback} callback - The callback function to be executed after the songs are retrieved.
     * @param {number} AlbumId - The ID of the album to retrieve songs from.
     */
    public getSongs(callback: Callback, AlbumId: number, user: User | null = null): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/album/' + AlbumId, {})
		.then(({ status, responseBody }) => {
			if (status === 200) {
                this.songs = responseBody.Tracks.slice(0);
                this.currentsongs = this.songs.slice(0); 
                this.isLiked(callback, 0, user);
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
     * Retrieves a song from the collection by its ID.
     *
     * @param {number} songId - The ID of the song to retrieve.
     * @return {Song} The song object corresponding to the given ID.
     */
    public getSongByCollectionId(songId: number): Song {
        return this.collectionSongs[songId];
    }

    public getAlbum(): Album {
        return this.album;
    }

    public getArtist(): Artist {
        return this.artist;
    }

    /**
     * Returns the length of the current songs array.
     *
     * @return {number} The length of the current songs array.
     */
    public getSongsLength(): number {
        return this.currentsongs.length;
    }

    /**
     * This function updates the list of current songs to be the same as the list of all songs.
     *
     * @param {void} None
     * @return {void} It does not return a value.
     */
    public nowPlaying(): void {
        this.currentsongs = this.songs.slice(0);
    }

    /**
     * Checks if a song is liked by a user.
     *
     * @param {Callback} callback - The callback function to be called after the request is completed.
     * @param {number} songId - The ID of the song to check.
     * @param {User | null} user - The user object. Defaults to null.
     * @return {void}
     */
    public isLiked(callback: Callback, songId: number, user: User | null = null): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/track/' + this.currentsongs[songId].Id + '/is_like', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                this.currentsongs[songId].isLiked = responseBody.IsLiked;
                callback(this.getSongById(songId), responseBody.IsLiked, user);
            } else if (status === 401) {
                callback(this.getSongById(songId), false, null);
            }
        })
    }

    /**
     * Like a song.
     *
     * @param {number} songId - The ID of the song to like.
     * @param {Callback} callback - The callback function to be called after the like operation is complete.
     * @return {void} 
     */
    public like(songId: number, callback: Callback): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/track/' + this.currentsongs[songId].Id + '/like', {'Content-Type': 'application/json',}, { })
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                this.currentsongs[songId].isLiked = true;
                callback();
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    /**
     * Dislikes a song.
     *
     * @param {number} songId - The ID of the song to dislike.
     * @param {Callback} callback - The callback function to be called after disliking the song.
     * @return {void}
     */
    public dislike(songId: number, callback: Callback): void {
        Ajax.delete(hosts.HOST + hosts.PORT + '/api/v1/track/' + this.currentsongs[songId].Id + '/unlike', {'Content-Type': 'application/json',}, { })
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                this.currentsongs[songId].isLiked = false;
                callback();
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

        /**
     * Like a song.
     *
     * @param {number} songId - The ID of the song to like.
     * @param {Callback} callback - The callback function to be called after the like operation is complete.
     * @return {void} 
     */
    public albumLike(callback: Callback): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/album/' + this.album.Id + '/like', {'Content-Type': 'application/json',}, { })
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                this.album.isLiked = true;
                callback();
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    /**
     * Dislikes a song.
     *
     * @param {number} songId - The ID of the song to dislike.
     * @param {Callback} callback - The callback function to be called after disliking the song.
     * @return {void}
     */
    public albumDislike(callback: Callback): void {
        Ajax.delete(hosts.HOST + hosts.PORT + '/api/v1/album/' + this.album.Id + '/unlike', {'Content-Type': 'application/json',}, { })
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                this.album.isLiked = false;
                callback();
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    /**
     * Like a song.
     *
     * @param {number} songId - The ID of the song to like.
     * @param {Callback} callback - The callback function to be called after the like operation is complete.
     * @return {void} 
     */
    public artistLike(callback: Callback): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/artist/' + this.artist.Id + '/like', {'Content-Type': 'application/json',}, { })
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                this.artist.isLiked = true;
                callback();
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    /**
     * Dislikes a song.
     *
     * @param {number} songId - The ID of the song to dislike.
     * @param {Callback} callback - The callback function to be called after disliking the song.
     * @return {void}
     */
    public artistDislike(callback: Callback): void {
        Ajax.delete(hosts.HOST + hosts.PORT + '/api/v1/artist/' + this.artist.Id + '/unlike', {'Content-Type': 'application/json',}, { })
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                this.artist.isLiked = false;
                callback();
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    /**
     * Requests the offline data and invokes the provided callback function with the parsed data.
     *
     * @param {Callback} callback - The callback function to be invoked with the parsed data.
     * @return {void} 
     */
    public requestOffline(callback: Callback): void {
        callback(JSON.parse(localStorage.getItem('collection')!) as Album);
    }

    /**
     * Requests the collection of tracks from the API.
     *
     * @param {Callback} callback - The callback function to be executed after the request is completed.
     * @return {void}
     */
    public requestfavAlbums(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/collection/albums', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                this.albums = responseBody.Albums.slice(0);
                callback(this.albums); 
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }
    public requestfavTracks(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/collection/tracks', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                this.songs = responseBody.Tracks.slice(0);
                this.songs.forEach((song) => {
                    song.isLiked = true;
                });
                callback(this.songs); 
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }
    public requestfavPlaylists(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/collection/playlists', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                this.albums = responseBody.slice(0);
                Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/my_playlists', {})
                .then(({ status, responseBody }) => {
                    if (status >= 200 && status < 300) {
                        callback(this.albums, responseBody.slice(0)); 
                        return;
                    }
                })
                .catch((error) => {
                    throw error;
                });
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }
    public requestfavArtists(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/collection/artists', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                this.artists = responseBody.Artists.slice(0);
                callback(this.artists); 
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public requestSearch(term: string, callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/search?query=' + term, {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                const tracks: Array<Song> = responseBody.Tracks.slice(0);
                const albums: Array<Album> = responseBody.Albums.slice(0);
                const artists: Array<Artist> = responseBody.Artists.slice(0);
                const playlists: Array<Playlist> = responseBody.Playlists.slice(0);
                callback(playlists, tracks, artists, albums);
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public createPlaylist(callback: Callback): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist', {}, {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                callback('/playlist/' + responseBody.Id);
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public deletePlaylist(playlistId: number): void {
        Ajax.delete(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + playlistId, {'Content-Type': 'application/json',}, { })
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public updatePlaylistData(name: string, playlistId: number, callback: Callback): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + playlistId + '/update_name', {}, JSON.stringify({ Name: name }))
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                callback();
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public updatePlaylistAvatar (playlistId: number, photo: FormData): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist/' +  playlistId  + '/update_preview', {}, photo)
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public requestPlaylist(callback: Callback, playlistId: number): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + playlistId, {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                callback(responseBody);
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public requestUserPlaylists(id: string): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/my_playlists', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                EventDispatcher.emit('show-playlists', {id, playlists: responseBody});
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public addTrackToPlaylist(trackId: string, playlistId: string): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + playlistId + '/add_track', {'Content-Type': 'application/json'}, {Id: trackId})
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                EventDispatcher.emit('add-track-to-playlist', trackId);
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public removeTrackFromPlaylist(trackId: string, playlistId: string): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + playlistId + '/remove_track/', {'Content-Type': 'application/json'}, {Id: trackId})
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                EventDispatcher.emit('remove-track-from-playlist', trackId);
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }
}