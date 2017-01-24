'use strict';

const
  mongoose = require('mongoose'),
  Schema   = mongoose.Schema,
  objectId = mongoose.Schema.Types.ObjectId,
  patterns = require('./../validations/patterns');

module.exports = new Schema({
    username : {type: String, required: true, unique: true, match: patterns.username},
    password : {type: String, required: true, match: patterns.password,},
    email    : {type: String, required: true, match: patterns.email},
    companies: [{type: objectId, ref: 'Company', required: true}]
});