'use strict';

const ctrlUsers = require('../controllers/index').user;

module.exports = (router) => {
    router.post('/users', ctrlUsers.createNew);
    router.put('/users/:id', ctrlUsers.updateById);
    router.get('/users/:id', ctrlUsers.getById);
};