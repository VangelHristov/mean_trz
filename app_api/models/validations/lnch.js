'use strict';

module.exports = (lnch) => {
	let
		regxp = /^[\d]{9}$/,
		ctrlNumbers = [21, 19, 17, 13, 11, 9, 7, 3, 1],
		lastNumber = 0;

	if (!regxp.test(lnch)) {
		return false;
	}

	for (let i = 0; i < ctrlNumbers.length; i += 1) {
		lastNumber += ctrlNumbers[i] * Number(lnch[i]);
	}

	return lastNumber % 10 === lnch[8];
};