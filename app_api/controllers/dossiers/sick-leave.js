'use strict';

module.exports = {
    model   : 'SickLeave',
    required: [
        'owner',
        'series',
        'continuation',
        'type',
        'number',
        'from',
        'to',
        'presentedAt',
        'decreeDate',
        'diagnosis',
        'hasMinInsurableExperience'
    ],
    owner   : {
        name      : 'Dossier',
        collection: 'sickLeaves'
    }
};
