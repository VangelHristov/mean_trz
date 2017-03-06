'use strict';

const
  Schema = require('mongoose').Schema,
  bic = require('./../validations/patterns').bic,
  isValidIban = require('./../validations/iban'),
  errorMessages = require('../validations/error-messages');

module.exports = new Schema({
    bank: {type: String, required: [true, errorMessages.missingBankName]},
    iban: {
        type    : String,
        required: [true, errorMessages.missingIban],
        validate: {validator: isValidIban, message: errorMessages.invalidIban}
    },
    bic : {type: String, required: [true, errorMessages.missingBic], match: [bic, errorMessages.invalidBic]}
}, {
    _id: false
});
