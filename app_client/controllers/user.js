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

				let registerOrLoginSuccess = function (result) {
					if (result.data) {
						modalDismiss();
						storage.setToken(result.data);
						notification.info(notificationMsg.loginSuccess);
						$location.path('/companies');
					} else {
						notification.error(notificationMsg.invalidCredentials);
					}
				};

				$scope.register = function register(data) {
					dataContext
						.register
						.save(data)
						.$promise
						.then(registerOrLoginSuccess)
						.catch(notification.error);
				};

				$scope.logIn = function logIn(data) {
					dataContext
						.auth
						.authenticate(data)
						.$promise
						.then(registerOrLoginSuccess)
						.catch(() => notification.error(notificationMsg.invalidCredentials));
				};

				$scope.resetPassword = function resetPassword(/*email*/) {
					modalDismiss();
					notification.success(notificationMsg.passwordResetSuccess);
				};

				$scope.logOut = function logOut() {
					$scope.email = '';
					$scope.password = '';
					storage.removeAllData();
					notification.info(notificationMsg.logoutSuccess);
					$location.path('/about');
				};
			}
		]);
}());