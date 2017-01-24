'use strict';

const
  mongoose          = require('mongoose'),
  objectId          = mongoose.Schema.Types.ObjectId,
  companyInfoSchema = require('./info'),
  cyrillic          = require('../validations/patterns').cyrillic;

module.exports = new mongoose.Schema({
    owner      : {type: objectId, ref: 'User', required: true},
    companyInfo: companyInfoSchema,
    settings   : {type: objectId, ref: 'CompanySettings'},
    director   : {type: String, required: true, match: cyrillic},
    dossiers   : [{type: objectId, ref: 'Dossier'}]
});
