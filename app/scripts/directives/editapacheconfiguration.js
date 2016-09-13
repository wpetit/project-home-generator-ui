'use strict';

/**
 * @ngdoc directive
 * @name projectHomeGeneratorUiApp.directive:editApacheConfiguration
 * @description
 * # editApacheConfiguration
 */
angular.module('projectHomeGeneratorUiApp')
  .directive('editApacheConfiguration', function () {
    return {
      templateUrl: 'views/editapacheconfiguration.html',
      restrict: 'EA',
      scope: {
	    apacheConfiguration: '=',
	    editable: '='
	  }
    };
  });
