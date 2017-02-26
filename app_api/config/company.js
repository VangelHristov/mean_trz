'use strict';

module.exports = {
    required : ['user', 'bulstat', 'director', 'name', 'address', 'pkpv', 'mainEconomicActivity'],
    populate : {
        path  : 'dossiers',
        select: '_id personalInfo.names personalInfo.id'
    },
    immutable: ['user', 'dossiers']
};