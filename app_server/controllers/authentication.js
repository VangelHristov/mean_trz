'use strict';

const User     = require('../../app_api/models/db').model('User'),
      passport = require('passport'),
      sendJson = require('../../app_api/controllers/common/send-json');

function authenticate(req, res, done) {
    if (!req.body.email || !req.body.password) {
        sendJson(res, 400, {message: 'Email and password are required'});
        return;
    }

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return done(err);
        }

        if (user) {
            res.body = {_id:user._id, token:user.generateJwt()};
            res.redirect('/companies');
            //sendJson(res, 200, {_id: user._id, token: user.generateJwt()});
        } else {
            sendJson(res, 401, info);
        }
    })(req, res);
}

function register(req, res) {
    if (!req.body.email || !req.body.password) {
        sendJson(res, 400, {message: 'Email and password are required'});
        return;
    }

    let user   = new User();
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user.save((error) => {
        if (error) {
            sendJson(res, 400, error);
            return;
        }

        sendJson(res, 201, {_id: user._id, token: user.generateJwt()});
    });
}

module.exports = {authenticate, register};