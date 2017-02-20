'use strict';

const ctrl = require('../controllers/company-controller');

module.exports = (router, authentication) => {
    router.post('/companies', authentication, ctrl.createNew);
    router.get('/companies/:id', authentication, ctrl.getById);
    router.put('/companies/:id', authentication, ctrl.updateById);
};
