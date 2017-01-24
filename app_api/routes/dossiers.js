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
};