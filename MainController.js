var app = angular.module('madLibs', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
    })
    .when('/input', {
      templateUrl: 'input.html',
      controller: 'MainCtrl'
    })
    .when('/display', {
      templateUrl: 'display.html',
    })

    .otherwise({
      template: `<h1>This page does not exist.</h1>`
    });
  
  $locationProvider.hashPrefix('');
});
