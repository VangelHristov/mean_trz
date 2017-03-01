'use strict';

const ctrl = require('../controllers/work-contract-controller');

module.exports = (router, authentication) => {
    router.post('/work-contracts', authentication, ctrl.createNew);
    router.get('/work-contracts/:id', authentication, ctrl.getById);
    router.put('/work-contracts/:id', authentication, ctrl.updateById);
};