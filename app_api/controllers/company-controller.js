'use strict';

const ControllerFactory = require('./controller-factory');

module.exports = function getController(db){
	return ControllerFactory(
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
};