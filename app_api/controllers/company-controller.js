'use strict';

const db = require('../models/db'),
	ControllerFactory = require('./controller-factory');

module.exports = ControllerFactory(
	{
		Model                  : db.model('Company'),
		ParentModel            : db.model('User'),
		parentRefCollectionName: 'companies',
		parentModelName        : 'user',
		populate               : {
			path  : 'dossiers',
			select: '_id names id'
		}
	}
);