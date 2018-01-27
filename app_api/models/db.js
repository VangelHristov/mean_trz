/* eslint-disable no-console */
'use strict';

require('dotenv').config();

const
	userSchema = require('./user/user'),
	companySchema = require('./company/company'),
	dossierSchema = require('./dossier/dossier'),
	workContractSchema = require('./dossier/work-contaract'),
	mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const
	dbURI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/users',
	db = mongoose.createConnection(dbURI,{promiseLibrary: global.Promise});

db.model('WorkContract', workContractSchema);
db.model('Dossier', dossierSchema);
db.model('Company', companySchema);
db.model('User', userSchema);

function shutDown(msg, callback) {
	db.close(function close() {
		console.log(`Mongoose disconnected through: ${msg}`);
		callback();
	});
}

// Log on the console for each event
db.on(
	'connected',
	() => console.log(`Mongoose connected to ${dbURI}`)
);

db.on(
	'error',
	error => console.log(`Mongoose error: ${error}`)
);

db.on(
	'disconnected',
	() => console.log('Mongoose disconnected')
);

// For nodemon restarts
process.once(
	'SIGUSR2',
	() => shutDown(
		'nodemon restart',
		() => process.kill(process.pid, 'SIGUSR2')
	)
);

// For app termination
process.on(
	'SIGINT',
	() => shutDown(
		'app termination',
		() => process.exit(0)
	)
);

// For Heroku app termination
process.on(
	'SIGTERM',
	() => shutDown(
		'Heroku app termination',
		() => process.exit(0)
	)
);

module.exports = db;