'use strict';

const minAge = require('./constraints').minAge;

module.exports = (dob) => {
    return (new Date(dob) / 1000 * 60 * 60 * 24 * 365.4 >= minAge);
};