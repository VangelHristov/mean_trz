'use strict';

const lodash = require('lodash');

const find = function (model, id, populateOptions, selectOptions) {
	let query = model.findById(id);

	if (populateOptions) {
		query.populate(populateOptions);
	}

	if (selectOptions) {
		query.select(selectOptions);
	}

	return query
		.exec()
		.then(doc => Promise.resolve(doc))
		.catch(err => Promise.reject(err));
};

const save = function (doc) {
	return doc
		.save()
		.then(doc => Promise.resolve(doc))
		.catch(err => Promise.reject(err));
};

const create = function (model, data) {
	return model
		.create(data)
		.then(doc => Promise.resolve(doc))
		.catch(err => Promise.reject(err));
};

const update = function (model, data, id) {
	return model
		.findById(id)
		.then(doc => {
			if (!doc) {
				return Promise.reject();
			}

			lodash.merge(doc, data);
			return Promise.resolve(doc);
		})
		.catch(err => Promise.reject(err));
};

module.exports = {
	update,
	create,
	save,
	find
};