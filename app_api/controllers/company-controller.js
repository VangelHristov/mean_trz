'use strict';

const
  ctrl = require('./controller'),
  db = require('../models/db'),
  Company = db.model('Company'),
  User = db.model('User'),
  config = require('../config/company');

module.exports = {
    getById   : (req, res) => {
        ctrl
          .find(Company, req.body.id, config.populate)
          .then(company => ctrl.sendSuccess(res, company))
          .catch(error => ctrl.sendError(res, error));
    },
    updateById: (req, res) => {
        ctrl
          .update(Company, req.body.data, req.body.id, config.required, config.immutable)
          .then(company => ctrl.save(company))
          .then(result => ctrl.sendSuccess(res, result))
          .catch(error => ctrl.sendErroe(res, error));
    },
    createNew : (req, res) => {
        let companyId = '';

        ctrl
          .create(Company, req.body.data, config.required)
          .then(company => {
              companyId = company._id;
              ctrl.find(User, companyId);
          })
          .then(user => {
              user.companies.unshift(companyId);
              return Promise.resolve(user);
          })
          .then(user => ctrl.save(user))
          .then(() => ctrl.sendCreated(res))
          .catch(error => ctrl.sendError(res, error));
    }
};