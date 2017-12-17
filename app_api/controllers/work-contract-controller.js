'use strict';

const ControllerFactory = require('./controller-factory');

module.exports = function getController(db) {
	return ControllerFactory(
		{
			Model                  : db.model('WorkContract'),
			ParentModel            : db.model('Dossier'),
			parentModelName        : 'dossier',
			parentRefCollectionName: 'workContracts'
		}
	);
};
