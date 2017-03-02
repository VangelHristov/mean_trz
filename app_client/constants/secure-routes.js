(function(){
    'use strict';

    angular
      .module('app')
      .constant('secureRoutes', [
        /^(api\/users\/.*)$/,
        /^(api\/companies.*)$/,
        /^(api\/dossiers.*)$/,
        /^(api\/work-contracts.*)$/
      ]);
}());