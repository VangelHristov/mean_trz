(function () {
    'use strict';

    angular
      .module('app')
      .constant('errorMessages', {
          emailNotUnique             : 'Имейлът вече е регистриран.',
          requiredField              : 'Моля попълнете. Полето е задължително.',
          minAge                     : 'Лицето е под минималната възраст.',
          invalidValue               : 'Невалидена стойност.',
          mustBeCyrillic             : 'Всички символи трябва да са на кирилица.',
          invalidWorkContract        : 'Номер на договор трябва да съдържа само цифри или да започва с главна буква последвана от една или повече цифри. ',
          salaryAmountBelowMinimum   : 'Основната заплата не може да бъде по-ниска от минималната заплата (460).',
          invalidContractLength      : 'Срокът на договор не може да е по-малък от 1 месец.',
          invalidWorkHours           : 'Работното време трябва да бъде между 1 и 8 часа.',
          invalidVacationLength      : 'Размерът на отпуск трябва да бъде минимум 20 дни.',
          invalidDateFormat          : 'Датата трябва да бъде във формат дд.мм.гггг. На пример 03.03.2017.',
      });
}());