'use strict';

const
  dbConnection = require('../models/db'),
  User = dbConnection.model('User'),
  Company = dbConnection.model('Company');

module.exports = {
    Model                  : Company,
    ParentModel            : User,
    parentRefCollectionName: 'companies',
    parentModelName        : 'user',
    required               : [
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
    populate               : {
        path  : 'dossiers',
        select: '_id names id'
    }
};