'use strict';

const
  ctrl = require('../controllers/index');

module.exports = (router, authentication) => {
    router.post('/companies', authentication, ctrl.company.createNew);
    router.get('/companies/:id', authentication, ctrl.company.getById);
    router.put('/companies/:id', authentication, ctrl.company.updateById);
};