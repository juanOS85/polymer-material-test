'use strict';

/**
 * @ngdoc function
 * @name polymerMaterialTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the polymerMaterialTestApp
 */
angular.module('polymerMaterialTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
