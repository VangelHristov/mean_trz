'use strict';

import {User} from './user';
import {inject} from 'aurelia-framework';

@inject(User)
export class AuthorizeStep {
    constructor(user) {
        this.user = user;
    }

    run(navigationInstruction, next) {

        if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {

            if (!this.user.isLoggedIn) {
                return next.cancel();
            }
        }

        return next();
    }
}