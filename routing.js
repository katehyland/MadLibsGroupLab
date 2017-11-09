var app = angular.module('MadLibs', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'input.html',
      controller: 'inputController.js'
    })
    .when('/display', {
      templateUrl: 'display.html',
      controller: 'displayController.js'
    })

    .otherwise({
      template: `<h1>This page does not exist.</h1>`
    });
  
  $locationProvider.hashPrefix('');
});
