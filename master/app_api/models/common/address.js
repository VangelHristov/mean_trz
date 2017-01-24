'use strict';

const
  Schema   = require('mongoose').Schema,
  patterns = require('./../validations/patterns');

module.exports = new Schema({
    street    : {type: String, required: true, match: patterns.cyrillic},
    city      : {type: String, required: true, match: patterns.cyrillic},
    postalCode: {type: String, required: true, match: patterns.postalCode},
    country   : {type: String, required: true, match: patterns.cyrillic}
}, {
    _id: false
});