export type requestParamsType = {
    url: string;
    method: string;
    headers: NonNullable<unknown>;
}

export type responseType = {
    ok: boolean;
    status: number;
    responseBody: any;
}