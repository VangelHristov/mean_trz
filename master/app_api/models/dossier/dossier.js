'use strict';

const
  mongoose   = require('mongoose'),
  Schema     = mongoose.Schema,
  objectId   = mongoose.Schema.Types.ObjectId,
  infoSchema = require('./info');

module.exports = new Schema({
      owner         : {type: objectId, required: true},
      personalInfo  : {type: infoSchema, autoIndex: false},
      workContracts : [{type: objectId, ref: 'WorkContract', required: true}],
      civilContracts: [{type: objectId, ref: 'CivilContract', required: true}],
      vacations     : [{type: objectId, ref: 'Vacation', required: true}],
      sickLeaves    : [{type: objectId, ref: 'SickLeave', required: true}]
  });
