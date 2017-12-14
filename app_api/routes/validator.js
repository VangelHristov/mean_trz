'use strict';

const {body, param} = require('express-validator/check');
const {sanitizeBody, sanitizeParam} = require('express-validator/filter');
const patterns = require('../models/validations/patterns');

let validateUser = [
	sanitizeBody(['email', 'password'])
		.trim(),

	body('email')
		.isEmail(),

	body('password')
		.matches(patterns.password)
];

let validateObjectId = [
	sanitizeParam('id')
		.trim(),
	param('id')
		.isHexadecimal()
		.isLength({min: 24, max: 24})

];

module.exports = {
	validateUser,
	validateObjectId
};