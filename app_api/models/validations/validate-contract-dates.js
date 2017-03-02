'use strict';

module.exports = function (next) {
    if (this.startingDate < this.signingDate) {
        next(new Error('Start date is before signing date'));
    }

    if (this.terminationDate && this.terminationDate < this.startingDate) {
        next(new Error('Termination date is before starting date'));
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
