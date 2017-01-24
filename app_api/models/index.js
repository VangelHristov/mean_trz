'use strict';

const
  userSchema            = require('./user/user'),
  companySchema         = require('./company/company'),
  companyInfoSchema     = require('./company/info'),
  companySettingsSchema = require('./company/settings'),
  dossierSchema         = require('./dossier/dossier'),
  workContractSchema    = require('./dossier/work-contaract'),
  civilContractSchema   = require('./dossier/civil-contract'),
  vacationSchema        = require('./dossier/vacation'),
  sickLeaveSchema       = require('./dossier/sick-leave'),
  payStubSchema         = require('./dossier/pay-stub');

module.exports = (dbConnection) => {
    dbConnection.model('WorkContract', workContractSchema);
    dbConnection.model('CivilContract', civilContractSchema);
    dbConnection.model('Vacation', vacationSchema);
    dbConnection.model('SickLeave', sickLeaveSchema);
    dbConnection.model('PayStub', payStubSchema);
    dbConnection.model('Dossier', dossierSchema);
    dbConnection.model('CompanyInfo', companyInfoSchema);
    dbConnection.model('CompanySettings', companySettingsSchema);
    dbConnection.model('Company', companySchema);
    dbConnection.model('User', userSchema);
};