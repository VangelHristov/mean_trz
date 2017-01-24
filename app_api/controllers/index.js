'use strict';

const
  controller      = require('./common/controller'),
  user            = require('./users/user'),
  company         = require('./companies/company'),
  dossier         = require('./dossiers/dossiers'),
  workContract    = require('./dossiers/work-contracts');

module.exports = {
    user           : controller(user),
    company        : controller(company),
    dossier        : controller(dossier),
    workContract   : controller(workContract)
};