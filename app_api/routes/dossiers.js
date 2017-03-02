'use strict';

const ctrl = require('../controllers/dossier-controller');

module.exports = (router, authentication) => {
    router.post('/dossiers', authentication, ctrl.createNew);
    router.get('/dossiers/:id', authentication, ctrl.getById);
    router.put('/dossiers/:id', authentication, ctrl.updateById);
};