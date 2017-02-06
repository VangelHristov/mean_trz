'use strict';

export class User {
    constructor() {
        this._token      = localStorage.getItem('token');
        this._isLoggedIn = (this._token && this._token !== 'null');
    }

    get isLoggedIn() {
        return this._isLoggedIn;
    }

    login(token) {
        if (token && token !== 'null') {
            this._token = token;
            window.localStorage.setItem('token', JSON.stringify(token));
            this._isLoggedIn = true;
        }
    }

    logOut() {
        localStorage.removeItem('token');
        this._token      = null;
        this._isLoggedIn = false;
    }

    get token() {
        return this._token;
    }
}