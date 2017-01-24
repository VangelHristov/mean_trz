'use strict';

const
  mongoose = require('mongoose'),
  Schema   = mongoose.Schema,
  objectId = mongoose.SchemaTypes.ObjectId;

module.exports = new Schema({
    owner: {type: objectId, ref: 'Company', required: true},
    pkpv : {type: String, required: true},//процент клас прослужено време
});