'use strict';

/**
 * @ngdoc function
 * @name polymerMaterialTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the polymerMaterialTestApp
 */
angular.module('polymerMaterialTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
