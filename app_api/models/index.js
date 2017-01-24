'use strict';

const
  userSchema         = require('./user/user'),
  companySchema      = require('./company/company'),
  dossierSchema      = require('./dossier/dossier'),
  workContractSchema = require('./dossier/work-contaract');

module.exports = (dbConnection) => {
    dbConnection.model('WorkContract', workContractSchema);
    dbConnection.model('Dossier', dossierSchema);
    dbConnection.model('Company', companySchema);
    dbConnection.model('User', userSchema);
};
