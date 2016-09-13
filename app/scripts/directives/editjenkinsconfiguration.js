'use strict';

/**
 * @ngdoc directive
 * @name projectHomeGeneratorUiApp.directive:editJenkinsConfiguration
 * @description
 * # editJenkinsConfiguration
 */
angular.module('projectHomeGeneratorUiApp')
  .directive('editJenkinsConfiguration', function () {
    return {
      templateUrl: 'views/editjenkinsconfiguration.html',
      restrict: 'EA',
      scope: {
	    jenkinsConfiguration: '=',
	    editable: '='
	  }
    };
  });
