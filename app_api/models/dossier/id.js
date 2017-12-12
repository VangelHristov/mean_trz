'use strict';

const
	patterns = require('../validations/patterns'),
	isValidEGN = require('../validations/egn'),
	isValidLNCH = require('../validations/lnch'),
	enums = require('../validations/enums'),
	errorMessages = require('../validations/error-messages');

const {Schema} = require('mongoose');

const bulgarianSchema = new Schema({
	egn         : {
		type    : String,
		validate: {validator: isValidEGN, message: errorMessages.invalidEgn}
	},
	idCardNumber: {
		type : String,
		match: [
			patterns.bulgarianIdCardNumber,
			errorMessages.invalidIdCardNumber
		]
	}
});

const foreignSchema = new Schema({
	lnch        : {
		type    : String,
		validate: {
			validator: isValidLNCH,
			message  : errorMessages.invalidLnch
		}
	},
	sex         : {type: String, enum: enums.sex},
	dob         : {type: Date},
	idCardNumber: {
		type : String,
		match: [
			patterns.foreignIdCardNumber,
			errorMessages.invalidIdCardNumber
		]
	}
});

module.exports = new Schema(
	{
		bulgarian: bulgarianSchema,
		foreign  : foreignSchema
	},
	{
		_id: false
	}
);