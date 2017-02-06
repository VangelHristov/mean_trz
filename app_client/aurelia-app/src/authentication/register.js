'use strict';

import {bindable, inject} from 'aurelia-framework';
import {DataUsers} from '../resources/services/data-users';
import {MdToastService} from 'aurelia-materialize-bridge';
import {json} from 'aurelia-router';

@inject(DataUsers, MdToastService)
export class Register {
    constructor(users, toast) {
        this.email          = '';
        this.password       = '';
        this.passwordRepeat = '';
        this.users          = users;
        this.toast          = toast;
    }

    register() {
        this.users
            .create(this.email, this.password)
            .then(res => this.toast.show(json(res)));
    }

    @bindable user = null;
}