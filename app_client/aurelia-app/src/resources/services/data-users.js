'use strict';

import {HttpClient, json} from 'aurelia-fetch-client';
import {inject, NewInstance} from 'aurelia-framework';

@inject(NewInstance.of(HttpClient))
export class DataUsers {
    constructor(xhr) {
        this.xhr = xhr.configure(config => config.withBaseUrl('api/'));
    }

    create(email, password) {
        return new Promise((resolve, reject) => {
            this.xhr
                .fetch('users', {
                    method: 'POST',
                    body  : json({email, password})
                })
                .then(result => resolve(result))
                .catch(err => reject(err));
        });
    }
}