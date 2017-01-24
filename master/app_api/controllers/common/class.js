'use strict';

const
  sendJson = require('./send-json'),
  respond  = require('./respond'),
  update   = require('./update-document'),
  save     = require('./save');

class Controller {
    constructor(config){
        this.model = config.model;
        this.ownerModel
    }
}

module.exports = Controller;