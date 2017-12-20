'use strict';

const {assert} = require('chai');
const controllerFactory = require('../../app_api/controllers/controller-factory');
const mock = require('../mocks');

const parentModelName = 'user';
const parentRefCollectionName = 'companies';
const populateOption = {
	path  : 'dossiers',
	select: '_id names id'
};

let controller = controllerFactory({
	Model                  : mock.dbModel,
	populate               : populateOption,
	ParentModel            : mock.dbModel,
	parentModelName        : parentModelName,
	parentRefCollectionName: parentRefCollectionName
});

afterEach(mock.reset);

suite('controller-factory.js');

test('getById creates correct database query', (done) => {
	mock.request.params.id = mock.objectId;

	controller
		.getById(mock.request, mock.response, mock.next)
		.then(() => {
			assert.isTrue(mock.dbFindById.calledWithExactly(mock.objectId));
			assert.isTrue(mock.queryPopulate.calledWithExactly(populateOption));
			assert.isTrue(mock.queryExec.calledOnce);
			done();
		});
});

test('getById calls response.json with database result', (done) => {
	mock.request.params.id = mock.objectId;

	controller
		.getById(mock.request, mock.response, mock.next)
		.then(() => {
			assert.isTrue(mock.response.json.calledWithExactly(mock.dbDocument));
			done();
		});
});


