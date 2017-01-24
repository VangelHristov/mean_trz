'use strict';

const
  Schema            = require('mongoose').Schema,
  patterns          = require('./../validations/patterns'),
  enums             = require('./../validations/enums'),
  addressSchema     = require('./../common/address'),
  bankAccountSchema = require('./bank-account'),
  idSchema          = require('./id'),
  namesSchema       = require('./names'),
  personInfoSchema  = new Schema({
      id         : idSchema,
      names      : namesSchema,
      address    : addressSchema,
      phoneNumber: {type: String, match: patterns.phoneNumber},
      education  : {type: String, enum: enums.education},
      email      : {type: String},
      bankAccount: bankAccountSchema
  }, {
      _id: false
  });

personInfoSchema.pre('save', function (next) {

    if (!this.id.bulgarian && !this.id.foreign) {

        next(new Error('No id or lnch'));
    } else if (this.id.bulgarian && this.id.foreign) {

        next(new Error('Both egn and lch are provided'));
    } else if (this.id.bulgarian && !this.id.foreign) {

        if (!this.id.bulgarian.egn || !this.id.bulgarian.idCardNumber) {

            next(new Error('No egn or id card number'));
        }
    } else if (this.id.foreign && !this.id.bulgarian) {
        if (!this.id.foreign.lnch || !this.id.foreign.idCardNumber || !this.id.foreign.dob || !this.id.foreign.sex) {

            next(new Error('Missing or incomplete lnch'));
        }
    }

    next();
});

module.exports = personInfoSchema;