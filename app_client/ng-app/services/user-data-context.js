(function () {
    'use strict';

    angular
      .module('app')
      .factory('userDataContext', ['$resource', function ($resource) {
          return $resource('api/users/:id', {id: '@_id'}, {auth: {method: 'PUT'}});
      }]);
}());