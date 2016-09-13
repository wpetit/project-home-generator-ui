'use strict';

/**
 * @ngdoc directive
 * @name projectHomeGeneratorUiApp.directive:editEnv
 * @description
 * # editEnv
 */
angular.module('projectHomeGeneratorUiApp')
  .directive('editEnv', function () {
    return {
      templateUrl: 'views/editenv.html',
      restrict: 'EA',
      scope: {
	    env: '='
	  }
    };
  });
