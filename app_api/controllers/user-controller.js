'use strict';

const
  controller     = require('./controller'),
  config         = require('../config/user'),
  User           = require('../models/db').model('User'),

  userController = {
      register: (req, res) => {
          controller
            .create(User, {email: req.body.email}, config.required, res)
            .then(user => {
                user.setPassword(req.body.password);
                controller
                  .save(user)
                  .then(result => controller.sendJson(res, 201, result));
            })
            .catch(err => controller.sendJson(res, 400, err));
      },

      getById: (req, res) => {
          controller
            .find(User, req.params.id, config.populate, config.select)
            .then(doc => controller.sendJson(res, 200, doc))
            .catch((err) => controller.sendJson(res, 400, err.message));
      },

      updateById: (req, res) => {
          controller.update(User, req.body, req.params.id, config.immutable, res);
      }
  };

module.exports = userController;
