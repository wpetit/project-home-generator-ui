'use strict';

describe('Directive: editTool', function () {

  // load the directive's module
  beforeEach(module('projectHomeGeneratorUiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-tool></edit-tool>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editTool directive');
  }));
});
