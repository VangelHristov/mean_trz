'use strict';

const
  mongoose       = require('mongoose'),
  Schema         = mongoose.Schema,
  objectId       = mongoose.Schema.Types.ObjectId,
  vacationSchema = new Schema({
      owner     : {type: objectId, ref: 'Dossier', required: true},
      'type'    : {type: String, required: true},
      from      : {type: Date, required: true},
      to        : {type: Date, required: true},
      decreeDate: {type: Date, required: true}
  });

vacationSchema.pre('save', function (next) {
    if (this.from >= this.to) {
         next(new Error('Start date is after end date'));
    }

     next();
});

module.exports = vacationSchema;