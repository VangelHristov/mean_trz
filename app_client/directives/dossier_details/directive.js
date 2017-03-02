(function () {
    'use strict';

    angular
      .module('app')
      .directive('trzDossierDetails', function () {
          return {
              restrict   : 'AE',
              templateUrl: 'directives/dossier_details/template.html',
              scope      : {
                  model : '=',
                  submit: '&'
              }
          };
      });
}());