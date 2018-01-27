(function tabsDirectiveModule() {
	'use strict';

	angular
		.module('app')
		.directive('trzTabs', function trzTabs() {
			return {
				restrict   : 'AE',
				templateUrl: 'directives/tabs/template.html',
				scope      : {
					tabs: '=',
					set : '&'
				}
			};
		});
}());