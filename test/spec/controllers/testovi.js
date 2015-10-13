'use strict';

describe('Controller: TestoviCtrl', function () {

  // load the controller's module
  beforeEach(module('autoInstruktorApp'));

  var TestoviCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestoviCtrl = $controller('TestoviCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestoviCtrl.awesomeThings.length).toBe(3);
  });
});
