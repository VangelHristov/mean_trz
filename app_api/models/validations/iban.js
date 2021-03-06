'use strict';

function isValidIban(input) {
	let codeLengths = {
		AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
		CH: 21, CR: 21, CY: 28, CZ: 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
		FI: 18, FO: 18, FR: 27, GB: 22, GI: 23, GL: 18, GR: 27, GT: 28, HR: 21,
		HU: 28, IE: 22, IL: 23, IS: 26, IT: 27, JO: 30, KW: 30, KZ: 20, LB: 28,
		LI: 21, LT: 20, LU: 20, LV: 21, MC: 27, MD: 24, ME: 22, MK: 19, MR: 27,
		MT: 31, MU: 30, NL: 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
		RO: 24, RS: 22, SA: 24, SE: 24, SI: 19, SK: 24, SM: 27, TN: 24, TR: 26
	};

	// keep only alphanumeric characters
	let iban = String(input)
		.toUpperCase()
		.replace(/[^A-Z0-9]/g, '');

	// match and capture (1) the country code, (2) the check digits, and (3)
	// the rest
	let code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/);
	let digits;

	// check syntax and length
	if (!code || iban.length !== codeLengths[code[1]]) {
		return false;
	}

	// rearrange country code, check digits and convert chars to int
	digits = (code[3] + code[1] + code[2])
		.replace(
			/[A-Z]/g,
			(letter) => letter.charCodeAt(0) - 55
		);

	// final check
	let checksum = digits.slice(0, 2);
	let fragment;
	for (let offset = 2; offset < digits.length; offset += 7) {
		fragment = String(checksum) + digits.substring(offset, offset + 7);
		checksum = Number(fragment) % 97;
	}
	return checksum === 1;
}

module.exports = isValidIban;