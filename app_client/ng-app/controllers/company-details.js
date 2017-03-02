(function () {
    'use strict';

    angular
      .module('app')
      .controller('CompanyDetailsController', ['$routeParams', 'dataContext', 'notification',
          function ($routeParams, dataContext, notification) {
              let ctrl = this;
              ctrl.active = 'dossiers';
              ctrl.tabs = [
                  {
                      target: 'dossiers',
                      active: true,
                      icon  : 'fa-folder',
                      label : 'Досиета'
                  },
                  {
                      target: 'company-info',
                      icon  : 'fa-info-circle',
                      label : 'За фирмата'
                  }
              ];
              ctrl.buttons = [
                  {
                      href : `#!/companies/${$routeParams.companyId}/dossiers/add-new`,
                      icon : 'fa-plus',
                      label: 'Добави досие'
                  }
              ];
              ctrl.setActive = (id) => ctrl.active = id;

              ctrl.getActive = () => ctrl.active;

              ctrl.save = () => {
                  dataContext.company
                             .edit({id: ctrl.data._id}, ctrl.data)
                             .$promise
                             .then(result => notification.success(result.message))
                             .catch(err => notification.error(err));
              };

              dataContext.company
                         .get({id: $routeParams.companyId})
                         .$promise
                         .then(company => {
                             ctrl.data = company;
                         });
          }]);
}());