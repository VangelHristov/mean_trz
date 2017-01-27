'use strict';

const
  appRouter      = require('express').Router(),
  ctrlApp        = require('../controllers/app'),
  ctrlStatic     = require('../controllers/static'),
  authentication = require('../controllers/authentication');

appRouter.get('/companies', ctrlApp.companies);
appRouter.get('/company', ctrlApp.company);
appRouter.get('/profile', ctrlApp.profile);
appRouter.get('/dossier', ctrlApp.dossier);
appRouter.get('/', ctrlStatic.about);
appRouter.get('/login', ctrlStatic.login);
appRouter.post('/login', authentication.authenticate);
appRouter.get('/register', ctrlStatic.register);
appRouter.post('/register', authentication.register);
appRouter.get('/forgotten-password', ctrlStatic.forgottenPassword);

module.exports = appRouter;