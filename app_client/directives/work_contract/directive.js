(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzWorkContract',
        ['datepickerOptions', 'reasonForWorkContract', 'typeInsured', 'validationPatterns', 'validate', 'errorMessages',
            function (datepickerOptions, reasonForWorkContract, typeInsured, validationPatterns, validate, errorMessages) {
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
                        scope.validationPatterns = validationPatterns;
                        scope.validate = validate;
                        scope.errors = errorMessages;
                        scope.datepicker = datepickerOptions;

                        scope.open = (id) => {
                            scope[id] = true;
                        };
                    }
                };
            }]);
}());