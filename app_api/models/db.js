'use strict';

const
  dbURI              = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/users',
  mongoose           = require('mongoose'),
  userSchema         = require('./user/user'),
  companySchema      = require('./company/company'),
  dossierSchema      = require('./dossier/dossier'),
  workContractSchema = require('./dossier/work-contaract'),
  dbConnection       = mongoose.createConnection(dbURI);

dbConnection.model('WorkContract', workContractSchema);
dbConnection.model('Dossier', dossierSchema);
dbConnection.model('Company', companySchema);
dbConnection.model('User', userSchema);

function shutDown(msg, callback) {
    dbConnection.close(function () {
        console.log(`Mongoose disconnected through: ${msg}`);
        callback();
    });
}

// Log on the console for each event
dbConnection.on('connected', function () {
    console.log(`Mongoose connected to ${dbURI}`);
});

dbConnection.on('error', function (error) {
    console.log(`Mongoose error: ${error}`);
});

dbConnection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

// For nodemon restarts
process.once('SIGUSR2', function () {
    shutDown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination
process.on('SIGINT', function () {
    shutDown('app termination', function () {
        process.exit(0);
    });
});

// For Heroku app termination
process.on('SIGTERM', function () {
    shutDown('Heroku app termination', function () {
        process.exit(0);
    });
});

module.exports = dbConnection;