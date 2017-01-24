'use strict';

const User = require('../../app_api/models/db').model('User');

function authenticate(email, password, done) {
    User.findOne({email: email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'Incorrect username.'});
        }
        if (user.password !== password) {
            return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, user);
    });
}

function register(email, password, done) {
    User.create({email, password}, (err) => {
        if (err) {
            return done(err);
        }

        done();
    });
}

module.exports = {authenticate, register};