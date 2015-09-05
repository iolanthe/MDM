'use strict';

/**
 * @ngdoc function
 * @name mdmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mdmApp
 */
angular.module('mdmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
