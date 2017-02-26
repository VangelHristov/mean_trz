'use strict';

module.exports = {
    required : [
        'user',
        'bulstat',
        'director',
        'name',
        'address.street',
        'address.postalCode',
        'address.country',
        'address.city',
        'pkpv',
        'mainEconomicActivity'
    ],
    populate : {
        path  : 'dossiers',
        select: '_id personalInfo.names personalInfo.id'
    }
};