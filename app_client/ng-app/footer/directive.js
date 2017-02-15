(function(){
    'use strict';

    angular
      .module('app')
      .directive('trzFooter', function(){
           return {
              restrict:'E',
              templateUrl:'footer/template.html'
          };
      });
}());