'use strict';

module.exports = {
    model:'CivilContract',
    required:[
        'owner',
        'typeInsured',
        'isRetired',
        'contractNumber',
        'period'
    ],
    owner:{
        name:'Dossier',
        collection:'civilContracts'
    }
};
