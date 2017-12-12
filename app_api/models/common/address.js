'use strict';

const
	{Schema} = require('mongoose'),
	pattern = require('./../validations/patterns'),
	msg = require('../validations/error-messages');

module.exports = new Schema(
	{
		street    : {
			type    : String,
			required: true,
			match   : [pattern.cyrillic, msg.nonCyrillic]
		},
		city      : {
			type    : String,
			required: true,
			match   : [pattern.cyrillic, msg.nonCyrillic]
		},
		postalCode: {
			type: String,
			required: true,
			match: [pattern.postalCode, msg.postalCode]
		},
		country   : {
			type    : String,
			required: true,
			match   : [pattern.cyrillic, msg.nonCyrillic]
		}
	},
	{
		_id: false
	}
);