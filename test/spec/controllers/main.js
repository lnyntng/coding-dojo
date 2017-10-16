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
      scope.calculateFizzBuzz(1);
      expect(scope.array).toEqual([1]);
    });

    it('should equal 1,2,Fizz when param value is 3', function () {
      scope.calculateFizzBuzz(3);
      expect(scope.array).toEqual([1,2,'Fizz']);
    });

    it('should equal 1,2,Fizz,4,Buzz when param value is 5', function () {
      scope.calculateFizzBuzz(5);
      expect(scope.array).toEqual([1,2,'Fizz',4,'Buzz']);
    });

    it('should equal 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz when param value is 10', function () {
      scope.calculateFizzBuzz(10);
      expect(scope.array).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']);
    });

    it('should equal 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz when param value is 13', function () {
      scope.calculateFizzBuzz(13);
      expect(scope.array).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,12,'Fizz']);
    });
  });
});
