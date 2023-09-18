export declare type SuccessStatus = 200 | 201;
export declare type ResponseType = "application/json";
export interface AuthHeader {
    Authorization: string;
}
export declare abstract class AuthClient {
    abstract getAuthHeader(url?: string, method?: string): Promise<AuthHeader> | AuthHeader;
}
export interface TwitterNextToken {
    meta?: {
        next_token?: string;
    };
}
export interface TwitterPaginatedResponse<T extends TwitterNextToken> extends AsyncIterable<T> {
    then(resolve: ((value: T) => T | PromiseLike<T>) | null | undefined, reject: ((reason: any) => T | PromiseLike<T>) | null | undefined): Promise<T>;
}
export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare type GetSuccess<T> = {
    [K in SuccessStatus & keyof T]: GetContent<T[K]>;
}[SuccessStatus & keyof T];
export declare type TwitterResponse<T> = UnionToIntersection<ExtractTwitterResponse<T>>;
export declare type GetContent<T> = "content" extends keyof T ? ResponseType extends keyof T["content"] ? T["content"][ResponseType] : never : never;
export declare type ExtractTwitterResponse<T> = "responses" extends keyof T ? GetSuccess<T["responses"]> : never;
export declare type TwitterParams<T> = "parameters" extends keyof T ? "query" extends keyof T["parameters"] ? T["parameters"]["query"] : never : never;
export declare type TwitterPath<T> = "parameters" extends keyof T ? "path" extends keyof T["parameters"] ? T["parameters"]["path"] : never : never;
export declare type TwitterBody<T> = "requestBody" extends keyof T ? "content" extends keyof T["requestBody"] ? ResponseType extends keyof T["requestBody"]["content"] ? T["requestBody"]["content"][ResponseType] : never : never : never;
export * from "./gen/openapi-types";
