(function () {
    'use strict';

    angular
      .module('app')
      .constant('messages', {
          loginSuccess        : 'Успешен вход.',
          invalidCredentials  : 'Невалидно име или парола.',
          logoutSuccess       : 'Успешен изход.',
          registrationSuccess : 'Успешна регистрация. Моля потвърдете имейла си, като следвате инструкциите които ви изпратихме.',
          passwordResetSuccess: 'След неколко минути ще получите имейл с инструкции, ако не получите имейл проверете спам папката или се обадете на телефона за обслужване на клиенти',

      });
}());