'use strict';

module.exports = {
    model   : 'Vacation',
    required: [
        'owner',
        'type',
        'from',
        'to',
        'decreeDate'
    ],
    owner   : {
        name      : 'Dossier',
        collection: 'vacations'
    }
};
