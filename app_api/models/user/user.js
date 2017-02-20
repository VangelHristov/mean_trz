'use strict';

const
  mongoose       = require('mongoose'),
  Schema         = mongoose.Schema,
  objectId       = mongoose.Schema.Types.ObjectId,
  patterns       = require('./../validations/patterns'),
  crypto         = require('crypto'),
  jwt            = require('jsonwebtoken'),
  beautifyUnique = require('mongoose-beautiful-unique-validation'),

  userSchema     = new Schema({
      hash     : String,
      salt     : String,
      email    : {
          type    : String,
          required: [true, 'No email'],
          match   : [patterns.email, 'Invalid email'],
          unique  : 'Email not unique'
      },
      companies: [{type: objectId, ref: 'Company'}],
      firstName: String,
      lastName : String
  });

userSchema.plugin(beautifyUnique);

userSchema.methods.setPassword = function (password) {
    password  = password.toString();
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return hash === this.hash;
};

userSchema.methods.generateJwt = function () {
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        exp: parseInt(expiry.getTime() / 1000)
    }, process.env.JWT_SECRET);
};

module.exports = userSchema;
