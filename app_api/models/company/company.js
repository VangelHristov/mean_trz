'use strict';

const
  mongoose      = require('mongoose'),
  objectId      = mongoose.Schema.Types.ObjectId,
  bulstat       = require('../validations/bulstat'),
  addressSchema = require('../common/address'),
  cyrillic      = require('../validations/patterns').cyrillic;

module.exports = new mongoose.Schema({
    user                 : {type: objectId, ref: 'User', required: true},
    name                 : {type: String, required: true},
    bulstat              : {type: String, required: true, validate: bulstat},
    registeredAddress    : {type: addressSchema, required: true},
    correspondenceAddress: {type: addressSchema, required: true},
    mainEconomicActivity : {type: String, required: true},
    pkpv                 : {type: Number, required: true, min: 0, max: 100},
    director             : {type: String, required: true, match: cyrillic},
    dossiers             : [{type: objectId, ref: 'Dossier'}]
});
