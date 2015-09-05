'use strict';

/**
 * @ngdoc function
 * @name mdmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mdmApp
 */
angular.module('mdmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
