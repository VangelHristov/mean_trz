'use strict';

const
  mongoose           = require('mongoose'),
  Schema             = mongoose.Schema,
  objectId           = mongoose.Schema.Types.ObjectId,
  minWage            = require('./../validations/constraints').minWage,
  patterns           = require('./../validations/patterns'),
  workContractSchema = new Schema({
      owner              : {type: objectId, ref: 'Dossier', required: true},
      typeInsured        : {type: String, required: true, match: patterns.typeInsured},
      contractNumber     : {type: String, required: true},
      signingDate        : {type: Date, required: true},
      startingDate       : {type: Date, required: true},
      principalSalary    : {type: Number, required: true, min: minWage},
      contractLength     : {type: Number, min: 1},
      workHours          : {type: Number, min: 1, max: 8},
      occupationNKPD     : {type: String, required: true, match: patterns.occupationNKPD},
      kid                : {type: String, required: true,},
      noticeLength       : {type: Number, min: 1},
      payedVacationLength: {type: Number, required: true, min: 20},
      trialPeriod        : {type: Number, min: 0},
      experience         : {
          total     : {type: Number, min: 0, required: true},
          speciality: {type: Number, min: 0, required: true},
          insurable : {type: Number, min: 0, required: true}
      },
      terminationDate    : {type: Date},
      lastDayInsured     : {type: Date}
  });

workContractSchema.pre('save', function (next) {
    let error;
    if (this.startingDate < this.signingDate) {
        error = Error('Start date is before signing date');
        next(error);
    }

    if (this.terminationDate && this.terminationDate < this.startingDate) {
        error = Error('Termination date is before starting date');
        next(error);
    }

    if (this.terminationDate) {
        let termin          = this.terminationDate;
        this.lastDayInsured = new Date(termin.getFullYear(), termin.getMonth(), termin.getDate() - 1);
    }

    next();
});

module.exports = workContractSchema;