'use strict';

/**
 * @ngdoc function
 * @name codingDojoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codingDojoApp
 */
angular.module('codingDojoApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.value = 1;

    $scope.calculateFizzBuzz = function(value) {
    	$scope.array = [];
    	for (var i = 1; i <= value; i++) {
    		if(i % 3 === 0 || /3/.test(i)) {
    			$scope.array.push('Fizz');
    		} else if(i % 5 === 0 || /5/.test(i)) {
    			$scope.array.push('Buzz');
    		} else {
    			$scope.array.push(i);
    		}
    	}
    };
  });
