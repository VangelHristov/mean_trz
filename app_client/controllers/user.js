(function userControllerModule() {
	'use strict';

	angular
		.module('app')
		.controller('UserController', [
			'$scope',
			'$location',
			'storage',
			'dataContext',
			'notification',
			'modalDismiss',
			'notificationMessages',
			function userController(
				$scope,
				$location,
				storage,
				dataContext,
				notification,
				modalDismiss,
				notificationMsg
			) {
				$scope.isLoggedIn = storage.isLoggedIn;
				$scope.logIn = function logIn(data) {
					dataContext
						.auth
						.authenticate(data)
						.$promise
						.then(function loginSuccess(result) {
							if (result.data) {
								modalDismiss();
								storage.setToken(result.data);
								notification.success(notificationMsg.loginSuccess);
								$location.path('/companies');
							} else {
								notification.error(notificationMsg.invalidCredentials);
							}
						})
						.catch(notification.error);
				};

				$scope.logOut = function logOut() {
					$scope.email = '';
					$scope.password = '';
					storage.removeAllData();
					notification.success(notificationMsg.logoutSuccess);
					$location.path('/about');
				};

				$scope.register = function register(data) {
					dataContext.register
					           .save(data)
					           .$promise
					           .then(function registerSuccess() {
						           modalDismiss();
						           notification.success(notificationMsg.registrationSuccess);
					           })
					           .catch(notification.error);
				};

				$scope.resetPassword = function resetPassword(/*email*/) {
					modalDismiss();
					notification.success(notificationMsg.passwordResetSuccess);
				};
			}
		]);
}());