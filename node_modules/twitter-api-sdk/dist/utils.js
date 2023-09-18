"use strict";
// Copyright 2021 Twitter, Inc.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicAuthHeader = exports.buildQueryString = void 0;
// https://stackoverflow.com/a/62969380
function buildQueryString(query) {
    return Object.entries(query)
        .map(([key, value]) => key && value
        ? `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        : "")
        .join("&");
}
exports.buildQueryString = buildQueryString;
function basicAuthHeader(client_id, client_secret) {
    return `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`;
}
exports.basicAuthHeader = basicAuthHeader;
