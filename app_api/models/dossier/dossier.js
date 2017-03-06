'use strict';

const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  objectId = mongoose.Schema.Types.ObjectId,
  patterns = require('./../validations/patterns'),
  enums = require('./../validations/enums'),
  addressSchema = require('./../common/address'),
  bankAccountSchema = require('./bank-account'),
  idSchema = require('./id'),
  namesSchema = require('./names'),
  checkHasId = require('./../validations/validate-has-id'),
  errorMessages = require('../validations/error-messages'),

  dossierSchema = new Schema({
      company      : {type: objectId, required: [true, errorMessages.missingCompanyId]},
      id           : idSchema,
      names        : namesSchema,
      address      : addressSchema,
      phoneNumber  : {type: String, match: [patterns.phoneNumber, errorMessages.invalidPhoneNumber]},
      education    : {type: String, enum: enums.education},
      email        : {type: String, match: [patterns.email, errorMessages.invalidEmail]},
      bankAccount  : bankAccountSchema,
      workContracts: [{type: objectId, ref: 'WorkContract'}]
  });

dossierSchema.pre('save', checkHasId);

module.exports = dossierSchema;
