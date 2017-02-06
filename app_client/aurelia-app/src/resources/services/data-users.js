'use strict';

import {HttpClient, json} from 'aurelia-fetch-client';
import {inject, NewInstance} from 'aurelia-framework';

@inject(NewInstance.of(HttpClient))
export class DataUsers {
    constructor(xhr) {
        this.xhr = xhr.configure(config => config.withBaseUrl('api/users'));
    }

    create(email, password) {
        return this.xhr
                   .fetch('', {
                       method: 'POST',
                       body  : json({email, password})
                   });
    }
}