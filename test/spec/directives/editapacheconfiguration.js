'use strict';

describe('Directive: editApacheConfiguration', function () {

  // load the directive's module
  beforeEach(module('projectHomeGeneratorUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-apache-configuration></edit-apache-configuration>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editApacheConfiguration directive');
  }));
});
