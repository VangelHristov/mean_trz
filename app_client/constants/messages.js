(function notificationMessagesModule() {
	'use strict';

	angular
		.module('app')
		.constant('messages', {
			loginSuccess        : 'Успешен вход.',
			invalidCredentials  : 'Грешно име или парола.',
			logoutSuccess       : 'Успешен изход.',
			registrationSuccess : 'Успешна регистрация.',
			passwordResetSuccess: 'След неколко минути ще получите имейл с' +
			' инструкции.',
			promptToLogIn       : 'Моля влезте в профила си.'
		});
}());