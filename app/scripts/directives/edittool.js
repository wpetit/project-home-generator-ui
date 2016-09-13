'use strict';

/**
 * @ngdoc directive
 * @name projectHomeGeneratorUiApp.directive:editTool
 * @description
 * # editTool
 */
angular.module('projectHomeGeneratorUiApp')
  .directive('editTool', function () {
    return {
      templateUrl: 'views/edittool.html',
      restrict: 'EA',
      scope: {
	    tool: '='
	  }
    };
  });
