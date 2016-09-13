'use strict';

describe('Controller: ProjectGenerateCtrl', function () {

  // load the controller's module
  beforeEach(module('projectHomeGeneratorUiApp'));

  var ProjectGenerateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectGenerateCtrl = $controller('ProjectGenerateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProjectGenerateCtrl.awesomeThings.length).toBe(3);
  });
});
