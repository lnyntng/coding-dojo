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
      expect(MainCtrl.calculateFizzBuzz(1)).toEqual([1]);
    });

    it('should equal 1,2,Fizz when param value is 3', function () {
      expect(MainCtrl.calculateFizzBuzz(3)).toEqual([1,2,'Fizz']);
    });

    it('should equal 1,2,Fizz,4,Buzz when param value is 5', function () {
      expect(MainCtrl.calculateFizzBuzz(5)).toEqual([1,2,'Fizz',4,'Buzz']);
    });

    it('should equal 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz when param value is 10', function () {
      expect(MainCtrl.calculateFizzBuzz(10)).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']);
    });
  });
});
