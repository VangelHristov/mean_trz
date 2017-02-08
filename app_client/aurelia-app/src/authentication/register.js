'use strict';

import {inject} from 'aurelia-framework';
import {DataUsers} from '../resources/services/data-users';
import {MdToastService} from 'aurelia-materialize-bridge';
import {json} from 'aurelia-router';
import {User} from '../resources/services/user';

@inject(DataUsers, User, MdToastService)
export class Register {
    constructor(db, user, toast) {
        this.email          = '';
        this.password       = '';
        this.passwordRepeat = '';
        this.db             = db;
        this.user           = user;
        this.toast          = toast;
    }

    register() {
        this.db
            .create(this.email, this.password)
            .then((res) => this.toast.show(res.message, 5000))
            .catch((err) => this.toast.show(err, 6000));
    }
}