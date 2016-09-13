'use strict';

/**
 * @ngdoc function
 * @name projectHomeGeneratorUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectHomeGeneratorUiApp
 */
angular.module('projectHomeGeneratorUiApp')
  .controller('MainCtrl', function ($rootScope, ngProgressFactory) {
  	$rootScope.currentActions = 0;
  	$rootScope.progressInstance = ngProgressFactory.createInstance();
  });
