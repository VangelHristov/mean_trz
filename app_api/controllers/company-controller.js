'use strict';

const
  config = require('../config/company'),
  factory = require('./controller-factory');

module.exports = factory(config);