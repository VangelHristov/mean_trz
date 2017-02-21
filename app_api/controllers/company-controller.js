'use strict';

const
  util = require('./util'),
  db = require('../models/db'),
  Company = db.model('Company'),
  User = db.model('User'),
  config = require('../config/company');

module.exports = {
    getById   : (req, res) => {
        util
          .find(Company, req.body.id, config.populate)
          .then(company => util.sendSuccess(res, company))
          .catch(error => util.sendError(res, error));
    },
    updateById: (req, res) => {
        util
          .update(Company, req.body.data, req.body.id, config.required, config.immutable)
          .then(company => util.save(company, config.required))
          .then(result => util.sendSuccess(res, result))
          .catch(error => util.sendErroe(res, error));
    },
    createNew : (req, res) => {
        let companyId = '';

        util
          .create(Company, req.body.data, config.required)
          .then(company => {
              companyId = company._id;
              util.find(User, companyId);
          })
          .then(user => {
              user.companies.unshift(companyId);
              return Promise.resolve(user);
          })
          .then(user => util.save(user))
          .then(() => util.sendCreated(res))
          .catch(error => util.sendError(res, error));
    }
};