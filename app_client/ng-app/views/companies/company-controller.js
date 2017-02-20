(function () {
    'use strict';

    angular
      .module('app')
      .controller('CompanyController', ['dataContext', 'notification', 'storage', function (dataContext, notification, storege) {
          let ctrl  = this;
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
              user                : storege.getUserId()
          };
          ctrl.save = function () {
              dataContext
                .companies
                .save(ctrl.data)
                .$promise
                .then(result => notification.success(result))
                .catch(error => notification.warning(error));
          };
      }]);
}());