'use strict';

const
	{Schema} = require('mongoose'),
	minWage = require('./../validations/constraints').minWage,
	patterns = require('./../validations/patterns'),
	validateDates = require('./../validations/validate-contract-dates'),
	reasonForContract = require('../validations/enums').reasonForContract,
	errorMessages = require('../validations/error-messages');

const objectId = Schema.Types.ObjectId;

const workContractSchema = new Schema({
	dossier                  : {
		type    : objectId,
		ref     : 'Dossier',
		required: [true, errorMessages.missingDossierId]
	},
	typeInsured              : {
		type    : String,
		required: [true, errorMessages.missingTypeInsured],
		match   : [patterns.typeInsured, errorMessages.invalidTypeInsured]
	},
	reasonForContract        : {
		type    : String,
		required: [true, errorMessages.missingReasonForContract],
		enum    : reasonForContract
	},
	contractNumber           : {
		type    : String,
		required: [true, errorMessages.missingContractNumber]
	},
	signingDate              : {
		type    : Date,
		required: [true, errorMessages.missingSigningDate]
	},
	startingDate             : {
		type    : Date,
		required: [true, errorMessages.missingStartingDate]
	},
	principalSalary          : {
		type    : Number,
		required: [true, errorMessages.missingSalary],
		min     : [minWage, errorMessages.salaryAmountBelowMinimum]
	},
	contractLengthInMonths   : {
		type: Number,
		min : [1, errorMessages.invalidContractLength]
	},
	workHours                : {
		type: Number,
		min : [1, errorMessages.invalidWorkHours],
		max : [8, errorMessages.invalidWorkHours]
	},
	occupationCode           : {
		type    : String,
		required: [true, errorMessages.missingOccupationCode],
		match   : [patterns.occupationCode, errorMessages.invalidOccupationCode]
	},
	codeEconomicActivity     : {
		type    : String,
		required: [true, errorMessages.missingCodeEconomicActivity],
		match   : [
			patterns.codeEconomicActivity,
			errorMessages.invalidCodeEconomicActivity
		]
	},
	leaveNoticeLengthInDays  : {
		type: Number,
		min : [0, errorMessages.invalidLEaveNoticeLength]
	},
	payedVacationLengthInDays: {
		type    : Number,
		required: [true, errorMessages.missingVacationLength],
		min     : [20, errorMessages.invalidVacationLength]
	},
	experience               : {
		total     : {
			type    : Number,
			min     : [0, errorMessages.invalidTotalExperience],
			required: [true, errorMessages.missingTotalExperience]
		},
		speciality: {
			type    : Number,
			min     : [0, errorMessages.invalidSpecialityExperience],
			required: [true, errorMessages.missingSpecialityExperience]
		},
		insurable : {
			type    : Number,
			min     : [0, errorMessages.invalidInsurableExperience],
			required: [true, errorMessages.missingInsurableExperience]
		}
	},
	terminationDate          : {type: Date},
	lastDayInsured           : {type: Date}
});

workContractSchema.pre('save', validateDates);

module.exports = workContractSchema;