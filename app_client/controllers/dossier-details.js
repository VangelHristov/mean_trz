(function () {
    'use strict';

    angular
      .module('app')
      .controller('DossierDetailsController', ['dataContext', 'notification', '$routeParams', 'storage', 'breadcrumb', 'toDateObject',
          function (dataContext, notification, $routeParams, storage, breadcrumb, toDateObject) {
              let ctrl = this;
              ctrl.id = {};
              ctrl.data = {};
              ctrl.data.id = $routeParams.dossierId;
              ctrl.tabs = [
                  {
                      icon  : 'fa-user',
                      target: 'dossier-details',
                      label : 'Лични данни'
                  },
                  {
                      active: true,
                      icon  : 'fa-briefcase',
                      target: 'work-contract',
                      label : 'Трудов договор'
                  }
              ];
              ctrl.selected = 'work-contract';
              ctrl.setActive = (id) => ctrl.selected = id;
              ctrl.getActive = () => ctrl.selected;
              dataContext.dossier
                         .get({id: ctrl.data.id})
                         .$promise
                         .then(dossier => {
                             ctrl.id.type = dossier.id.bulgarian ? 'bulgarian' : 'foreign';
                             ctrl.data = dossier;
                             toDateObject(ctrl.data.workContracts[0], ['signingDate', 'startingDate'], ['terminationDate']);

                             storage.setDossierName(`${dossier.names.first} ${dossier.names.last}`);

                             ctrl.breadcrumbs = breadcrumb.getAll();
                         })
                         .catch(error => notification.error(error.message));

              ctrl.saveDossier = () => {
                  dataContext.dossier
                             .edit(ctrl.data)
                             .$promise
                             .then(result => notification.success(result.message))
                             .catch(error => notification.error(error.message));
              };

              ctrl.saveContract = () => {
                  dataContext.workContract
                             .edit(ctrl.data.workContracts[0])
                             .$promise
                             .then(result => notification.success(result.message))
                             .catch(err => notification.error(err.message||err.data.message));
              };
          }]);
}());