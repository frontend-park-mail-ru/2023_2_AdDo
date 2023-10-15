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
}

export type Artist = {
    Id: number,
    Name: string,
    Avatar: string,
    Albums: Array<Album>,
    Tracks: Array<Song>,
}

export type Song = {
    Id: number,
    Name: string,
    Preview: string,
    Content: string,
}


export type User = {
    email: string,
    avatar: string,
    username: string,
}