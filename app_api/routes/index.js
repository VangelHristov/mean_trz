'use strict';

const
  apiRouter = require('express').Router(),
  jwt = require('express-jwt'),
  authentication = jwt({
      secret      : process.env.JWT_SECRET,
      userProperty: 'payload'
  });

require('./users')(apiRouter, authentication);
require('./companies')(apiRouter, authentication);
require('./dossiers')(apiRouter, authentication);
require('./work-contracts')(apiRouter, authentication);

apiRouter.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res
          .status(401)
          .json(err.message);

    } else {
        next(err);
    }
});

module.exports = apiRouter;
