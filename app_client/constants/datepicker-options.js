(function () {
    'use strict';

    angular
      .module('app')
      .constant('datepickerOptions', {
          dateOptions: {
              startingDay: 1
          },
          currentText: 'Днес',
          closeText  : 'Затвори',
          clearText  : 'Изчисти',
          toDateObj  : (str) => {
              str = new Date(str);
              return str;
          }
      });
}());