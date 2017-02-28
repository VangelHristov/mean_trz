'use strict';

const
  config = require('../config/dossiers'),
  factory = require('./controller-factory');

module.exports = factory(config);