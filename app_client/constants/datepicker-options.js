(function datePickerOptionsModule() {
	'use strict';

	angular
		.module('app')
		.constant('datepickerOptions', {
			dateOptions: {
				startingDay: 1
			},
			currentText: 'Днес',
			closeText  : 'Затвори',
			clearText  : 'Изчисти',
			format     : 'dd.MM.yyyy'
		});
}());