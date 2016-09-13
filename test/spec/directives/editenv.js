'use strict';

describe('Directive: editEnv', function () {

  // load the directive's module
  beforeEach(module('projectHomeGeneratorUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-env></edit-env>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editEnv directive');
  }));
});
