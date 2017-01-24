'use strict';

const
  ctrl = require('../controllers/index');

module.exports = (router) => {
    router.post('/companies', ctrl.company.createNew);
    router.get('/companies/:id', ctrl.company.getById);
    router.put('/companies/:id', ctrl.company.updateById);
};