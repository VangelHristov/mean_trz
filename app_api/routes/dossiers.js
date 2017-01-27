'use strict';

const ctrl = require('../controllers/index');

module.exports = (router, authentication) => {
    router.post('/dossiers', authentication, ctrl.dossier.createNew);
    router.get('/dossiers/:id', authentication, ctrl.dossier.getById);
    router.put('/dossiers/:id', authentication, ctrl.dossier.updateById);

    // work contracts
    router.post('/work-contracts', authentication, ctrl.workContract.createNew);
    router.get('/work-contracts/:id', authentication, ctrl.workContract.getById);
    router.put('/work-contracts/:id', authentication, ctrl.workContract.updateById);
};