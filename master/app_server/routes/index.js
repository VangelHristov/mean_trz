'use strict';

const
    appRouter = require('express').Router(),
    ctrlApp    = require('../controllers/app'),
    ctrlStatic = require('../controllers/static');

appRouter.get('/companies', ctrlApp.companies);
appRouter.get('/company', ctrlApp.company);
appRouter.get('/profile', ctrlApp.profile);
appRouter.get('/dossier', ctrlApp.dossier);
appRouter.get('/', ctrlStatic.about);
appRouter.get('/login', ctrlStatic.login);
appRouter.get('/register', ctrlStatic.register);
appRouter.get('/forgotten-password', ctrlStatic.forgottenPassword);


// catch 404 and forward to error handler
appRouter.use(function (error, req, res, next) {
    if(!error){
        return next();
    }

    res.status(404);
    res.json({message: 'Not found'});
});

module.exports = appRouter;