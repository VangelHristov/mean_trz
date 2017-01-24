'use strict';

module.exports = {
    model   : 'Dossier',
    required: ['owner', 'personalInfo'],
    owner   : {
        name      : 'Company',
        collection: 'dossiers'
    }
};