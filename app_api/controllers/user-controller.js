'use strict';

const util = require('./util');

module.exports = function getController(db){
	const User = db.model('User');

	const authError = {
		message: 'Невалидно име или парола.',
		status : 400
	};

	const userController = {
		register: function (req, res, next) {
			return util
				.create(User, {email: req.body.email})
				.then(user => {
					user.setPassword(req.body.password);
					return util.save(user);
				})
				.then(user => {
					return res.json({data: user.generateJwt()});
				})
				.catch(err => next(err));
		},

		auth: (req, res, next) => {
			return User
				.findOne({email: req.body.email})
				.then(user => {
					return user && user.validPassword(req.body.password)
						? res.json({data: user.generateJwt()})
						: next(authError);
				})
				.catch(err => next(err));
		},

		getById: (req, res, next) => {
			let populate = {
				path  : 'companies',
				select: 'name bulstat director _id'
			};
			let select = '_id companies';
			return util
				.find(User, req.user._id, populate, select)
				.then(doc => res.json(doc))
				.catch(err => next(err));
		},

		updateById: (req, res, next) => {
			return util
				.update(User, req.body, req.user._id)
				.then(user => res.json({_id: user._id, email: user.email}))
				.catch(err => next(err));
		}
	};

	return userController;
};
