'use strict';

const
  mongoose         = require('mongoose'),
  Schema           = mongoose.Schema,
  objectId         = mongoose.Schema.Types.ObjectId,
  typeInsured      = require('./../validations/patterns').typeInsured,
  months           = require('./../validations/enums').months,
  minPensionAmount = require('./../validations/constraints').minPensionAmount;

module.exports = new Schema({
    owner             : {type: objectId, ref: 'Dossier', required: true},
    typeInsured       : {type: String, required: true, match: typeInsured},
    isRetired         : {type: Boolean, required: true},
    pensionAmount     : {type: Number, min: minPensionAmount},
    contractNumber    : {type: String, required: true},
    period            : {type: String, required: true, enum: months},
    deductibleExpenses: [String]
});