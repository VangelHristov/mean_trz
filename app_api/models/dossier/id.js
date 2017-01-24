'use strict';

const
  Schema          = require('mongoose').Schema,
  patterns        = require('../validations/patterns'),
  isValidEGN      = require('../validations/egn'),
  isValidLNCH     = require('../validations/lnch'),
  enums           = require('../validations/enums'),
  minAge          = require('../validations/validate-age'),

  bulgarianSchema = new Schema({
      egn         : {type: String, validate: isValidEGN},
      idCardNumber: {type: String, match: patterns.bulgarianIdCardNumber},
  }),

  foreignSchema   = new Schema({
      lnch        : {type: String, validate: isValidLNCH},
      sex         : {type: String, enum: enums.sex},
      dob         : {type: Date, validate: minAge},
      idCardNumber: {type: String, match: patterns.foreignIdCardNumber}
  });

module.exports = new Schema({
    bulgarian: bulgarianSchema,
    foreign  : foreignSchema
}, {
    _id: false
});