'use strict';

const ctrl = require('../controllers/dossier-controller');

module.exports = (router, authentication) => {
    router.post('/dossiers', authentication, ctrl.createNew);
    router.get('/dossiers/:id', authentication, ctrl.getById);
    router.put('/dossiers/:id', authentication, ctrl.updateById);

    //// work contracts
    //router.post('/work-contracts', authentication, ctrl.workContract.createNew);
    //router.get('/work-contracts/:id', authentication, ctrl.workContract.getById);
    //router.put('/work-contracts/:id', authentication, ctrl.workContract.updateById);
};