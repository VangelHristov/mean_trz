'use strict';

const
  ctrl = require('./controller'),
  config = require('../config/user'),
  User = require('../models/db').model('User'),

  userController = {
      register: (req, res) => {
          ctrl
            .create(User, {email: req.body.email}, config.required)
            .then(user => {
                user.setPassword(req.body.password);
                return Promise.resolve(user);
            })
            .then(user => ctrl.save(user, config.required))
            .then(() => ctrl.sendCreated(res))
            .catch(err => ctrl.sendError(res, err));
      },

      auth: (req, res) => {
          User.findOne({email: req.body.email}, (err, user) => {
              if (err) {
                  return ctrl.sendError(res, err);
              }
              if (!user) {
                  return ctrl.sendError(res, {message: 'Invalid username or password.'});
              }
              if (!user.validPassword(req.body.password)) {
                  return ctrl.sendError(res, {message: 'Invalid username or password'});
              }

              ctrl.sendSuccess(res, user.generateJwt());
          });
      },

      getById: (req, res) => {
          ctrl
            .find(User, req.params.id, config.populate, config.select)
            .then(doc => ctrl.sendSuccess(res, doc))
            .catch((err) => ctrl.sendError(res, err));
      },

      updateById: (req, res) => {
          ctrl
            .update(User, req.body, req.params.id, config.required, config.immutable)
            .then(() => ctrl.sendSuccess(res))
            .catch(error => ctrl.sendError(res, error));
      }
  };

module.exports = userController;
