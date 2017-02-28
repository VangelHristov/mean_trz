'use strict';

module.exports = function (next) {
    let id = this.id;

    if (!id) {
        next(new Error('No id'));

    } else if (!id.bulgarian && !id.foreign) {

        next(new Error('No id or lnch'));
    } else if (id.bulgarian && id.foreign) {

        next(new Error('Both egn and lch are provided'));
    } else if (id.bulgarian && !id.foreign) {

        if (!id.bulgarian.egn || !id.bulgarian.idCardNumber) {

            next(new Error('No egn or id card number'));
        }
    } else if (id.foreign && !id.bulgarian) {
        if (!id.foreign.lnch || !id.foreign.idCardNumber || !id.foreign.dob || !id.foreign.sex) {

            next(new Error('Missing or incomplete lnch'));
        }
    }

    next();
};
