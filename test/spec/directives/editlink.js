'use strict';

describe('Directive: editLink', function () {

  // load the directive's module
  beforeEach(module('projectHomeGeneratorUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-link></edit-link>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editLink directive');
  }));
});
