(function () {
    'use strict';

    angular
      .module('app')
      .controller('AddDossierController', ['dataContext', 'notification', '$routeParams', '$location',
          function (dataContext, notification, $routeParams, $location) {
              let ctrl = this;
              ctrl.idType = 'bulgarian';
              ctrl.data = {};
              ctrl.data.company = $routeParams.companyId;
              ctrl.save = function () {
                  dataContext
                    .dossier
                    .save(ctrl.data)
                    .$promise
                    .then(result => {
                        notification.success(result);
                        $location.path(`/companies/${ctrl.data.company}/dossiers/${result.documentId}/add-work-contract`);
                    })
                    .catch(error => notification.error(error.mesage));
              };
          }]);
}());