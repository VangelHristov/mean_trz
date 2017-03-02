'use strict';

const
  dbConnection = require('../models/db'),
  Dossier = dbConnection.model('Dossier'),
  WorkContract = dbConnection.model('WorkContract');

module.exports = {
    Model                  : WorkContract,
    ParentModel            : Dossier,
    parentModelName        : 'dossier',
    parentRefCollectionName: 'workContracts',
    required               : [
        'dossier',
        'typeInsured',
        'contractNumber',
        'signingDate',
        'startingDate',
        'principalSalary',
        'occupationCode',
        'codeEconomicActivity',
        'payedVacationLengthInDays',
        'experience'
    ]
};