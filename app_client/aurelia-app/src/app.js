'use strict';

import {AuthorizeStep} from './resources/services/authorize-step';
import {User} from './resources/services/user';
import {inject} from 'aurelia-framework';

@inject(User)
export class App {
    constructor(user) {
        this.primaryColor = '#72538f';
        this.accentColor  = '#8F5A5A';
        this.errorColor   = '#f44336';
        this.user         = user;
    }

    configureRouter(config, router) {
        config.title = 'ТРЗ';
        config.addPipelineStep('authorize', AuthorizeStep);
        config.map([
            {route: '', redirect: 'about'},
            {name: 'about', route: 'about', moduleId: 'about/about', title: 'ТРЗ'},
            {name: 'help', route: 'help', moduleId: 'help/help', title: 'Помощ'}
        ]);
        config.mapUnknownRoutes('not-found/not-found');
        this.router = router;
    }
}