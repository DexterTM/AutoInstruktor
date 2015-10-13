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
      .otherwise({
        redirectTo: '/'
      });
  });
