'use strict';

const
  Schema   = require('mongoose').Schema,
  patterns = require('./../validations/patterns');

module.exports = new Schema({
    first : {type: String, required: true, match: patterns.cyrillic},
    middle: {type: String, match: patterns.cyrillic},
    last  : {type: String, required: true, match: patterns.cyrillic}
}, {
    _id: false
});