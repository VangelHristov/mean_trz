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
    occupationNKPD       : /[\d]{2}.?[\d]?[\d]?/,
    iban                 : /^[A-Za-z\d]{22}$/,
    bic                  : /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/,
    sickLeaveSeries      : /^[A-Za-z]\s?-\s?20[\d]{2}$/,
    sickLeaveNumber      : /^[\d]{7}$/,
    diagnosisCode        : /^[A-Z][\d]{2}(.[\d])?$/,
    username             : /^[\d\w\-._?!@#$%^&*]{4,64}$/,
    password             : /^[\d\w\-._?!@#$%^&*]{4,64}$/,
    email                : /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
};