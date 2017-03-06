'use strict';

const errorMessages=require('./error-messages');

module.exports = function (next) {
    if (this.startingDate < this.signingDate) {
        next(new Error(errorMessages.startDateBeforeSignDate));
    }

    if (this.terminationDate && this.terminationDate < this.startingDate) {
        next(new Error(errorMessages.terminationDateBeforeStartDate));
    }

    if (this.terminationDate) {
        let termination     = this.terminationDate;

        // Set lastDayInsured
        this.lastDayInsured = new Date(
          termination.getFullYear(),
          termination.getMonth(),
          termination.getDate() - 1
        );
    }

    next();
};
