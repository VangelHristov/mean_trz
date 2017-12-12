'use strict';

const
	passport = require('passport'),
	{Strategy} = require('passport-local'),
	db = require('./app_api/models/db');

const User = db.model('User');

passport.use(new Strategy(
	{usernameField: 'email'},
	(username, password, done) => {
		User.findOne({email: username}, (error, user) => {
			if (error) {
				return done(error);
			}

			if (!user) {
				return done(null, false, 'Грешно име или парола');
			}

			if (!user.validPassword(password)) {
				return done(null, false, 'Грешно име или парола');
			}

			return done(null, user);
		});
	}
));
