'use strict';

import {inject} from 'aurelia-framework';
import {User} from '../resources/services/user';

@inject(User)
export class NavBar {
    constructor(user){
       this.user = user;
   }
}