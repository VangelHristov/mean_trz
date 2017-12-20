'use strict';

const util = require('./util');

module.exports = function controllerFactory(config) {
	function getById(req, res, next) {
		return util
			.find(config.Model, req.params.id, config.populate)
			.then(doc => res.json(doc))
			.catch(err => next(err));
	}

	function updateById(req, res, next) {
		return util
			.update(config.Model, req.body, req.params.id)
			.then(doc => util.save(doc))
			.then(doc => res.json(doc))
			.catch(err => next(err));
	}

	function createNew(req, res, next) {
		let docId;
		let document;

		// create a new document form the data in req.body, then
		// find the parent document, then
		// add the newly created document in the parent collection
		return util
			.create(config.Model, req.body)
			.then(doc => {
				docId = doc._id;
				document = doc;

				return util.find(
					config.ParentModel,
					req.body[config.parentModelName]
				);
			})
			.then(parentDoc => {
				parentDoc[config.parentRefCollectionName].push(docId);
				return util.save(parentDoc);
			})
			.then(() => {
				return res.json(document);
			})
			.catch(err => next(err));
	}

	return {
		getById, updateById, createNew
	};
};