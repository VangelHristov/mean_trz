(function () {
    'use strict';

    angular
      .module('app')
      .factory('modalDismiss', function () {
          return () => $('.modal-dismiss').trigger('click');
      });
}());