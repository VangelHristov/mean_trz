(function () {
    'use strict';

    angular
      .module('app')
      .factory('common', ['notification', 'dataContext', 'modalDismiss', 'storage',
          function (notification, dataContext, modalDismiss, storage) {
              return {
                  notification,
                  dataContext,
                  modalDismiss,
                  storage
              };
          }]);
}());