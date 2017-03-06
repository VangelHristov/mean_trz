(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzWorkContract', ['datepickerOptions', 'reasonForWorkContract', 'typeInsured',
          function (datepickerOptions, reasonForWorkContract, typeInsured) {
              return {
                  restrict   : 'AE',
                  templateUrl: 'directives/work_contract/template.html',
                  scope      : {
                      model : '=',
                      submit: '&'
                  },
                  link       : (scope) => {
                      scope.reasonForContract = reasonForWorkContract;
                      scope.typeInsured = typeInsured;
                      scope.datepicker = datepickerOptions;
                      scope.open = (id) => scope[id] = true;
                  }
              };
          }]);
}());