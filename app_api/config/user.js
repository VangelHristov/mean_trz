'use strict';

module.exports = {
    required: ['email'],
    populate: {
        path  : 'companies',
        select: 'name bulstat director _id'
    },
    select  : '_id companies'
};