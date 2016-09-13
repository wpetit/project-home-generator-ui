'use strict';

/**
 * @ngdoc overview
 * @name projectHomeGeneratorUiApp
 * @description
 * # projectHomeGeneratorUiApp
 *
 * Main module of the application.
 */
angular
  .module('projectHomeGeneratorUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toaster',
    'ngProgress'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/project-list', {
        templateUrl: 'views/project-list.html',
        controller: 'ProjectListCtrl',
        controllerAs: 'projectList'
      })
      .when('/project-create', {
        templateUrl: 'views/project-create.html',
        controller: 'ProjectCreateCtrl',
        controllerAs: 'projectCreate'
      })
      .when('/project-edit/:projectId', {
        templateUrl: 'views/project-edit.html',
        controller: 'ProjectEditCtrl',
        controllerAs: 'projectEdit'
      })
      .when('/project-generate/:projectId', {
        templateUrl: 'views/project-generate.html',
        controller: 'ProjectGenerateCtrl',
        controllerAs: 'projectGenerate'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });


angular.module('projectHomeGeneratorUiApp')
  .factory('globalHttpInterceptor', function ($rootScope, $q) {
    return {
      'request': function(config) {
        config.timeout = 3000;
        $rootScope.currentActions++;
        $rootScope.progressInstance.start();
        return config;
      },
      'response': function(response) {
        $rootScope.currentActions--;
        if($rootScope.currentActions === 0) {
          $rootScope.progressInstance.complete();  
        }
        return response;
      },
      'responseError': function(rejection) {
        $rootScope.currentActions--;
        if($rootScope.currentActions === 0) {
          $rootScope.progressInstance.complete();  
        }
        return $q.reject(rejection);
      }
    };
 });

angular
  .module('projectHomeGeneratorUiApp')
  .config(function($httpProvider){
    $httpProvider.interceptors.push('globalHttpInterceptor');
  });

angular
  .module('projectHomeGeneratorUiApp')
  .config(function( $compileProvider ) {   
    //allow blob as valid href
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob):/);
  });