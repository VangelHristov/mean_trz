/* eslint-disable no-sync */
'use strict';

require('dotenv').config();

const
	mongoose = require('mongoose'),
	patterns = require('./../validations/patterns'),
	crypto = require('crypto'),
	jwt = require('jsonwebtoken'),
	errorMessages = require('../validations/error-messages');

const
	Schema = mongoose.Schema,
	objectId = Schema.Types.ObjectId;

const userSchema = new Schema({
	hash     : String,
	salt     : String,
	email    : {
		type    : String,
		required: [true, errorMessages.missingEmail],
		match   : [patterns.email, errorMessages.invalidEmail],
		unique  : errorMessages.emailNotUnique
	},
	companies: [{type: objectId, ref: 'Company'}]
});

userSchema.plugin(require('mongoose-beautiful-unique-validation'));

userSchema.methods.setPassword = function setPassword(password) {
	password = password.toString();
	this.salt = crypto
		.randomBytes(16)
		.toString('hex');

	this.hash = crypto
		.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
		.toString('hex');
};

userSchema.methods.validPassword = function validPassword(password) {
	let hash = crypto
		.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
		.toString('hex');

	return hash === this.hash;
};

userSchema.methods.generateJwt = function generateJwt() {
	let expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);

	return jwt.sign(
		{
			_id: this._id,
			exp: expiry.getTime() / 1000
		},
		process.env.JWT_SECRET
	);
};

module.exports = userSchema;
