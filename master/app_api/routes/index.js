'use strict';

const apiRouter = require('express').Router();

require('./users')(apiRouter);
require('./companies')(apiRouter);
require('./dossiers')(apiRouter);

apiRouter.use(function (error, req, res, next) {
    if (!error) {
        return next();
    }
    res.status(404);
    res.json({message: 'Not found'});
});

module.exports = apiRouter;
