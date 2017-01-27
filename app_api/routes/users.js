'use strict';

const ctrlUsers = require('../controllers/index').user;

module.exports = (router, authentication) => {
    router.post('/users', authentication, ctrlUsers.createNew);
    router.put('/users/:id', authentication, ctrlUsers.updateById);
    router.get('/users/:id', authentication, ctrlUsers.getById);
};