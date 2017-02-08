'use strict';

module.exports = {
    required: ['email'],
    immutable: ['_id', 'companies'],
    populate: {
        path  : 'companies',
        select: 'companyInfo.name companyInfo.bulstat director _id'
    },
    select  : '_id companies'
};