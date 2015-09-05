'use strict';

/**
 * @ngdoc overview
 * @name mdmApp
 * @description
 * # mdmApp
 *
 * Main module of the application.
 */
angular
  .module('mdmApp', [
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
        controller: 'MainCtrl'
      })
      .when('/learn', {
        templateUrl: 'views/learn.html',
      })
      .when('/do', {
        templateUrl: 'views/do.html',
      })
      .when('/share', {
        templateUrl: 'views/share.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
