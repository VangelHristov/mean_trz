'use strict';

const
  Schema = require('mongoose').Schema,
  patterns = require('./../validations/patterns'),
  errorMessage = require('../validations/error-messages');

module.exports = new Schema({
    first : {
        type: String,
        required: [true, errorMessage.missingFirstName],
        match: [patterns.cyrillic, errorMessage.invalidFirstName]
    },
    middle: {type: String, match: [patterns.cyrillic, errorMessage.invalidMiddleName]},
    last  : {
        type    : String,
        required: [true, errorMessage.missingLastName],
        match   : [patterns.cyrillic, errorMessage.invalidLastName]
    }
}, {
    _id: false
});