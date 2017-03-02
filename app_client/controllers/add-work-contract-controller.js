(function () {
    'use strict';

    angular
      .module('app')
      .controller('AddWorkContractController', ['$routeParams', '$location', 'dataContext', 'notification',
          function ($routeParams, $location, dataContext, notification) {
              let ctrl = this;
              ctrl.data = {};
              ctrl.data.dossier = $routeParams.dossierId;

              ctrl.save = function () {
                  dataContext.workContract
                             .save(ctrl.data)
                             .$promise
                             .then(result => {
                                 notification.success(result.message);
                                 $location.path(`companies/${$routeParams.companyId}`);
                             })
                             .catch(error => notification.error(error.data.message));
              };
          }]);
}());