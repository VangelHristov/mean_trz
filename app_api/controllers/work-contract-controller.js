'use strict';

const
	db = require('../models/db'),
	ControllerFactory = require('./controller-factory');

module.exports = ControllerFactory(
	{
		Model                  : db.model('WorkContract'),
		ParentModel            : db.model('Dossier'),
		parentModelName        : 'dossier',
		parentRefCollectionName: 'workContracts'
	}
);
