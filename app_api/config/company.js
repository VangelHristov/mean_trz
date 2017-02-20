'use strict';

module.exports = {
    required : ['user', 'companyInfo', 'director'],
    populate : {
        path  : 'dossiers',
        select: '_id personalInfo.names personalInfo.id'
    },
    immutable: ['user']
};