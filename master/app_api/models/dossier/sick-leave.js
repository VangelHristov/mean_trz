'use strict';

const
  mongoose        = require('mongoose'),
  Schema          = mongoose.Schema,
  objectId        = mongoose.Schema.Types.ObjectId,
  patterns        = require('./../validations/patterns'),
  sickLeaveSchema = new Schema({
      owner                    : {type: objectId, ref: 'Dossier', required: true},
      series                   : {type: String, require: true, match: patterns.sickLeaveSeries},
      continuation             : {type: Boolean, required: true},
      'type'                   : {type: String, required: true},
      'number'                 : {type: String, required: true, match: patterns.sickLeaveNumber},
      from                     : {type: Date, required: true},
      to                       : {type: Date, required: true},
      presentedAt              : {type: Date, required: true},
      decreeDate               : {type: Date, required: true},
      diagnosis                : {type: String, required: true, match: patterns.diagnosisCode},
      additionalDocs           : [String],
      hasMinInsurableExperience: {type: Boolean, required: true},
      isSent                   : {type: Boolean, 'default': true}
  });

sickLeaveSchema.pre('save', function (next) {
    if (this.from >= this.to) {
        next(new Error('Sick leave start date is after the end of sick leave'));
    }

    next();
});

module.exports = sickLeaveSchema;