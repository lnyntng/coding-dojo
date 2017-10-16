'use strict';

/**
 * @ngdoc function
 * @name codingDojoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codingDojoApp
 */
angular.module('codingDojoApp')
  .controller('MainCtrl', function () {
  	this.value = 1;
  	this.array = [1];

    this.calculateFizzBuzz = function(value) {
    	var arr = [];
    	for (var i = 2; i <= value; i++) {
    		if(i % 3 === 0) {
    			arr.push('Fizz');
    		} else if(i % 5 === 0) {
    			arr.push('Buzz');
    		} else {
    			arr.push(i);
    		}
    	}
    	this.arr = arr;
    	return arr;
    };
  });
