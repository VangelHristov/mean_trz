(function () {
    'use strict';

    angular
      .module('app')
      .constant('validationPatterns', {
          cyrillic             : /^[\s\-АаБбВвГгДдЕеЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщьЪъЮюЯя]+$/,
          address              : /^[\s\-\d.,АаБбВвГгДдЕеЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщьЪъЮюЯя]+$/,
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
          password             : /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%_&*.\-]).{8,20})$/,
          email                : /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
          codeEconomicActivity : /^[A-U]((0[1-9]$)|([1-9][\d])$)(.[\d]{1,2}$)?/,
          minWorkAge           : /(^1[89]$)|(^[2-9][0-9]$)/,
          contractNumber       : /^[A-ZА-Я]?[\d]+$/,
          salary               : /(^4[6-9][\d](.[\d]{2})?$)|(^[5-9][\d]{2}(.[\d]{2})?$)|(^[1-9][\d]{3,}(.[\d]{2})?$)/,
          contractLength       : /^[1-9]([\d]+)?$/,
          workHours            : /^[1-8]$/,
          notice               : /^[1-9]([\d]+)?$/,
          vacation             : /(^[2-9][\d]$)|(^[1-2][\d]{2}$)|(^3([0-5][\d]$)|(^36[0-5])$)/,
          yearsWorkExperience  : /^[1-9]([\d]{1,2})?$/,
          pkpv                 : /^[1-9]([\d])?$/
      });
}());