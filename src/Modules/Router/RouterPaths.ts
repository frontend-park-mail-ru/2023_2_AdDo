/**
 * Конфигурация URL адресов приложения
 * @category Router
 * @constant {Object}
 */
const paths = {
    root: '/',
    playlist: '/playlist/{:id}',
    favTracks: '/collection/tracks',
    favAlbums: '/collection/albums',
    favArtists: '/collection/artists',
    favPlaylists: '/collection/playlists',
    podcasts: '/podcasts',
    feedAll: '/feed/all',
    feedChart: '/feed/chart',
    feedNew: '/feed/new',
    feedPlaylists: '/feed/playlists',
    album: '/album/{:id}',
    artist: '/artist/{:id}',
    track: '/track/{:id}',
    login: '/login',
    signup: '/signup',
    profile: '/profile',
    search: '/search\?.*/',
    onboardGenres: '/onboard/genres',
    onboardArtists: '/onboard/artists',
};

export default paths;