'use strict';

module.exports = {
    model   : 'CompanySettings',
    required: ['owner', 'pkpv'],
    owner   : {
        name    : 'Company',
        property: 'settings'
    }
};
