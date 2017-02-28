'use strict';

const
  dbConnection = require('../models/db'),
  Dossier = dbConnection.model('Dossier'),
  Company = dbConnection.model('Company');

module.exports = {
    Model                  : Dossier,
    required               : [
        'company',
        'names.first',
        'names.last',
        'address.street',
        'address.city',
        'address.postalCode',
        'address.country'
    ],
    ParentModel            : Company,
    parentModelName        : 'company',
    parentRefCollectionName: 'dossiers'
};