(function(){
    'use strict';

    angular
      .module('app')
      .controller('CompaniesController',[function(){
        let ctrl = this;
        ctrl.companies=[
            {
                name:'Bulgartabak',
                bulstat:'1212121212',
                director:'Ivan Petrov',
                _id:'123121242534534'
            },
            {
                name:'Carlsberg',
                bulstat:'1212143245',
                director:'George Ganchev',
                _id:'asdadsasda1231'
            },
            {
                name:'Struma teks',
                bulstat:'09347587367',
                director:'Martin Ivanov',
                _id:'12786q7uwhayduyh9'
            }
        ];
      }]);
}());