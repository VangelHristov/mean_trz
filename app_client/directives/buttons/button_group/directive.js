(function buttonGroupDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive(
			'trzButtonGroup',
			function trzButtonGroup() {
				return {
					restrict   : 'AE',
					templateUrl: 'directives/buttons/button_group/template.html',
					scope      : {
						buttons: '='
					}
				};
			}
		);
}());