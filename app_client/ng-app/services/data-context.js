(function () {
    'use strict';

    angular
      .module('app')
      .factory('dataContext', ['$resource', function ($resource) {
          return {
              register: $resource('api/register'),
              auth    : $resource('api/auth', null, {authenticate: {method: 'PUT'}}),
              user    : $resource('api/users/:id', {id: '@id'}),
              company : $resource('api/companies/:id', {id: '@id'}, {edit: {method: 'PUT'}}),
              dossier : $resource('api/dossiers/:id', {id: '@_id'}, {edit: {method: 'PUT'}})
          };
      }]);
}());