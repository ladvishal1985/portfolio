'use strict';
angular.module('app.directives', [])
	.directive('skillItem', function() {
		return {
		    restrict: 'E',
		    templateUrl: 'views/directives/skill-item.html',
		    scope: {
		      skillInfo: '=skill'
		    },
		    link: function ($scope, $element) {
               	$element.mouseenter(function() {
                   	$(this).find('.overlay').slideToggle("slow");
                });
                $element.mouseleave(function() {
                 	$(this).find('.overlay').slideToggle("slow");
                });
                /*var progressbar = $('#progressbar'),
			        max = progressbar.attr('max'),
			        time = (1000/max)*5, addValue = 0,   
			        value = 0;
			 
			    var loading = function() {
			        value += 1;
			        progressbar.value = value;
			        $('.progress-value').html(value + '%');
			 
			        if (value == max) {
			            clearInterval(animate);                    
			        }
			    };
			 
			    var animate = setInterval(function() {
			        loading();
			    }, time);*/
            },
		};
	});