'use strict';

const
	{Schema} = require('mongoose'),
	bulstat = require('../validations/bulstat'),
	addressSchema = require('../common/address'),
	pattern = require('../validations/patterns'),
	error = require('../validations/error-messages');

const objectId = Schema.Types.ObjectId;

module.exports = new Schema({
	user                : {type: objectId, ref: 'User', required: true},
	name                : {
		type    : String,
		required: true,
		match   : [pattern.cyrillic, error.nonCyrillic]
	},
	bulstat             : {
		type    : String,
		required: true,
		validate: [bulstat, error.invalidBulstat]
	},
	address             : {type: addressSchema, required: true},
	mainEconomicActivity: {
		type    : String,
		required: true,
		match   : [pattern.cyrillic, error.nonCyrillic]
	},
	pkpv                : {
		type    : Number,
		required: true,
		min     : [0.6, error.invalidPKPV],
		max     : [40, error.invalidPKPV]
	},
	director            : {
		type    : String,
		required: true,
		match   : [pattern.cyrillic, error.nonCyrillic]
	},
	dossiers            : [{type: objectId, ref: 'Dossier'}]
});
