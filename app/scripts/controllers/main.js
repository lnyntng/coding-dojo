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

    this.calculateFizzBuzz = function(value) {
    	var arr = '1';
    	for (var i = 2; i <= value; i++) {
    		if(i % 3 === 0) {
    			arr += ',Fizz';
    		} else if(i % 5 === 0) {
    			arr += ',Buzz';
    		} else {
    			arr += ',' + i;
    		}
    	}
    	console.log(arr);
    	return arr;
    };
  });
