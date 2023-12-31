export type Item = {
    href: string,
    name: string,
}

export type Input = {
    type: string,
    text: string,
    name: string,
}
export type Album = {
    Id: number,
    Name: string,
    Preview: string,
    ArtistId: number,
    ArtistName: string,
    Tracks: Array<Song>,
    isLiked: boolean,
    IsSingle: boolean,
}

export type Playlist = {
    Id: number,
    Name: string,
    Preview: string,
    Tracks: Array<Song>,
    isLiked: boolean,
}

export type Artist = {
    Id: number,
    Name: string,
    Avatar: string,
    Albums: Array<Album>,
    Tracks: Array<Song>,
    isLiked: boolean,
}

export type Song = {
    Id: number,
    Name: string,
    Preview: string,
    Content: string,
    ArtistName: string,
    isLiked: boolean,
    ArtistId: number,
    Lyrics: string,
}

export type OnboardGenre = {
    Id: number,
    Name: string,
    Preview: string,
}

export type OnboardArtist = {
    Id: number,
    Name: string,
    Avatar: string,
}


export type User = {
    email: string,
    avatar: string,
    username: string,
    birthdate: string,
}

export type Callback = (arg?: any, ...args: any) => void;

export type HostConstsType = {
    HOST: string,
    s3HOST: string,
    PORT: string,
}