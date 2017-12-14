(function dataContextModule() {
	'use strict';

	angular
		.module('app')
		.factory('dataContext', [
			'$resource', function dataContext($resource) {
				return {
					register    : $resource('api/register'),
					auth        : $resource(
						'api/auth',
						null,
						{authenticate: {method: 'PUT'}}
					),
					user        : $resource('api/users'),
					company     : $resource(
						'api/companies/:id',
						{id: '@id'},
						{edit: {method: 'PUT'}}
					),
					dossier     : $resource(
						'api/dossiers/:id',
						{id: '@_id'},
						{edit: {method: 'PUT'}}
					),
					workContract: $resource(
						'api/work-contracts/:id',
						{id: '@_id'},
						{edit: {method: 'PUT'}}
					)
				};
			}
		]);
}());