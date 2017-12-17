'use strict';

const {Router} = require('express');
const jwt = require('express-jwt');
const {validateObjectId, validateUser} = require('./validator');

const apiRouter = Router();
const authenticate = jwt({
	secret      : process.env.JWT_SECRET,
	userProperty: 'user'
});

let db;
if (process.env.NODE_ENV === 'production') {
	db = require('../models/db');
} else {
	db = require('../models/db');
}

const userCtrl = require('../controllers/user-controller')(db);
apiRouter.post('/register', validateUser, userCtrl.register);
apiRouter.put('/auth', validateUser, userCtrl.auth);
apiRouter.get('/users', authenticate, userCtrl.getById);
apiRouter.put('/users', authenticate, userCtrl.updateById);

const companyCtrl = require('../controllers/company-controller')(db);
apiRouter.post('/companies', authenticate, companyCtrl.createNew);
apiRouter.get(
	'/companies/:id',
	[authenticate, validateObjectId],
	companyCtrl.getById
);
apiRouter.put(
	'/companies/:id',
	[authenticate, validateObjectId],
	companyCtrl.updateById
);

const dossierCtrl = require('../controllers/dossier-controller')(db);
apiRouter.post('/dossiers', authenticate, dossierCtrl.createNew);
apiRouter.get(
	'/dossiers/:id',
	[authenticate, validateObjectId],
	dossierCtrl.getById
);
apiRouter.put(
	'/dossiers/:id',
	[authenticate, validateObjectId],
	dossierCtrl.updateById
);

const workContractCtrl = require('../controllers/work-contract-controller')(db);
apiRouter.post('/work-contracts', authenticate, workContractCtrl.createNew);
apiRouter.get(
	'/work-contracts/:id',
	[authenticate, validateObjectId],
	workContractCtrl.getById
);
apiRouter.put(
	'/work-contracts/:id',
	[authenticate, validateObjectId],
	workContractCtrl.updateById
);

apiRouter.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		return res
			.status(401)
			.json('Неоторизиран потребител');

	}

	if (err.name === 'ValidationError') {
		let invalidFields = Object.keys(err.errors);
		let errMsg = [];

		invalidFields
			.forEach(e => errMsg.push(err.errors[e].message));

		return res
			.status(400)
			.json(errMsg.join('\n'));
	}

	return next(err);
});

module.exports = apiRouter;
