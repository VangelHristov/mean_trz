'use strict';

const
  mongoose          = require('mongoose'),
  Schema            = mongoose.Schema,
  objectId          = mongoose.Schema.Types.ObjectId,
  patterns          = require('./../validations/patterns'),
  enums             = require('./../validations/enums'),
  addressSchema     = require('./../common/address'),
  bankAccountSchema = require('./bank-account'),
  idSchema          = require('./id'),
  namesSchema       = require('./names'),
  checkHasId        = require('./../validations/validate-has-id'),

  dossierSchema     = new Schema({
      company      : {type: objectId, required: true},
      id           : idSchema,
      names        : namesSchema,
      address      : addressSchema,
      phoneNumber  : {type: String, match: patterns.phoneNumber},
      education    : {type: String, enum: enums.education},
      email        : {type: String, match: patterns.email},
      bankAccount  : bankAccountSchema,
      workContract: {type: objectId, ref: 'WorkContract'}
  });

dossierSchema.pre('save', checkHasId);

module.exports = dossierSchema;
