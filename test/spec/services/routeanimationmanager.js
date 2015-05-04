'use strict';

describe('Service: RouteAnimationManager', function () {

  // load the service's module
  beforeEach(module('mziolekplApp'));

  // instantiate service
  var RouteAnimationManager;
  beforeEach(inject(function (_RouteAnimationManager_) {
    RouteAnimationManager = _RouteAnimationManager_;
  }));

  it('should do something', function () {
    expect(!!RouteAnimationManager).toBe(true);
  });

});
