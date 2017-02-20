'use strict';

const ctrl = require('../controllers/user-controller');

module.exports = (router, authentication) => {
    router.post('/register', ctrl.register);
    router.put('/auth', ctrl.auth);
    router.get('/users/:id', ctrl.getById);
    router.put('/users/:id', authentication, ctrl.updateById);
};