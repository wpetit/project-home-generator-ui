'use strict';

/**
 * @ngdoc directive
 * @name projectHomeGeneratorUiApp.directive:editEnvLink
 * @description
 * # editEnvLink
 */
angular.module('projectHomeGeneratorUiApp')
  .directive('editEnvLink', function () {
    return {
      templateUrl: 'views/editenvlink.html',
      restrict: 'EA',
      scope: {
	    envLink: '='
	  }
    };
  });
