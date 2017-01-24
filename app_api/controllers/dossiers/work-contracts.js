'use strict';

module.exports = {
    model   : 'WorkContract',
    required: [
        'owner',
        'typeInsured',
        'contractNumber',
        'signingDate',
        'startingDate',
        'principalSalary',
        'occupationNKPD',
        'kid',
        'payedVacationLength',
        'experience'
    ],
    owner   : {
        name      : 'Dossier',
        collection: 'workContracts'
    }
};