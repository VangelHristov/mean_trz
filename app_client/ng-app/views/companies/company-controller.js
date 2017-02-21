(function () {
    'use strict';

    angular
      .module('app')
      .controller('CompanyController', ['common', function (common) {
          let ctrl = this;
          ctrl.data = {
              name                : '',
              bulstat             : '',
              director            : '',
              address             : {
                  street    : '',
                  city      : '',
                  postalCode: '',
                  country   : 'България'
              },
              pkpv                : '',
              mainEconomicActivity: '',
              user                : common.storege.getUserId()
          };
          ctrl.save = function () {
              common.dataContext
                    .companies
                    .save(ctrl.data)
                    .$promise
                    .then(result => common.notification.success(result))
                    .catch(error => common.notification.warning(error));
          };
      }]);
}());