(function () {
    'use strict';

    angular
      .module('app')
      .controller('DossierDetailsController', ['dataContext', 'notification', '$routeParams',
          function (dataContext, notification, $routeParams) {
              let ctrl = this;
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
                             ctrl.idType = dossier.id.bulgarian ? 'bulgarian' : 'foreign';
                             ctrl.data = dossier;
                         })
                         .catch(error => notification.error(error.data.message));

              ctrl.save = () => {
                  dataContext.dossier
                             .edit(ctrl.data)
                             .$promise
                             .then(result => notification.success(result.message))
                             .catch(error => notification.error(error.data.message));
              };

              ctrl.saveContract = () => {
                  dataContext.wo
              };
          }]);
}());