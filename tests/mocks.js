'use strict';

const sinon = require('sinon');

let json, res, next, request, usersCollection, companiesCollection,
	dossierCollection, workContractsCollection, dbDocument, validationError,
	dbCreate, objectId, nonExistingId, querySelect, queryPopulate,
	queryExec,
	dbFindById, dbQuery, dbSave, dbModel;

const get = function () {
	json = sinon.spy();
	res = {};
	res.json = json;

	next = sinon.spy();

	request = {body: {}, params: {}};

	usersCollection = sinon.spy();
	companiesCollection = sinon.spy();
	dossierCollection = sinon.spy();
	workContractsCollection = sinon.spy();

	dbDocument = {
		users        : {push: usersCollection},
		companies    : {push: companiesCollection},
		dossiers     : {push: dossierCollection},
		workContracts: {push: workContractsCollection}
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
		res,
		request,
		next,
		json,
		objectId,
		nonExistingId,
		dbDocument,
		usersCollection,
		companiesCollection,
		dossierCollection,
		workContractsCollection,
		dbCreate,
		dbFindById,
		dbSave,
		validationError,
		querySelect,
		queryPopulate,
		queryExec,
		dbQuery,
		dbModel
	};
};

const reset = function () {
	request.body = {};
	request.params = {};

	json.reset();
	next.reset();
	usersCollection.reset();
	companiesCollection.reset();
	dossierCollection.reset();
	workContractsCollection.reset();
	dbCreate.reset();
	querySelect.reset();
	queryPopulate.reset();
	queryExec.reset();
	dbFindById.reset();
	dbSave.reset();
};

module.exports = {get, reset};