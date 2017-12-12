'use strict';

const {Router} = require('express');
const jwt = require('express-jwt');

const apiRouter = Router();
const authentication = jwt({
	secret      : process.env.JWT_SECRET,
	userProperty: 'payload'
});

const userCtrl = require('../controllers/user-controller');
apiRouter.post('/register', userCtrl.register);
apiRouter.put('/auth', userCtrl.auth);
apiRouter.get('/users/:id', authentication, userCtrl.getById);
apiRouter.put('/users/:id', authentication, userCtrl.updateById);

const companyCtrl = require('../controllers/company-controller');
apiRouter.post('/companies', authentication, companyCtrl.createNew);
apiRouter.get('/companies/:id', authentication, companyCtrl.getById);
apiRouter.put('/companies/:id', authentication, companyCtrl.updateById);

const dossierCtrl = require('../controllers/dossier-controller');
apiRouter.post('/dossiers', authentication, dossierCtrl.createNew);
apiRouter.get('/dossiers/:id', authentication, dossierCtrl.getById);
apiRouter.put('/dossiers/:id', authentication, dossierCtrl.updateById);

const workContractCtrl = require('../controllers/work-contract-controller');
apiRouter.post('/work-contracts', authentication, workContractCtrl.createNew);
apiRouter.get('/work-contracts/:id', authentication, workContractCtrl.getById);
apiRouter.put(
	'/work-contracts/:id',
	authentication,
	workContractCtrl.updateById
);

apiRouter.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		return res
			.status(401)
			.json(err.message);

	}

	if (err.name === 'ValidationError') {
		let invalidFields = Object.keys(err.errors);
		let errMsg = [];

		invalidFields
			.forEach(e => errMsg.push(err.errors[e].message));

		return res
			.status(400)
			.json(errMsg);
	}

	return next(err);
});

module.exports = apiRouter;
