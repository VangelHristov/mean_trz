'use strict';

import {routes, fallback} from './routes';

class AuthorizeStep {
    run(navigationInstruction, next) {

        if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {

            let token = window.localStorage.getItem('token');

            if (!token || token === 'null') {
                return next.cancel();
            }
        }

        return next();
    }
}

export class App {
    constructor() {
        this.primaryColor = '#72538f';
        this.accentColor  = '#8F5A5A';
        this.errorColor   = '#f44336';
    }

    configureRouter(config, router) {
        config.title = 'ТРЗ';
        config.addAuthorizeStep(new AuthorizeStep());
        config.map(routes);
        config.fallbackRoute(fallback);
        this.router = router;
    }

}