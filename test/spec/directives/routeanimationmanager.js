'use strict';

describe('Directive: routeAnimationManager', function () {

  // load the directive's module
  beforeEach(module('mziolekplApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<route-animation-manager></route-animation-manager>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the routeAnimationManager directive');
  }));
});
