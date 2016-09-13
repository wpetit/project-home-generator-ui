'use strict';

/**
 * @ngdoc function
 * @name projectHomeGeneratorUiApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the projectHomeGeneratorUiApp
 */
angular.module('projectHomeGeneratorUiApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return $location.path().startsWith(viewLocation);
    };
  });
