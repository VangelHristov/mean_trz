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

                  if (ctrl.idType === 'bulgarian') {
                      ctrl.data.id.foreign = undefined;
                  } else {
                      ctrl.data.id.buldarian = undefined;
                  }

                  dataContext
                    .dossier
                    .save(ctrl.data)
                    .$promise
                    .then(result => {
                        notification.success(result.message);
                        $location.path(`/companies/${ctrl.data.company}/dossiers/${result._id}/add-work-contract`);
                    })
                    .catch(error => {
                        notification.error(error.data.message);
                    });
              };
          }]);
}());