'use strict';

/**
 * @ngdoc function
 * @name envirosolutionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the envirosolutionsApp
 */
angular.module('portfolioApp')
  	.controller('HomeCtrl', function($scope) {
    	var animate = setTimeout(function() {
    		$(".profile-pic").sparkle({
			  color: ["#E8634E", "#FFFFFF"],
			  count: 100,
			  overlap: 0,
			  speed: 1.2,
			  minSize: 4,
			  maxSize: 10,
			  direction: "down"
			});	
    	}, 1000);
    	
	});
