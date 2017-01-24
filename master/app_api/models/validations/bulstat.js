'use strict';

const
  isValidEgn                      = require('./egn'),
  nineDigitsFirstCtrlNumbers      = [1, 2, 3, 4, 5, 6, 7, 8],
  nineDigitsSecondCtrlNumbers     = [3, 4, 5, 6, 7, 8, 9, 10],
  thirteenDigitsFirstCtrlNumbers  = [2, 7, 3, 5],
  thirteenDigitsSecondCtrlNumbers = [4, 9, 5, 7];

/*
 ref:  http://bsv-bg.com/%d0%ba%d0%be%d0%bd%d1%82%d1%80%d0%be%d0%bb%d0%bd%d0%b8-%d1%86%d0%b8%d1%84%d1%80%d0%b8-%d0%bf%d0%be%d0%bb%d0%b7%d0%b2%d0%b0%d0%bd%d0%b8-%d0%b2-%d0%b1%d1%8a%d0%bb%d0%b3%d0%b0%d1%80%d0%b8%d1%8f/
* */

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

function isValidBulstat(bulstat) {

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

}

module.exports = isValidBulstat;
