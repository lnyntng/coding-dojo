'use strict';

describe('Controller: MainCtrl', function () {

  describe('Method: calculateFizzBuzz', function () {  
    // load the controller's module
    beforeEach(module('codingDojoApp'));

    var MainCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should equal 1 when param value is 1', function () {
      expect(MainCtrl.calculateFizzBuzz(1)).toEqual(1);
    });
  });
});
