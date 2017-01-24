'use strict';

const
  Schema      = require('mongoose').Schema,
  bic         = require('./../validations/patterns').bic,
  isValidIban = require('./../validations/iban');

module.exports = new Schema({
    bank: {type: String, required: true},
    iban: {type: String, required: true, validate: isValidIban},
    bic : {type: String, required: true, match: bic}
}, {
    _id: false
});
