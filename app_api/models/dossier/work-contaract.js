'use strict';

const
  mongoose           = require('mongoose'),
  Schema             = mongoose.Schema,
  objectId           = mongoose.Schema.Types.ObjectId,
  minWage            = require('./../validations/constraints').minWage,
  patterns           = require('./../validations/patterns'),
  validateDates      = require('./../validations/validate-contract-dates'),

  workContractSchema = new Schema({
      dossier                  : {type: objectId, ref: 'Dossier', required: true},
      typeInsured              : {type: String, required: true, match: patterns.typeInsured},
      reasonForContract        : {type: String, required: true/*, match: patterns.reasonForContract*/},
      contractNumber           : {type: String, required: true},
      signingDate              : {type: Date, required: true},
      startingDate             : {type: Date, required: true},
      principalSalary          : {type: Number, required: true, min: minWage},
      contractLengthInMonths   : {type: Number, min: 1},
      workHours                : {type: Number, min: 1, max: 8},
      occupationCode           : {type: String, required: true, match: patterns.occupationCode},
      codeEconomicActivity     : {type: String, required: true, match: patterns.codeEconomicActivity},
      leaveNoticeLengthInDays  : {type: Number, min: 1},
      payedVacationLengthInDays: {type: Number, required: true, min: 20},
      experience               : {
          total     : {type: Number, min: 0, required: true},
          speciality: {type: Number, min: 0, required: true},
          insurable : {type: Number, min: 0, required: true}
      },
      terminationDate          : {type: Date},
      lastDayInsured           : {type: Date}
  });

workContractSchema.pre('save', validateDates);

module.exports = workContractSchema;