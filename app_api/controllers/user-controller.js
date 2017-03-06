'use strict';

const
  util = require('./util'),
  config = require('../config/user'),
  User = require('../models/db').model('User'),
  invalidUsernameOrPassword = 'Невалидно име или парола.',

  userController = {
      register: (req, res) => {
          util
            .create(User, {email: req.body.email})
            .then(user => {
                user.setPassword(req.body.password);
                return Promise.resolve(user);
            })
            .then(user => util.save(user))
            .then(() => util.sendCreated(res))
            .catch(err => util.sendError(res, err));
      },

      auth: (req, res) => {
          User.findOne({email: req.body.email}, (err, user) => {
              if (err) {
                  return util.sendError(res, err);
              }
              if (!user) {
                  return util.sendError(res, {message: invalidUsernameOrPassword});
              }
              if (!user.validPassword(req.body.password)) {
                  return util.sendError(res, {message: invalidUsernameOrPassword});
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
            .update(User, req.body, req.params.id)
            .then(() => util.sendSuccess(res))
            .catch(error => util.sendError(res, {message: util.getErrorMessage(error)}));
      }
  };

module.exports = userController;
