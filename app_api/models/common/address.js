'use strict';

const
  Schema                 = require('mongoose').Schema,
  {cyrillic, postalCode} = require('./../validations/patterns');

module.exports = new Schema({
    street    : {type: String, required: true, match: cyrillic},
    city      : {type: String, required: true, match: cyrillic},
    postalCode: {type: String, required: true, match: postalCode},
    country   : {type: String, required: true, match: cyrillic}
}, {
    _id: false
});