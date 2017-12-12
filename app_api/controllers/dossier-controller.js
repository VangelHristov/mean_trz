'use strict';

const
	ControllerFactory = require('./controller-factory'),
	db = require('../models/db');

const
	Dossier = db.model('Dossier'),
	Company = db.model('Company');

module.exports = ControllerFactory(
	{
		Model                  : Dossier,
		populate               : {
			path: 'workContracts'
		},
		ParentModel            : Company,
		parentModelName        : 'company',
		parentRefCollectionName: 'dossiers'
	}
);