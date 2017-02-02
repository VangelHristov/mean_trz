'use strict';

export class Authenticator {
    isLoggedIn(){
        return window.localStorage.getItem('token') !== 'null';
    }

    logIn(token) {
        window.localStorage.setItem('token', JSON.stringify(token));
    }

    logOut() {
        window.localStorage.removeItem('token');
    }

    getToken(){
        return window.localStorage.getItem('token');
    }
}