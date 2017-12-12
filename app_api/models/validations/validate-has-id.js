'use strict';

const errorMessages = require('./error-messages');

module.exports = function validate(next) {
    let id = this.id;

    if (!id) {
        next(new Error(errorMessages.missingId));

    } else if (!id.bulgarian && !id.foreign) {

        next(new Error(errorMessages.missingId));
    } else if (id.bulgarian && id.foreign) {

        next(new Error(errorMessages.cantHaveBulgarianAndForeignId));
    } else if (id.bulgarian && !id.foreign) {

        if (!id.bulgarian.egn || !id.bulgarian.idCardNumber) {

            next(new Error(errorMessages.missingId));
        }
    } else if (id.foreign && !id.bulgarian) {
        if (!id.foreign.lnch || !id.foreign.idCardNumber || !id.foreign.dob || !id.foreign.sex) {

            next(new Error(errorMessages.incompleteForeignId));
        }
    }

    next();
};
