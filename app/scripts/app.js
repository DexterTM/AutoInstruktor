'use strict';

/**
 * @ngdoc overview
 * @name autoInstruktorApp
 * @description
 * # autoInstruktorApp
 *
 * Main module of the application.
 */
angular
  .module('autoInstruktorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/znakovi', {
        templateUrl: 'views/znakovi.html',
        controller: 'ZnakoviCtrl',
        controllerAs: 'znakovi'
      })
      .when('/raskrsnice', {
        templateUrl: 'views/raskrsnice.html',
        controller: 'RaskrsniceCtrl',
        controllerAs: 'raskrsnice'
      })
      .when('/testovi', {
        templateUrl: 'views/testovi.html',
        controller: 'TestoviCtrl',
        controllerAs: 'testovi'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
