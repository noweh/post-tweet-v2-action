import type { RequestInit, Response } from "node-fetch";
import { AuthClient, TwitterNextToken, TwitterPaginatedResponse } from "./types";
export interface RequestOptions extends Omit<RequestInit, "body"> {
    auth?: AuthClient;
    endpoint: string;
    params?: Record<string, any>;
    request_body?: Record<string, any>;
    method?: string;
    max_retries?: number;
    base_url?: string;
}
export declare function request({ auth, endpoint, params: query, request_body, method, max_retries, base_url, headers, ...options }: RequestOptions): Promise<Response>;
export declare function stream<T>(args: RequestOptions): AsyncGenerator<T>;
export declare function rest<T = Record<string, any>>(args: RequestOptions): Promise<T>;
export declare function paginate<T extends TwitterNextToken>(args: RequestOptions): TwitterPaginatedResponse<T>;
