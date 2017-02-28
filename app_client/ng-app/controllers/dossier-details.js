(function () {
    'use strict';

    angular
      .module('app')
      .controller('DossierDetailsController', ['dataContext', 'notification', '$routeParams',
          function (dataContext, notification, $routeParams) {
              let ctrl = this;
              ctrl.data = {};
              ctrl.data.id = $routeParams.dossierId;
              ctrl.tabs = [];
              ctrl.selected = 'work-contract';
              ctrl.setActive = (id) => ctrl.selected = id;
              ctrl.getActive = () => ctrl.selected;
              dataContext.dossier
                         .get({id: ctrl.data.id})
                         .$promise
                         .then(dossier => ctrl.data = dossier)
                         .catch(error => notification.error(error));

              ctrl.save = () => {
                  dataContext.dossier
                             .edit(ctrl.data)
                             .$promise
                             .then(result => notification.success(result.message))
                             .catch(error => notification.error(error.message));
              };
          }]);
}());