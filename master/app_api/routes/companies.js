'use strict';

const
  ctrl = require('../controllers/index');

module.exports = (router) => {
    router.post('/companies', ctrl.company.createNew);
    router.get('/companies/:id', ctrl.company.getById);
    router.put('/companies/:id', ctrl.company.updateById);
    router.post('/companies-settings', ctrl.companySettings.createNew);
    router.get('/companies-settings/:id', ctrl.companySettings.getById);
    router.put('/companies-settings/:id', ctrl.companySettings.updateById);
};