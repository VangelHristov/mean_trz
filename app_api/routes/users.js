'use strict';

const ctrl = require('../controllers/user-controller');

module.exports = (router, authentication) => {
    router.post('/users', ctrl.register);
    router.put('/users', ctrl.auth);
    router.get('/users/:id', ctrl.getById);
    router.put('/users/:id', authentication, ctrl.updateById);
};