'use strict';

const ControllerFactory = require('./controller-factory');

module.exports = function getController(db) {
	return ControllerFactory(
		{
			Model                  : db.model('Dossier'),
			populate               : {
				path: 'workContracts'
			},
			ParentModel            : db.model('Company'),
			parentModelName        : 'company',
			parentRefCollectionName: 'dossiers'
		}
	);
};