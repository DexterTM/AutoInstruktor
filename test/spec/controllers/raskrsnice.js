'use strict';

describe('Controller: RaskrsniceCtrl', function () {

  // load the controller's module
  beforeEach(module('autoInstruktorApp'));

  var RaskrsniceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RaskrsniceCtrl = $controller('RaskrsniceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RaskrsniceCtrl.awesomeThings.length).toBe(3);
  });
});
