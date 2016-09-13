'use strict';

/**
 * @ngdoc directive
 * @name projectHomeGeneratorUiApp.directive:editSonarConfiguration
 * @description
 * # editSonarConfiguration
 */
angular.module('projectHomeGeneratorUiApp')
  .directive('editSonarConfiguration', function () {
    return {
      templateUrl: 'views/editsonarconfiguration.html',
      restrict: 'EA',
      scope: {
	    sonarConfiguration: '=',
	    editable: '='
	  }
    };
  });
