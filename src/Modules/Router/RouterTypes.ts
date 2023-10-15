export type IRoute = {
    rule: RegExp;
    handler: RouteHandler;
}

export type RouteHandler = (params: string[]) => void;
export type AnyHandler = () => void;