(function () {
    'use strict';

    angular
      .module('app')
      .factory('dataContext', ['$resource', function ($resource) {
          return {
              register: $resource('api/register'),
              auth    : $resource('api/auth', null, {authenticate: {method: 'PUT'}}),
              user    : $resource('api/users/:id', {id: '@_id'}),
              company : $resource('api/companies/:id', {id: '@_id'}, {edit: {method: 'PUT'}}),
              dossier : $resource('api/dossiers/:id', {id: '@_id'}, {edit: {method: 'PUT'}})
          };
      }]);
}());