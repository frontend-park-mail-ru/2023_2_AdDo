import IModel from "../IModel/IModel";
import { Album, Artist, Callback, OnboardArtist, OnboardGenre, Playlist, Song, User } from "../../types";
import Ajax from '../../Modules/Ajax/Ajax';
import hosts from "../../HostConsts";
import EventDispatcher from "../../Modules/EventDispatcher/EventDispatcher";
import paths from "../../Modules/Router/RouterPaths";


/** Class representing an ContentModel. */
export default class ContentModel extends IModel {
    private albums: Array<Album> = [];
    private artists: Array<Artist> = [];
    private songs: Array<Song> = [];
    private currentsongs: Array<Song> = [];
    private collectionSongs: Array<Song> = [];
    private artist: Artist = { Id: 0, Name: '', Avatar: '', Albums: [], Tracks: [], isLiked: false };
    private album: Album = { Id: 0, Name: '', Preview: '', ArtistId: 0, ArtistName: '', Tracks: [], isLiked: false, IsSingle: false };
    private playlist: Playlist = { Id: 0, Name: '', Preview: '', Tracks: [], isLiked: false };
    private socket: WebSocket | null = null;
    public isSocketConnected: boolean = false;
    public isWaveStarted: boolean = false;
    constructor () {
        super();
        EventDispatcher.subscribe('logout', (user: User) => {
            this.socket?.close();
            this.socket = null;
        })
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
                this.albums = responseBody.Albums.slice(0);
                callback(this.albums, 'Попробуйте новое');
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
    public requestAlbum(callback: Callback, url: string, id?: number): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/' + url, {})
		.then(({ status, responseBody }) => {
			if (status === 200) {
                this.album = responseBody;
                this.songs = this.album.Tracks.slice(0);
                Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/album/' + responseBody.Id + '/is_like', {})
                .then(({ status, responseBody }) => {
                    if (status >= 200 && status < 300) {
                        this.album.isLiked = responseBody.IsLiked;
                        if(id) {
                            Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/track/' + id + '/is_like', {})
                            .then(({ status, responseBody }) => {
                                if (status >= 200 && status < 300) {
                                    this.nowPlaying();
                                    callback(this.album, id, responseBody.IsLiked);
                                    return;
                                }
                            })
                            .catch((error) => {
                                throw error;
                            });
                        } else {
                            callback(this.album, id);
                        }
                        return;
                    }
                    if (status === 401) {
                        if(id) {
                            this.nowPlaying();
                            callback(this.album, id, false);
                        } else {
                            callback(this.album, id);
                        }
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
                        callback(this.artist);
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
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/popular', {})
		.then(({ status, responseBody }) => {
			if (status === 200) {
                this.albums = responseBody.Albums.slice(0);
                callback(this.albums, 'Популярные альбомы'); 
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
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/most_liked', {})
		.then(({ status, responseBody }) => {
			if (status === 200) {
                this.albums = responseBody.Albums.slice(0);
                callback(this.albums, 'Понравилось другим'); // надо чтоб копировалось и чтобы responsebody был массивом album
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
                this.albums = responseBody.Albums.slice(0);
                callback(this.albums, 'Новые релизы'); // надо чтоб копировалось и чтобы responsebody был массивом album
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
                this.nowPlaying();
                this.isLiked(callback, 0, user);
                return;
			}
		})
		.catch((error) => {
			throw error;
		});
    }

    public getPlaylistSongs(callback: Callback, PlaylistId: number, user: User | null = null): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + PlaylistId, {})
		.then(({ status, responseBody }) => {
			if (status === 200) {
                this.songs = responseBody.Tracks.slice(0);
                this.nowPlaying();
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

    public getSongByIdFromSongs(songId: number): Song {
        const song = this.songs.find((song) => {
            if (song.Id === songId) {
                return song;
            }
        })
        return song!;
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
        if(this.isSocketConnected) {
            this.socket?.close();
        }
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
                callback(songId);
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
                callback(songId);
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
        public trackLike(songId: number, callback: Callback): void {
            Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/track/' + songId + '/like', {'Content-Type': 'application/json',}, { })
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    this.songs.find(song => song.Id === songId)!.isLiked = true;
                    callback(songId);
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
        public trackDislike(songId: number, callback: Callback): void {
            Ajax.delete(hosts.HOST + hosts.PORT + '/api/v1/track/' + songId + '/unlike', {'Content-Type': 'application/json',}, { })
            .then(({ status }) => {
                if (status >= 200 && status < 300) {
                    this.songs.find(song => song.Id === songId)!.isLiked = false;
                    callback(songId);
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


    public playlistLike(callback: Callback): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + this.album.Id + '/like', {'Content-Type': 'application/json',}, { })
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
    public playlistDislike(callback: Callback): void {
        Ajax.delete(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + this.album.Id + '/unlike', {'Content-Type': 'application/json',}, { })
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
                this.albums = responseBody.Playlists.slice(0);
                Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/my_playlists', {})
                .then(({ status, responseBody }) => {
                    if (status >= 200 && status < 300) {
                        callback(this.albums, responseBody.Playlists.slice(0)); 
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

    public updatePlaylistData(name: string, playlistId: number, callback: Callback, errorCallback: Callback): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + playlistId + '/update_name', {}, { Name: name })
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                callback(paths.favPlaylists);
                return;
            }
            if (status === 400) {
                errorCallback('no spaces');
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public updatePlaylistAvatar (playlistId: number, photo: FormData): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist/' +  playlistId  + '/update_preview', {}, photo, true)
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
                this.album = responseBody;
                this.songs = this.album.Tracks.slice(0);
                Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/my_playlists', {})
                .then(({ status, responseBody }) => {
                    if (status >= 200 && status < 300) {
                        if(responseBody.Playlists.find((playlist: Playlist) => playlist.Id === this.album.Id)) {
                            Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + this.album.Id + '/is_like', {})
                            .then(({ status, responseBody }) => {
                                if (status >= 200 && status < 300) {
                                    this.album.isLiked = responseBody.IsLiked;
                                    callback({playlist: this.album, isMine: false});
                                    return;
                                }
                            })
                            .catch((error) => {
                                throw error;
                            });
                        } else {
                            Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + this.album.Id + '/is_like', {})
                            .then(({ status, responseBody }) => {
                                if (status >= 200 && status < 300) {
                                    this.album.isLiked = responseBody.IsLiked;
                                    callback({playlist: this.album, isMine: true});
                                    return;
                                }
                            })
                            .catch((error) => {
                                throw error;
                            });
                        }
                        return;
                    }
                    if (status === 401) {
                        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + this.album.Id + '/is_like', {})
                        .then(({ status, responseBody }) => {
                            if (status >= 200 && status < 300) {
                                this.album.isLiked = responseBody.IsLiked;
                                callback({playlist: this.album, isMine: true});
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
        })
        .catch((error) => {
            throw error;
        });
    }

    public requestUserPlaylists(id: string, type: string): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/my_playlists', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                EventDispatcher.emit(type, {id, playlists: responseBody.Playlists});
                return;
            }
            if (status === 401) {
                EventDispatcher.emit(type, {id, playlists: []});
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public addTrackToPlaylist(trackId: string, playlistId: string, type: string): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + playlistId + '/add_track', {'Content-Type': 'application/json'}, {Id:  parseInt(trackId)})
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                EventDispatcher.emit(type, {type, id: trackId});
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public deleteTrackFromPlaylist(trackId: string, playlistId: string, callback: Callback): void {
        Ajax.delete(hosts.HOST + hosts.PORT + '/api/v1/playlist/' + playlistId + '/remove_track', {'Content-Type': 'application/json'}, {Id:  parseInt(trackId)})
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                EventDispatcher.emit('delete-track-from-playlist', trackId);
                callback('/playlist/' + playlistId);
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public listenCount(duration: number, id: number): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/listen/' + id, {'Content-Type': 'application/json',}, { Duration: Math.floor(duration) }, )
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public sendGenres(genres: Array<OnboardGenre>): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/genres', {'Content-Type': 'application/json'}, {Genres: genres})
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public sendArtists(artists: Array<OnboardArtist>): void {
        Ajax.post(hosts.HOST + hosts.PORT + '/api/v1/artists', {'Content-Type': 'application/json'}, {Artists: artists})
        .then(({ status }) => {
            if (status >= 200 && status < 300) {
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public requestOnboardGenres(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/genres', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                callback(responseBody.Genres);
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public requestOnboardArtists(callback: Callback): void {
        Ajax.get(hosts.HOST + hosts.PORT + '/api/v1/artists', {})
        .then(({ status, responseBody }) => {
            if (status >= 200 && status < 300) {
                callback(responseBody.Artists);
                return;
            }
        })
        .catch((error) => {
            throw error;
        });
    }

    public openSocket(callback: Callback, songId: number, user: User | null = null, resumeCallback: Callback): void {
        this.socket = new WebSocket('wss://musicon.space' + '/api/v1/wave');
        this.socket.onopen = () => {
            console.log('connected');
            this.requestSocketTracks();
            this.isSocketConnected = true;
        }
        this.socket.onclose = (event) => {
            console.log('disconnected', event.reason);
            this.isSocketConnected = false;
        }
        this.socket.onmessage = (event) => {
            this.songs = JSON.parse(event.data);
            this.currentsongs = this.songs.slice(0);
            if(!this.isWaveStarted) {
                this.isLiked(callback, songId, user);
                this.isWaveStarted = true;
                resumeCallback();
            }
        }
    }

    public requestSocketTracks(): void {
        this.isWaveStarted = false;
        this.socket?.send('1');
    }
}