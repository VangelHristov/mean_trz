'use strict';

const ctrlUsers = require('../controllers/index').user;

module.exports = (router, authentication) => {
    router.post('/users', ctrlUsers.createNew);
    router.put('/users/:id', authentication, ctrlUsers.updateById);
    router.get('/users/:id', authentication, ctrlUsers.getById);
};