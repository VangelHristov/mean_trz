(function requestInterceptorModule() {
	'use strict';

	angular
		.module('app')
		.factory(
			'authenticationInterceptor',
			[
				'storage',
				function interceptor(storage) {
					return {
						request      : function (config) {
							config.headers.Authorization = `Bearer ${storage.getToken()}`;
							return config;
						},
						responseError: function (error) {
							if (error.data && error.data.message) {
								error.message = error.data.message;
							}

							return error;
						}
					};
				}
			]
		);
}());