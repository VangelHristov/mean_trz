'use strict';

module.exports = {
    model: 'Company',
    required:['owner', 'companyInfo', 'director'],
    owner:{
        name: 'User',
        collection:'companies'
    },
    populate:{
        path  : 'dossiers',
        select: '_id personalInfo.names personalInfo.id'
    }
};