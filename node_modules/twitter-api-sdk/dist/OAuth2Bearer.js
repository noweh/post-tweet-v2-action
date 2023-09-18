"use strict";
// Copyright 2021 Twitter, Inc.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Bearer = void 0;
class OAuth2Bearer {
    constructor(bearer_token) {
        this.bearer_token = bearer_token;
    }
    getAuthHeader() {
        return {
            Authorization: `Bearer ${this.bearer_token}`,
        };
    }
}
exports.OAuth2Bearer = OAuth2Bearer;
