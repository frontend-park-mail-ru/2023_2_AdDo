export type Item = {
    href: string,
    name: string,
}

export type Input = {
    type: string,
    text: string,
    name: string,
}

export type Artist = {
    Id: number,
    Name: string,
    Avatar: string,
}

export type Album = {
    Id: number,
    Name: string,
    Preview: string,
}

export type Song = {
    Id: number,
    Name: string,
    Artist: Artist,
    Album: Album,
    Preview: string,
    Content: string,
}

export type route = {
    name: string,
    render: Function,
}
export type routeConfigType = {
    '/feed': route,
    '/podcasts': route,
    '/collection': route,
    '/login': route,
    '/signup': route,
    '/signout': route,
}