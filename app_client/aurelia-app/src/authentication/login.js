'use strict';

import {bindable} from 'aurelia-framework';

export class Login {
    constructor() {
        this.email    = '';
        this.password = '';
    }

    @bindable user = null;
}