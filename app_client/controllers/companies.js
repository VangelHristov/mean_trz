(function () {
    'use strict';

    angular
      .module('app')
      .controller('CompaniesController', ['dataContext', 'storage', 'notification', function (dataContext, storage, notification) {
          let ctrl = this;
          ctrl.buttons = [
              {
                  label: 'Добави нова',
                  icon : 'fa-plus',
                  href : '#!/companies/add-new'
              }
          ];

          dataContext.user
                     .get({id: storage.getUserId()})
                     .$promise
                     .then(user => ctrl.companies = user.companies)
                     .catch(notification.error);
      }]);
}());
