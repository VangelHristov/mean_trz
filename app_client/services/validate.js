(function () {
    'use strict';

    angular
      .module('app')
      .factory('validate', function () {

          const
            isValidEgn = function isValidEgn(egn) {
                let
                  monthBorn = parseInt(egn.substr(2, 2)),
                  dayBorn = parseInt(egn.substr(4, 2)),
                  yearFlag = 1900,
                  dateBorn;

                if (monthBorn > 40) {
                    yearFlag += 100;
                } else if (monthBorn > 20) {
                    yearFlag -= 100;
                }

                monthBorn = (monthBorn % 20) - 1;

                dateBorn = new Date(yearFlag + parseInt(egn.substr(0, 2)), monthBorn, dayBorn, 0, 0, 0);

                if (egn.length !== 10 || new Date().getTime() < dateBorn.getTime() ||
                  dateBorn.getMonth() != monthBorn || dateBorn.getDate() != dayBorn) {

                    return false;
                }

                let flagNum = [2, 4, 8, 5, 10, 9, 7, 3, 6, 0],
                  lastNum = 0,
                  curNum;

                for (let i = 0; i < flagNum.length; i += 1) {

                    curNum = egn.substr(i, 1);

                    lastNum += flagNum[i] * curNum;

                }

                return (lastNum % 11) % 10 == curNum;
            },
            isValidIban = function isValidIban(input) {
                let codeLengths = {
                      AD: 24, AE: 23, AT: 20, AZ: 28, BA: 20, BE: 16, BG: 22, BH: 22, BR: 29,
                      CH                                                                : 21, CR: 21, CY: 28, CZ                                        : 24, DE: 22, DK: 18, DO: 28, EE: 20, ES: 24,
                      FI                                                                : 18, FO                                                        : 18, FR                                                : 27, GB                                        : 22, GI                                : 23, GL: 18, GR: 27, GT: 28, HR: 21,
                      HU                                                                : 28, IE                                                        : 22, IL                                                : 23, IS                                        : 26, IT: 27, JO                        : 30, KW: 30, KZ        : 20, LB: 28,
                      LI                                                                : 21, LT: 20, LU: 20, LV: 21, MC: 27, MD                        : 24, ME: 22, MK: 19, MR: 27,
                      MT                                                                : 31, MU                                                        : 30, NL                                                : 18, NO: 15, PK: 24, PL: 28, PS: 29, PT: 25, QA: 29,
                      RO                                                                : 24, RS: 22, SA: 24, SE: 24, SI: 19, SK                        : 24, SM                : 27, TN: 24, TR: 26
                  },
                  iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), // keep only alphanumeric characters
                  code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
                  digits;

                // check syntax and length
                if (!code || iban.length !== codeLengths[code[1]]) {
                    return false;
                }

                // rearrange country code and check digits, and convert chars to ints
                digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
                    return letter.charCodeAt(0) - 55;
                });

                // final check
                let checksum = digits.slice(0, 2), fragment;
                for (let offset = 2; offset < digits.length; offset += 7) {
                    fragment = String(checksum) + digits.substring(offset, offset + 7);
                    checksum = parseInt(fragment, 10) % 97;
                }
                return checksum === 1;
            },
            isValidLnch = (lnch) => {
                let
                  regxp = /^[\d]{9}$/,
                  ctrlNumbers = [21, 19, 17, 13, 11, 9, 7, 3, 1],
                  lastNumber = 0;

                if (!regxp.test(lnch)) {
                    return false;
                }

                for (let i = 0; i < ctrlNumbers.length; i += 1) {
                    lastNumber += ctrlNumbers[i] * parseInt(lnch[i]);
                }

                return (lastNumber % 10 === lnch[8]);
            },
            isValidBulstat = function (bulstat) {
                const
                  nineDigitsFirstCtrlNumbers = [1, 2, 3, 4, 5, 6, 7, 8],
                  nineDigitsSecondCtrlNumbers = [3, 4, 5, 6, 7, 8, 9, 10],
                  thirteenDigitsFirstCtrlNumbers = [2, 7, 3, 5],
                  thirteenDigitsSecondCtrlNumbers = [4, 9, 5, 7];

                function loop(arr, bulstat, start) {
                    let sum = 0,
                      len = arr.length;

                    for (let i = 0; i < len; i += 1) {
                        sum += arr[i] * bulstat[start];
                        start += 1;
                    }

                    return sum;
                }

                function getNinthDigit(bulstat) {
                    let ninthDigit = loop(nineDigitsFirstCtrlNumbers, bulstat, 0);

                    if (ninthDigit % 11 === 10) {
                        ninthDigit = loop(nineDigitsSecondCtrlNumbers, bulstat, 0);
                    }

                    return (ninthDigit % 11 === 10) ? 0 : ninthDigit % 11;

                }

                function getThirteenthDigit(bulstat) {
                    let ninthDigit = getNinthDigit(bulstat);

                    if (ninthDigit !== bulstat[8]) {
                        return false;
                    }

                    let thirteenthDigit = loop(thirteenDigitsFirstCtrlNumbers, bulstat, 9);
                    if (thirteenthDigit % 11 === 10) {
                        thirteenthDigit = loop(thirteenDigitsSecondCtrlNumbers, bulstat, 9);
                    }

                    return thirteenthDigit % 11 === 10 ? 0 : thirteenthDigit % 11;
                }

                switch (bulstat.length) {
                    case 9 :
                        return getNinthDigit(bulstat) === +bulstat[8];
                    case 10:
                        return isValidEgn(bulstat);
                    case 13:
                        return getThirteenthDigit(bulstat) === +bulstat[12];
                    default:
                        return false;
                }
            };

          return {
              egn    : isValidEgn,
              iban   : isValidIban,
              lnch   : isValidLnch,
              bulstat: isValidBulstat
          };
      });
}());