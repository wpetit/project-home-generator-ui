'use strict';

/**
 * @ngdoc function
 * @name projectHomeGeneratorUiApp.controller:ProjectGenerateCtrl
 * @description
 * # ProjectGenerateCtrl
 * Controller of the projectHomeGeneratorUiApp
 */
angular.module('projectHomeGeneratorUiApp')
  .controller('ProjectGenerateCtrl', function ($scope, project, $routeParams) {

  	$scope.init = function() {
  		project.getProject($routeParams.projectId).then(function(result) {
   			$scope.project = result.data;
   			return project.getJenkinsConfiguration($routeParams.projectId).then(function(result) {
   				$scope.jenkinsUrl = result.data.url;
   				return project.getSonarConfiguration($routeParams.projectId).then(function(result) {
	   				$scope.sonarUrl = result.data.url;
	   				project.generateProject($routeParams.projectId).then(function(result) {
   						$scope.generated = result.data;
   						$scope.updateGeneratedUrl();
   					});
	   			});
   			});

   		});
  	};

  	$scope.generateJenkinsBase64 = function() {
  		$scope.base64Jenkins = btoa($scope.jenkinsUser + ':' + $scope.jenkinsPassword);
  		$scope.generated.jenkinsBase64UsrPwd = $scope.base64Jenkins;
  		$scope.updateGeneratedUrl();
  	};

  	$scope.generateSonarBase64 = function() {
  		$scope.base64Sonar = btoa($scope.sonarUser + ':' + $scope.sonarPassword);
  		$scope.generated.sonarBase64UsrPwd = $scope.base64Sonar;
  		$scope.updateGeneratedUrl();
  	};

  	$scope.updateGeneratedUrl = function() {
		var json = JSON.stringify($scope.generated);
		var blob = new Blob([json], {type: "application/json"});
		$scope.generateUrl  = URL.createObjectURL(blob);
	};
	
  });
