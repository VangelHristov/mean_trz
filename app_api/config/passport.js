'use strict';

const
  passport          = require('passport'),
  LocalStrategy     = require('passport-local').Strategy,
  usersDbConnection = require('../models/db'),
  User              = usersDbConnection.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, (username, password, done) => {
    User.findOne({email: username}, (error, user) => {
        if (error) {
            return done(error);
        }
        if (!user) {
            return done(null, false, {message: 'Incorrect username'});
        }
        if (!user.validPassword(password)) {
            return done(null, false, {message: 'Invalid password'});
        }

        return done(null, user);
    });
}));