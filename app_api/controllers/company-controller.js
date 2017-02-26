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
          .find(Company, req.params.id, config.populate)
          .then(company => util.sendSuccess(res, company))
          .catch(error => util.sendError(res, error));
    },
    updateById: (req, res) => {
        util
          .update(Company, req.body, req.params.id, config.required)
          .then(company => util.save(company, config.required))
          .then(result => util.sendSuccess(res, result))
          .catch(error => util.sendError(res, error));
    },
    createNew : (req, res) => {
        let companyId = '';

        util
          .create(Company, req.body, config.required)
          .then(company => {
              companyId = company._id;

              return new Promise((resolve, reject)=>{
                  util.find(User, company.user)
                    .then(resolve, reject);
              });
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