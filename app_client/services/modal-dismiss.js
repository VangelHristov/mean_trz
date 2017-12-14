(function modalDismissFactoryModule() {
	'use strict';

	angular
		.module('app')
		.factory('modalDismiss', function modalDismiss() {
			return function dismiss() {
				$('.modal-dismiss')
					.trigger('click');
			};
		});
}());