'use strict';

const {assert} = require('chai');
const controllerFactory = require('../../app_api/controllers/controller-factory');
const mocks = require('../mocks');

const parentModelName = 'user';
const parentRefCollectionName = 'companies';
const populateOption = {
	path  : 'dossiers',
	select: '_id names id'
};

let mock, ctrl;

beforeEach(() => {
	mock = mocks.get();
	ctrl = controllerFactory({
		Model                  : mock.dbModel,
		populate               : populateOption,
		ParentModel            : mock.dbModel,
		parentModelName        : parentModelName,
		parentRefCollectionName: parentRefCollectionName
	});
});

afterEach(mocks.reset);

suite('controller-factory.js');

test('getById returns the document when it is in the database', () => {
	let request = {params: {id: mock.objectId}};

	ctrl.getById(request, mock.res, mock.next);

	assert.isTrue(mock.dbFindById.calledWithExactly(mock.objectId));
	assert.isTrue(mock.queryPopulate.calledWithExactly(populateOption));
	assert.isTrue(mock.queryExec.calledOnce);
	//mock.queryExec().then(result=>{
	//	console.log(result === mock.dbDocument);
	//});
	//console.log(mock.response.json);
	//assert.isTrue(mock.json.called);
	assert.isTrue(mock.next.notCalled)
});

