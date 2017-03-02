(function () {
    'use strict';

    angular
      .module('app')
      .controller('AddCompanyController', ['storage', 'dataContext', 'notification', '$location',
          function (storage, dataContext, notification, $location) {
              let ctrl = this;
              ctrl.data = {};
              ctrl.data.user = storage.getUserId();
              ctrl.save = function () {
                  dataContext.company
                             .save(ctrl.data)
                             .$promise
                             .then(result => {
                                 notification.success(result.message);
                                 $location.path('/companies');
                             })
                             .catch(error => {
                                 notification.warning(error.data.message);
                             });
              };
          }]);
}());