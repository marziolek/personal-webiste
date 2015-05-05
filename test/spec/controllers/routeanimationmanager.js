'use strict';

describe('Controller: RouteanimationmanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('mziolekplApp'));

  var RouteanimationmanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RouteanimationmanagerCtrl = $controller('RouteanimationmanagerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
