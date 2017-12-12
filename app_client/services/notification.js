(function () {
    'use strict';

    angular
      .module('app')
      .factory('notification', ['$window', function ($window) {
          let toastr = $window.toastr;

          toastr.options = {
              "closeButton"      : false,
              "debug"            : false,
              "newestOnTop"      : true,
              "progressBar"      : true,
              "positionClass"    : "toast-top-right",
              "preventDuplicates": false,
              "onclick"          : null,
              "showDuration"     : "5000",
              "hideDuration"     : "3000",
              "timeOut"          : "5000",
              "extendedTimeOut"  : "1000",
              "showEasing"       : "swing",
              "hideEasing"       : "linear",
              "showMethod"       : "fadeIn",
              "hideMethod"       : "fadeOut",
              "body-output-type" : "trustedHtml"
          };

          function addLineBreak(msg) {
              return msg.replace(/(?:\r\n|\r|\n)/g, '<br>');
          }

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
      }]);
}());