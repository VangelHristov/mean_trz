'use strict';

import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {MdToastService} from 'aurelia-materialize-bridge';

@inject(Router, MdToastService)
export class User {
    constructor(router, toast) {
        this.theRouter   = router;
        this.toast       = toast;
        this._token      = localStorage.getItem('token');
        this._isLoggedIn = (this._token && this._token !== 'null');
    }

    get isLoggedIn() {
        return this._isLoggedIn;
    }

    logIn(token) {
        if (token && token !== 'null') {
            this._token = token;
            window.localStorage.setItem('token', JSON.stringify(token));
            this._isLoggedIn = true;
        } else {
            this.toast.show('Missing token!!!', 5000);
        }
    }

    logOut() {
        localStorage.removeItem('token');
        this._token      = null;
        this._isLoggedIn = false;
        this.theRouter
            .navigateToRoute('about')
            .then(() => this.toast.show('Good bye', 4000));
    }

    get token() {
        return this._token;
    }
}