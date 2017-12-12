'use strict';

function isValidEgn(egn) {
	let
		monthBorn = Number(egn.substr(2, 2)),
		dayBorn = Number(egn.substr(4, 2)),
		yearFlag = 1900,
		dateBorn;

	/*
	 Meaning of EGN:
	 1, 2 –> last 2 digits of the year of birth
	 3, 4 –> month of birth (after 31.12.1999 add 40; between 1800 – 1899 add 20)
	 5, 6 –> date of birth
	 7, 8, 9 –> order of birth
	 10 –> control number.
	 9th number also means gender – even for male and odd for female.

	 Calculating the control number:
	 The numbers from the EGN in order
	 1, 2, 3, 4, 5, 6, 7, 8, 9 are multiplied by
	 2, 4, 8, 5,10, 9, 7, 3, 6,
	 The sum of the products is divided by 11. If the remainder is 10 or 0 – the control number is 0, otherwise it is the remainder.

	 The number for "month" is added to 40 for years between 2000 and 2099, or 20 for the years between 1800 and 1899.

	 Example: May 1895 --> 9525 (May is the 5th month + 20 because the year is between 1800 and 1899)
	 Example: May 2003 --> 0345 (May is the 5th month + 40 because the year is between 2000 and 2099)

	 http://bsv-bg.com/%d0%ba%d0%be%d0%bd%d1%82%d1%80%d0%be%d0%bb%d0%bd%d0%b8-%d1%86%d0%b8%d1%84%d1%80%d0%b8-%d0%bf%d0%be%d0%bb%d0%b7%d0%b2%d0%b0%d0%bd%d0%b8-%d0%b2-%d0%b1%d1%8a%d0%bb%d0%b3%d0%b0%d1%80%d0%b8%d1%8f/
	 * */

	if (monthBorn > 40) {
		yearFlag += 100;
	} else if (monthBorn > 20) {
		yearFlag -= 100;
	}

	monthBorn = monthBorn % 20 - 1;

	// Instantiate new Date object.
	// Compare the new Date year, month and day with the ones extracted from
	// the egn e.g. new Date(1986, 13, 1) will not throw an error, it will
	// return `1987-01-31`
	dateBorn = new Date(
		yearFlag + Number(egn.substr(0, 2)),
		monthBorn,
		dayBorn,
		0,
		0,
		0
	);

	if (egn.length !== 10 ||
		new Date().getTime() < dateBorn.getTime() ||
		dateBorn.getMonth() !== monthBorn ||
		dateBorn.getDate() !== dayBorn) {

		return false;
	}

	let flagNum = [2, 4, 8, 5, 10, 9, 7, 3, 6, 0],
		lastNum = 0,
		curNum;

	for (let i = 0; i < flagNum.length; i += 1) {

		curNum = Number(egn.substr(i, 1));

		lastNum += flagNum[i] * curNum;

	}

	return lastNum % 11 % 10 === curNum;
}

module.exports = isValidEgn;