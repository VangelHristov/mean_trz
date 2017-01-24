'use strict';

module.exports = {
    model   : 'PayStub',
    owner   : {
        name      : 'Dossier',
        collection: 'payStubs'
    },
    required: ['owner', 'rows']
};