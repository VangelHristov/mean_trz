(function notificationMessagesModule() {
	'use strict';

	angular
		.module('app')
		.constant('notificationMessages', {
			loginSuccess        : 'Успешен вход.',
			invalidCredentials  : 'Грешно име или парола.',
			logoutSuccess       : 'Успешен изход.',
			registrationSuccess : 'Успешна регистрация.',
			passwordResetSuccess: 'След неколко минути ще получите имейл с' +
			' инструкции.',
			promptToLogIn       : 'Моля влезте в профила си.',
			documentSaveSuccess : 'Успешен запис'
		});
}());