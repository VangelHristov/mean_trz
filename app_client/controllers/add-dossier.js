(function () {
    'use strict';

    angular
      .module('app')
      .controller('AddDossierController', ['dataContext', 'notification', '$routeParams', '$location','breadcrumb',
          function (dataContext, notification, $routeParams, $location,breadcrumb) {
              let ctrl = this;
              ctrl.breadcrumbs = breadcrumb.getAll();
              ctrl.id = {
                  type: 'bulgarian'
              };
              ctrl.data = {};
              ctrl.data.company = $routeParams.companyId;
              ctrl.save = function () {

                  if (ctrl.id.type === 'bulgarian') {
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