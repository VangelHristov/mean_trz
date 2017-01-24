'use strict';

const
  mongoose       = require('mongoose'),
  Schema         = mongoose.Schema,
  objectId       = mongoose.Schema.Types.ObjectId,
  patterns       = require('./../validations/patterns');

module.exports = new Schema({
    username : {
        type    : String,
        required: [true, 'Username is required'],
        unique  : [true, 'Username is not unique'],
        match: [patterns.username, 'Username is invalid']
    },
    password : {
        type    : String,
        required: [true, 'Password is required'],
        match   : [patterns.password, 'Password is invalid'],
    },
    email    : {
        type    : String,
        required: true,
        match   : patterns.email
    },
    companies: [{type: objectId, ref: 'Company', required: true}]
});