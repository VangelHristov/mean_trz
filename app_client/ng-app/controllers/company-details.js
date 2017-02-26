(function () {
    'use strict';

    angular
      .module('app')
      .controller('CompanyDetailsController', ['$routeParams', 'dataContext', function ($routeParams, dataContext) {
          let ctrl = this;
          ctrl.save = () => {
              console.log(ctrl.data);
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
      }]);
}());