'use strict';

const
  Schema        = require('mongoose').Schema,
  bulstat       = require('../validations/bulstat'),
  addressSchema = require('../common/address');

module.exports = new Schema({
    name                 : {type: String, required: true},
    bulstat              : {type: String, required: true, validate: bulstat},
    registeredAddress    : {type: addressSchema, required: true},
    correspondenceAddress: {type: addressSchema, required: true},
    mainEconomicActivity : {type: String, required: true}
}, {
    _id: false
});