(function(){
    'use strict';

    angular
      .module('app')
      .directive('trzUserProfile', function(){
           return {
              restrict:'E',
              templateUrl:'profile/template',
              controller:'ProfileController',
              controllerAs:'user'
               /*TODO: add link method to get the email, fname and lname from the db*/
          };
      });
}());