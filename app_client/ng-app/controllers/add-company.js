(function () {
    'use strict';

    angular
      .module('app')
      .controller('AddCompanyController', ['storage', 'dataContext', 'notification', '$location',
          function (storage, dataContext, notification, $location) {
          let ctrl = this;
          ctrl.data = {
              name                : 'Първа фирма',
              bulstat             : '123456786',
              director            : 'Вангел Христов',
              address             : {
                  street    : 'улица Марица',
                  city      : 'Своге',
                  postalCode: '1234',
                  country   : 'България'
              },
              pkpv                : '1',
              mainEconomicActivity: 'бизнес',
              user                : storage.getUserId()
          };
          ctrl.save = function () {
              dataContext.company
                         .save(ctrl.data)
                         .$promise
                         .then(result => {
                             notification.success(result.message);
                             $location.path('/companies');
                         })
                         .catch(error => notification.warning(error.data));
          };
      }]);
}());