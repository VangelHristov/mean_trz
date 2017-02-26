(function () {
    'use strict';

    angular
      .module('app')
      .controller('CompanyDetailsController', ['$routeParams', 'dataContext',
          function ($routeParams, dataContext) {
              let ctrl = this;
              ctrl.selected = 'dossiers';
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
              ctrl.save = () => {
                  dataContext.company
                             .edit({id: ctrl.data._id}, ctrl.data)
                             .$promise
                             .then(result => console.log(result))
                             .catch(err => console.log(err));
              };

              dataContext.company
                         .get({id: $routeParams.companyId})
                         .$promise
                         .then(company => {
                             ctrl.data = company;
                         });

              ctrl.dossiers = [
                  {
                      name    : 'Ivan Ivanov',
                      egn     : 8601110082,
                      position: 'director'
                  },
                  {
                      name    : 'Asen Petrov',
                      egn     : 8765334223,
                      position: 'vice president'
                  }
              ];
          }]);
}());