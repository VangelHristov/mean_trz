(function () {
    'use strict';

    angular
      .module('app')
      .controller('AddCompanyController', ['storage', 'dataContext', 'notification', '$location','breadcrumb',
          function (storage, dataContext, notification, $location, breadcrumb) {
              let ctrl = this;
              ctrl.breadcrumbs = breadcrumb.getAll();
              ctrl.data = {};
              ctrl.data.user = storage.getUserId();
              ctrl.save = function () {
                  dataContext.company
                             .save(ctrl.data)
                             .$promise
                             .then(result => {
                                 notification.success(result);
                                 $location.path('/companies');
                             })
                             .catch(notification.error);
              };
          }]);
}());