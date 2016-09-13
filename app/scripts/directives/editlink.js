'use strict';

/**
 * @ngdoc directive
 * @name projectHomeGeneratorUiApp.directive:editLink
 * @description
 * # editLink
 */
angular.module('projectHomeGeneratorUiApp')
  .directive('editLink', function () {
    return {
      templateUrl: 'views/editlink.html',
      restrict: 'EA',
      scope: {
	    link: '='
	  }
    };
  });

