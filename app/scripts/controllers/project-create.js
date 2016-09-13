'use strict';

/**
 * @ngdoc function
 * @name projectHomeGeneratorUiApp.controller:ProjectCreateCtrl
 * @description
 * # ProjectCreateCtrl
 * Controller of the projectHomeGeneratorUiApp
 */
angular.module('projectHomeGeneratorUiApp')
  .controller('ProjectCreateCtrl', function ($scope, $location, project, toaster) {
    $scope.projectCreated = false;
    $scope.apacheConfigured = false;
    $scope.jenkinsConfigured = false;
    $scope.sonarConfigured = false;
    
    $scope.links = [];
    $scope.tools = [];
    $scope.envs = [];
    $scope.envLinks = [];
    $scope.addEnvLink = [];

    $scope.createProject = function() {
    	project.createProject($scope.project).then(function(result) {
    		$scope.project = result.data;
    		$scope.projectCreated = true;
    	}, function(error) {
    		var errorMessage = error.statusText;
    		if(error.status === -1) {
    			errorMessage = 'The server takes too long to respond.'
    		}
    		toaster.pop('error', "Project creation failed", errorMessage);
    	});
    };

    $scope.showAddTool = function() {
    	$scope.tool = {};
    	$scope.addTool = true;
    	$scope.actionInProgress = true;
    };

    $scope.showAddLink = function() {
    	$scope.link = {};
    	$scope.addLink = true;
    	$scope.actionInProgress = true;
    };

    $scope.showAddEnv = function() {
    	$scope.env = {};
    	$scope.addEnv = true;
    	$scope.actionInProgress = true;
    };

    $scope.showAddEnvLink = function(envId) {
    	$scope.envLink = {environmentId:envId};
    	$scope.addEnvLink[envId] = true;
    	$scope.actionInProgress = true;
    };

    $scope.showApacheConfiguration = function() {
    	$scope.apacheConfiguration = {};
    	$scope.configureApache = true;
    	$scope.actionInProgress = true;
    };

    $scope.showJenkinsConfiguration = function() {
    	$scope.jenkinsConfiguration = {};
    	$scope.configureJenkins = true;
    	$scope.actionInProgress = true;
    };

    $scope.showSonarConfiguration = function() {
    	$scope.sonarConfiguration = {};
    	$scope.configureSonar = true;
    	$scope.actionInProgress = true;
    };

    $scope.saveTool = function() {
    	$scope.addTool = false;
    	$scope.actionInProgress = false;
    	project.addTool($scope.project.id, $scope.tool).then(function(result) {
    		$scope.tools.push(result.data);
    	});
    };

    $scope.saveLink = function() {
    	$scope.addLink = false;
    	$scope.actionInProgress = false;
    	project.addLink($scope.project.id, $scope.link).then(function(result) {
    		$scope.links.push(result.data);
    	});
    };

    $scope.saveEnv = function() {
    	$scope.addEnv = false;
    	$scope.actionInProgress = false;
    	project.addEnv($scope.project.id, $scope.env).then(function(result) {
    		$scope.envs.push(result.data);
    		$scope.envLinks[result.data.id] = [];
    	});
    };

    $scope.saveEnvLink = function(envId) {
    	$scope.addEnvLink[envId] = false;
    	$scope.actionInProgress = false;
    	project.addEnvLink($scope.project.id, envId, $scope.envLink).then(function(result) {
    		$scope.envLinks[envId].push(result.data);
    	});
    };

    $scope.saveJenkinsConfiguration = function() {
    	$scope.jenkinsConfiguration.jobsName = $scope.jenkinsConfiguration.jobs.split(',');
    	$scope.actionInProgress = false;
    	project.addJenkinsConfiguration($scope.project.id, $scope.jenkinsConfiguration).then(function(result) {
    		$scope.jenkinsConfiguration = result.data;
    		$scope.jenkinsConfiguration.jobs = $scope.jenkinsConfiguration.jobsName.join(',');
    		$scope.jenkinsConfigured = true;
    	});
    };

    $scope.saveApacheConfiguration = function() {
    	$scope.actionInProgress = false;
    	project.addApacheConfiguration($scope.project.id, $scope.apacheConfiguration).then(function(result) {
    		$scope.apacheConfiguration = result.data;
    		$scope.apacheConfigured = true;
    	});
    };

	$scope.saveSonarConfiguration = function() {
    	$scope.sonarConfiguration.resourceNames = $scope.sonarConfiguration.resources.split(',');
    	$scope.actionInProgress = false;
    	project.addSonarConfiguration($scope.project.id, $scope.sonarConfiguration).then(function(result) {
    		$scope.sonarConfiguration = result.data;
    		$scope.sonarConfiguration.resources = $scope.sonarConfiguration.resourceNames.join(',');
    		$scope.sonarConfigured = true;
    	});
    };

    $scope.finish = function() {
    	$location.path('project-list');
    };

  });
