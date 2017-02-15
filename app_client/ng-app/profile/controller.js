(function () {
    'use strict';

    angular
      .module('app')
      .controller('ProfileController', ['userDataContext', 'notification', function (users, notification) {
          let ctrl         = this;
          ctrl.email       = '';
          ctrl.newEmail    = '';
          ctrl.fname       = '';
          ctrl.lname       = '';
          ctrl.saveChanges = function () {
            /*TODO:  make ajax call to the api to update the user profile information
                notify the user for success or failure
            * */
          };
      }]);
}());