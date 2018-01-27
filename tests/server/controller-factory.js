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
	mock.request.params.id = mock.queryId;

	controller
		.getById(mock.request, mock.response, mock.next)
		.then(() => {
			assert.isTrue(mock.dbFindById.calledWithExactly(mock.queryId));
			assert.isTrue(mock.queryPopulate.calledWithExactly(populateOption));
			assert.isTrue(mock.queryExec.calledOnce);
			done();
		});
});

test('getById calls response.json with database result', (done) => {
	mock.request.params.id = mock.queryId;

	controller
		.getById(mock.request, mock.response, mock.next)
		.then(() => {
			assert.isTrue(mock.response.json.calledWithExactly(mock.dbDocument));
			done();
		});
});

test('updateById updates document with provided values', (done) => {
	mock.request.params.id = mock.promiseId;
	mock.request.body.name = 'test';

	assert.strictEqual(mock.dbDocument.name, 'document');

	controller
		.updateById(mock.request, mock.response, mock.next)
		.then(() => {
			assert.strictEqual(mock.dbDocument.name, 'test');
			assert.isTrue(mock.response.json.called);
			done();
		});
});

test('createNew returns newly created document', (done) => {
	mock.request.body = {
		user: mock.queryId,
		name: 'test document'
	};

	controller
		.createNew(mock.request, mock.response, mock.next)
		.then(doc => {
			assert.deepEqual(doc, mock.dbDocument);
			assert.isTrue(mock.next.notCalled);
			done();
		});
});