let
    usersURI  = 'mongodb://localhost:27017/users',
    mongoose  = require('mongoose'),
    addModels = require('./index'),
    usersDbConnection;

// In production use mongolab, in development use localhost
if (process.env.NODE_ENV === 'production') {
    usersURI = process.env.MONGOLAB_URI;
}

usersDbConnection = mongoose.createConnection(usersURI);
addModels(usersDbConnection);

function shutDown(msg, callback) {
    usersDbConnection.close(function () {
        console.log(`Mongoose disconnected through: ${msg}`);
        callback();
    });
}

// Log on the console for each event
usersDbConnection.on('connected', function () {
    console.log(`Mongoose connected to ${usersURI}`);
});

usersDbConnection.on('error', function (error) {
    console.log(`Mongoose error: ${error}`);
});

usersDbConnection.on('disconnected', function () {
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

module.exports = usersDbConnection;