(function notificationFactoryModule() {
	'use strict';

	angular
		.module('app')
		.factory('notification', [
			'$window', function notification($window) {
				let toastr = $window.toastr;

				toastr.options = {
					"closeButton"      : true,
					"debug"            : false,
					"newestOnTop"      : true,
					"progressBar"      : false,
					"preventDuplicates": false,
					"onclick"          : null,
					"positionClass"    : "toast-top-right",
					"showDuration"     : "3000",
					"hideDuration"     : "3000",
					"timeOut"          : "5000",
					"extendedTimeOut"  : "1000",
					"showEasing"       : "swing",
					"hideEasing"       : "swing",
					"showMethod"       : "slideDown",
					"hideMethod"       : "slideUp",
					"body-output-type" : "trustedHtml"
				};

				//function addLineBreak(msg) {
				//	return msg.replace(/(?:\r\n|\r|\n)/g, '<br>');
				//}

				return {
					success: function (msg) {
						toastr.success(msg);
					},
					info   : function (msg) {
						toastr.info(msg);
					},
					warning: function (msg) {
						toastr.warning(msg);
					},
					error  : function (msg) {
						toastr.error(msg);
					}
				};
			}
		]);
}());