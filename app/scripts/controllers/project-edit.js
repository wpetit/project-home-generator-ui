'use strict';

/**
 * @ngdoc function
 * @name projectHomeGeneratorUiApp.controller:ProjectEditCtrl
 * @description
 * # ProjectEditCtrl
 * Controller of the projectHomeGeneratorUiApp
 */
angular.module('projectHomeGeneratorUiApp')
  .controller('ProjectEditCtrl', function ($scope, $routeParams, $location, project) {
    $scope.init = function() {
    	$scope.projectId = $routeParams.projectId;
    	$scope.envLinks = [];
    	$scope.addEnvLink = [];

    	project.getProject($scope.projectId).then(function(result) {
    		$scope.project = result.data;
    	});
  		project.getSonarConfiguration($scope.projectId).then(function(result) {
			$scope.sonarConfiguration = result.data;
			$scope.sonarConfiguration.resources = $scope.sonarConfiguration.resourceNames.join(',');
		});
		project.getJenkinsConfiguration($scope.projectId).then(function(result) {
    		$scope.jenkinsConfiguration = result.data;
    		$scope.jenkinsConfiguration.jobs = $scope.jenkinsConfiguration.jobsName.join(',');
    	});
    	project.getLinks($scope.projectId).then(function(result) {
			$scope.links = result.data;
		});
		project.getTools($scope.projectId).then(function(result) {
			$scope.tools = result.data;
		});
		project.getEnvs($scope.projectId).then(function(result) {
			$scope.envs = result.data;
			angular.forEach($scope.envs, function(env) {
				project.getEnvLinks($scope.project, env.id).then(function(result) {
					$scope.envLinks[env.id] = result.data;
				});
			});
		});
		project.getApacheConfiguration($scope.projectId).then(function(result) {
			$scope.apacheConfiguration = result.data;
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

    $scope.saveTool = function() {
    	$scope.addTool = false;
    	$scope.actionInProgress = false;
    	project.addTool($scope.project.id, $scope.tool).then(function(result) {
    		$scope.tools.push(result.data);
    	});
    };

    $scope.saveProject = function() {
    	project.updateProject($scope.project.id, $scope.project).then(function(result) {
    		$scope.project = result.data;
    	});
    }

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

    $scope.saveApacheConfiguration = function() {
    	$scope.actionInProgress = false;
    	if($scope.apacheConfiguration.id) {
	    	project.updateApacheConfiguration($scope.project.id, $scope.apacheConfiguration).then(function(result) {
	    		$scope.apacheConfiguration = result.data;
	    	});
	    } else {
	    	project.addApacheConfiguration($scope.project.id, $scope.apacheConfiguration).then(function(result) {
	    		$scope.apacheConfiguration = result.data;
	    	});
	    }
    };

    $scope.saveJenkinsConfiguration = function() {
    	$scope.jenkinsConfiguration.jobsName = $scope.jenkinsConfiguration.jobs.split(',');
    	$scope.actionInProgress = false;
    	if($scope.jenkinsConfiguration.id) {
    		project.updateJenkinsConfiguration($scope.project.id, $scope.jenkinsConfiguration).then(function(result) {
	    		$scope.jenkinsConfiguration = result.data;
	    		$scope.jenkinsConfiguration.jobs = $scope.jenkinsConfiguration.jobsName.join(',');
	    	});
    	} else {
	    	project.addJenkinsConfiguration($scope.project.id, $scope.jenkinsConfiguration).then(function(result) {
	    		$scope.jenkinsConfiguration = result.data;
	    		$scope.jenkinsConfiguration.jobs = $scope.jenkinsConfiguration.jobsName.join(',');
	    	});
    	}
    };

    $scope.saveSonarConfiguration = function() {
    	$scope.sonarConfiguration.resourceNames = $scope.sonarConfiguration.resources.split(',');
    	$scope.actionInProgress = false;
    	if($scope.sonarConfiguration.id) {
    		project.updateSonarConfiguration($scope.project.id, $scope.sonarConfiguration).then(function(result) {
	    		$scope.sonarConfiguration = result.data;
    			$scope.sonarConfiguration.resources = $scope.sonarConfiguration.resourceNames.join(',');
	    	});
    	} else {
	    	project.addSonarConfiguration($scope.project.id, $scope.sonarConfiguration).then(function(result) {
	    		$scope.sonarConfiguration = result.data;
    			$scope.sonarConfiguration.resources = $scope.sonarConfiguration.resourceNames.join(',');
	    	});
    	}
    };

    $scope.deleteLink = function(index, linkId) {
    	project.deleteLink($scope.project.id, linkId).then(function() {
    		$scope.links.splice(index, 1);
    	});
    };

    $scope.deleteTool = function(index, toolId) {
    	project.deleteTool($scope.project.id, toolId).then(function() {
    		$scope.tools.splice(index, 1);
    	});
    };

    $scope.deleteEnv = function(index, envId) {
    	project.deleteEnv($scope.project.id, envId).then(function() {
    		$scope.envs.splice(index, 1);
    	});
    };

    $scope.deleteEnvLink = function(index, envId, envLinkId) {
    	project.deleteEnvLink($scope.project.id, envId, envLinkId).then(function() {
    		$scope.envLinks[envId].splice(index, 1);
    	});
    };

    $scope.finish = function() {
    	$location.path('project-list');
    };
  });
