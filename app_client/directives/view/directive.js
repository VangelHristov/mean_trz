(function(){
    'use strict';

    angular
      .module('app')
      .directive('trzView', function(){
           return {
              restrict:'AE',
              templateUrl:'directives/view/template.html'
          };
      });
}());