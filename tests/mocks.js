'use strict';

const sinon = require('sinon');

let statusStub, jsonStub, response, next, request, dbDocument, validationError,
	dbCreate, objectId, nonExistingId, querySelect, queryPopulate,
	queryExec, dbFindById, dbQuery, dbSave, dbModel;

const init = function () {
	jsonStub = sinon.stub();
	jsonStub.returnsArg(0);

	statusStub = sinon.stub();
	statusStub.returns({json: jsonStub});

	response = {status: statusStub, json: jsonStub};

	next = sinon.spy();

	request = {body: {}, params: {}};

	dbDocument = {
		users        : {push: sinon.spy()},
		companies    : {push: sinon.spy()},
		dossiers     : {push: sinon.spy()},
		workContracts: {push: sinon.spy()}
	};

	validationError = {name: 'ValidationError'};

	dbCreate = sinon.stub();
	dbCreate.withArgs(dbDocument)
	        .resolves(dbDocument);
	dbCreate.throws(validationError);

	objectId = '123456789';
	nonExistingId = '987654321';

	querySelect = sinon.spy();

	queryPopulate = sinon.spy();

	queryExec = sinon.stub();
	queryExec.resolves(dbDocument);

	dbQuery = {
		select  : querySelect,
		populate: queryPopulate,
		exec    : queryExec
	};

	dbFindById = sinon.stub();
	dbFindById.withArgs(objectId)
	          .returns(dbQuery);
	dbFindById.returns(null);

	dbModel = {
		findById: dbFindById,
		create  : dbCreate
	};

	dbSave = sinon.stub();
	dbSave.withArgs(dbDocument)
	      .resolves(dbDocument);
	dbSave.throws(validationError);

	dbDocument.save = dbSave;

	return {
		response,
		request,
		next,
		objectId,
		nonExistingId,
		dbDocument,
		dbCreate,
		dbFindById,
		dbSave,
		validationError,
		querySelect,
		queryPopulate,
		queryExec,
		dbQuery,
		dbModel,
		reset: function () {
			request.body = {};
			request.params = {};

			statusStub.resetHistory();
			jsonStub.resetHistory();
			dbCreate.resetHistory();
			queryExec.resetHistory();
			dbFindById.resetHistory();
			dbSave.resetHistory();

			next.reset();
			querySelect.reset();
			queryPopulate.reset();
			dbDocument.users.push.reset();
			dbDocument.companies.push.reset();
			dbDocument.dossiers.push.reset();
			dbDocument.workContracts.push.reset();
		}
	};
};

module.exports = init();