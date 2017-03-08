'use strict';

module.exports = {
    cyrillic             : /[\s\-.\d,АаБбВвГгДдЕеЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщьЪъЮюЯя]+/,
    egn                  : /^[\d]{10}$/,
    bulgarianIdCardNumber: /^[\d]{9}$/,
    lnch                 : /^[\d]{9}$/,
    foreignIdCardNumber  : /.+/,
    typeInsured          : /^(0[1-9])|([1-8][\d])|(9[0-6])$/,
    postalCode           : /^[\d]{4}$/,
    phoneNumber          : /^[\d\-+\s()]+$/,
    occupationCode       : /^[1-9][\d]{0,7}$/,
    iban                 : /^[A-Za-z\d]{22}$/,
    bic                  : /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/,
    password             : /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%_.\-]).{8,20})$/,
    email                : /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    codeEconomicActivity : /[A-U]((0[1-9])|([1-9][\d]))(.[\d]{1,2})?$/
};
