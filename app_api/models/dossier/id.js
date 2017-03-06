'use strict';

const
  Schema = require('mongoose').Schema,
  patterns = require('../validations/patterns'),
  isValidEGN = require('../validations/egn'),
  isValidLNCH = require('../validations/lnch'),
  enums = require('../validations/enums'),
  minAge = require('../validations/validate-age'),
  errorMessages = require('../validations/error-messages'),

  bulgarianSchema = new Schema({
      egn         : {type: String, validate: {validator: isValidEGN, message: errorMessages.invalidEgn}},
      idCardNumber: {type: String, match: [patterns.bulgarianIdCardNumber, errorMessages.invalidIdCardNumber]},
  }),

  foreignSchema = new Schema({
      lnch        : {type: String, validate: {validator: isValidLNCH, message: errorMessages.invalidLnch}},
      sex         : {type: String, enum: enums.sex},
      dob         : {type: Date, validate: {validator: minAge, message: errorMessages.minAge}},
      idCardNumber: {type: String, match: [patterns.foreignIdCardNumber, errorMessages.invalidIdCardNumber]}
  });

module.exports = new Schema({
    bulgarian: bulgarianSchema,
    foreign  : foreignSchema
}, {
    _id: false
});