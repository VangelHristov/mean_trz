'use strict';

const
  util = require('./util'),
  config = require('../config/user'),
  User = require('../models/db').model('User'),

  userController = {
      register: (req, res) => {
          util
            .create(User, {email: req.body.email}, config.required)
            .then(user => {
                user.setPassword(req.body.password);
                return Promise.resolve(user);
            })
            .then(user => util.save(user, config.required))
            .then(() => util.sendCreated(res))
            .catch(err => util.sendError(res, err));
      },

      auth: (req, res) => {
          User.findOne({email: req.body.email}, (err, user) => {
              if (err) {
                  return util.sendError(res, err);
              }
              if (!user) {
                  return util.sendError(res, {message: 'Invalid username or password.'});
              }
              if (!user.validPassword(req.body.password)) {
                  return util.sendError(res, {message: 'Invalid username or password'});
              }

              util.sendSuccess(res, {data: user.generateJwt()});
          });
      },

      getById: (req, res) => {
          util
            .find(User, req.params.id, config.populate, config.select)
            .then(doc => util.sendSuccess(res, doc))
            .catch((err) => util.sendError(res, err));
      },

      updateById: (req, res) => {
          util
            .update(User, req.body, req.params.id, config.required)
            .then(() => util.sendSuccess(res))
            .catch(error => util.sendError(res, error));
      }
  };

module.exports = userController;
