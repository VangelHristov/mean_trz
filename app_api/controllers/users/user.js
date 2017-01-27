'use strict';

module.exports = {
    model   : 'User',
    owner   : null,
    required: ['username', 'password', 'email'],
    populate: {
        path  : 'companies',
        select: 'companyInfo.name companyInfo.bulstat director _id'
    },
    select  : '_id companies'
};