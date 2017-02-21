(function () {
    'use strict';

    angular
      .module('app')
      .factory('dataContext', ['core', function (core) {
          return {
              register: core.$resource('api/register'),
              auth    : core.$resource('api/auth', null, {authenticate: {method: 'PUT'}}),
              user    : core.$resource('api/users/:id', {id: '@_id'}, {auth: {method: 'PUT'}}),
              company : core.$resource('api/companies/:id', {id: '@_id'}, {edit: {method: 'PUT'}}),
              dossier : core.$resource('api/dossiers/:id', {id: '@_id'}, {edit: {method: 'PUT'}})
          };
      }]);
}());