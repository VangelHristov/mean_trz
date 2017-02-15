'use strict';

import {HttpClient, json as stringify} from 'aurelia-fetch-client';
import {inject, NewInstance} from 'aurelia-framework';
import {json as parse} from 'aurelia-router';

@inject(NewInstance.of(HttpClient))
export class DataUsers {
    constructor(xhr) {
        this.xhr = xhr
          .configure(config => {
              config
                .useStandardConfiguration()
                .withBaseUrl('api/');
          });
    }

    create(email, password) {
        return new Promise((resolve, reject) => {
            this.xhr
                .fetch('users', {
                    method: 'POST',
                    body  : stringify({email, password})
                })
                .then(result => resolve(parse(result)))
                .catch(err => reject(err));
        });
    }
}