'use strict';

const
  controller      = require('./common/controller'),
  user            = require('./users/user'),
  company         = require('./companies/company'),
  companySettings = require('./companies/settings'),
  dossier         = require('./dossiers/dossiers'),
  civilContract   = require('./dossiers/civil-contracts'),
  payStub         = require('./dossiers/pay-stub'),
  sickLeave       = require('./dossiers/sick-leave'),
  vacation        = require('./dossiers/vacation'),
  workContract    = require('./dossiers/work-contracts');

module.exports = {
    user           : controller(user),
    company        : controller(company),
    companySettings: controller(companySettings),
    dossier        : controller(dossier),
    civilContract  : controller(civilContract),
    workContract   : controller(workContract),
    payStub        : controller(payStub),
    sickLeave      : controller(sickLeave),
    vacation       : controller(vacation)
};