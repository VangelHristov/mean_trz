'use strict';

const ctrl = require('../controllers/index');

module.exports = (router) => {
    router.post('/dossiers', ctrl.dossier.createNew);
    router.get('/dossiers/:id', ctrl.dossier.getById);
    router.put('/dossiers/:id', ctrl.dossier.updateById);

    // work contracts
    router.post('/work-contracts', ctrl.workContract.createNew);
    router.get('/work-contracts/:id', ctrl.workContract.getById);
    router.put('/work-contracts/:id', ctrl.workContract.updateById);

    // civil contracts
    router.post('/civil-contracts', ctrl.civilContract.createNew);
    router.get('/civil-contracts/:id', ctrl.civilContract.getById);
    router.put('/civil-contracts/:id', ctrl.civilContract.updateById);

    // pay stubs
    router.post('/pay-stubs', ctrl.payStub.createNew);
    router.get('/pay-stubs/:id', ctrl.payStub.getById);
    router.put('/pay-stubs/:id', ctrl.payStub.updateById);

    // vacations
    router.post('/vacations', ctrl.vacation.createNew);
    router.get('/vacations/:id', ctrl.vacation.getById);
    router.put('/vacations/:id', ctrl.vacation.updateById);

    // sick leaves
    router.post('/sick-leaves', ctrl.sickLeave.createNew);
    router.get('/sick-leaves/:id', ctrl.sickLeave.getById);
    router.put('/sick-leaves/:id', ctrl.sickLeave.updateById);
};