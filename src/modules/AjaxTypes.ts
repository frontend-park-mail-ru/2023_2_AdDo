export type requestParamsType = {
    url: string;
    options: NonNullable<unknown>;
}

export type responseType = {
    ok: boolean;
    status: number;
    responseBody: any;
}