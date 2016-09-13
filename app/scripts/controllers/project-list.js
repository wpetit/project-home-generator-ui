'use strict';

/**
 * @ngdoc function
 * @name projectHomeGeneratorUiApp.controller:ProjectListCtrl
 * @description
 * # ProjectListCtrl
 * Controller of the projectHomeGeneratorUiApp
 */
angular.module('projectHomeGeneratorUiApp')
  .controller('ProjectListCtrl', function ($scope, project, $location) {

  	$scope.init = function() {
  		project.findProjects().then(function(result) {
		  $scope.projects = result.data;
	    });	
  	};
    
    $scope.createProject = function() {
    	$location.path('project-create');
    };

    $scope.deleteProject = function(index, id) {
    	project.deleteProject(id).then(function() {
    		$scope.projects.splice(index, 1);
    	});
    };

    $scope.generateProject = function(projectId) {
    	$location.path('project-generate/'+projectId);
    };

    $scope.editProject = function(projectId) {
    	$location.path('project-edit/'+projectId);
    };
   
  });
