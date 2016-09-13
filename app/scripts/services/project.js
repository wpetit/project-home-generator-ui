'use strict';

/**
 * @ngdoc service
 * @name projectHomeGeneratorUiApp.project
 * @description
 * # project
 * Service in the projectHomeGeneratorUiApp.
 */
angular.module('projectHomeGeneratorUiApp')
  .service('project', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.findProjects = function() {
    	return $http.get('/project-home-generator/project');
    	//return $q(function(resolve, reject) {
    	//  var result = {};
    	  //result.data = [{name:'project1',id:'1'},{name:'project2',id:'2'}];
		  //setTimeout(function() {
		      //resolve(result);
		  //}, 1000);
		//});
    };

    this.createProject = function(project) {
    	return $http.put('/project-home-generator/project', project);
    };

    this.getProject = function(projectId) {
    	return $http.get('/project-home-generator/project/'+projectId);
    };

    this.deleteProject = function(projectId) {
    	return $http.delete('/project-home-generator/project/'+projectId);
    };

    this.addTool = function(projectId, tool) {
    	return $http.put('/project-home-generator/project/'+projectId+'/tool', tool);
    };

    this.deleteTool = function(projectId, toolId) {
    	return $http.delete('/project-home-generator/project/'+projectId+'/tool/'+toolId);
    };

    this.getTools = function(projectId) {
    	return $http.get('/project-home-generator/project/'+projectId+'/tool');
    };

    this.addLink = function(projectId, link) {
    	return $http.put('/project-home-generator/project/'+projectId+'/link', link);
    };

    this.getLinks = function(projectId) {
    	return $http.get('/project-home-generator/project/'+projectId+'/link');
    };

    this.deleteLink = function(projectId, linkId) {
		return $http.delete('/project-home-generator/project/'+projectId+'/link/'+linkId);
    };

    this.addEnv = function(projectId, env) {
    	return $http.put('/project-home-generator/project/'+projectId+'/environment', env);
    };

    this.deleteEnv = function(projectId, envId) {
    	return $http.delete('/project-home-generator/project/'+projectId+'/environment/'+envId);
    };

    this.getEnvs = function(projectId) {
    	return $http.get('/project-home-generator/project/'+projectId+'/environment');
    };

    this.addEnvLink = function(projectId, envId, envLink) {
    	return $http.put('/project-home-generator/project/'+projectId+'/environment/'+envId+'/link', envLink);
    };

    this.deleteEnvLink = function(projectId, envId, envLinkId) {
    	return $http.delete('/project-home-generator/project/'+projectId+'/environment/'+envId+'/link/'+envLinkId);
    };

    this.getEnvLinks = function(projectId, envId) {
    	return $http.get('/project-home-generator/project/'+projectId+'/environment/'+envId+'/link');
    };

    this.addApacheConfiguration = function(projectId, apacheConfiguration) {
    	return $http.put('/project-home-generator/project/'+projectId+'/apache', apacheConfiguration);
    };

    this.updateApacheConfiguration = function(projectId, apacheConfiguration) {
    	return $http.post('/project-home-generator/project/'+projectId+'/apache/'+apacheConfiguration.id, apacheConfiguration);
    };

    this.getApacheConfiguration = function(projectId) {
    	return $http.get('/project-home-generator/project/'+projectId+'/apache');
    };

    this.addJenkinsConfiguration = function(projectId, jenkinsConfiguration) {
    	return $http.put('/project-home-generator/project/'+projectId+'/jenkins', jenkinsConfiguration);
    };

    this.updateJenkinsConfiguration = function(projectId, jenkinsConfiguration) {
    	return $http.post('/project-home-generator/project/'+projectId+'/jenkins/'+jenkinsConfiguration.id, jenkinsConfiguration);
    };

    this.getJenkinsConfiguration = function(projectId) {
    	return $http.get('/project-home-generator/project/'+projectId+'/jenkins');
    };

    this.addSonarConfiguration = function(projectId, sonarConfiguration) {
    	return $http.put('/project-home-generator/project/'+projectId+'/sonar', sonarConfiguration);
    };

    this.getSonarConfiguration = function(projectId) {
    	return $http.get('/project-home-generator/project/'+projectId+'/sonar');
    };

    this.updateSonarConfiguration = function(projectId, sonarConfiguration) {
    	return $http.post('/project-home-generator/project/'+projectId+'/sonar/'+sonarConfiguration.id, sonarConfiguration);
    };

    this.generateProject = function(projectId) {
    	return $http.get('/project-home-generator/project/'+projectId+'/conf');
    };


  });
