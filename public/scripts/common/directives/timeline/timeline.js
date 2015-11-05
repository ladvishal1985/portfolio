angular.module('portfolioApp')
	.directive('verticalTimeline', function() {
			return {
		    	restrict: 'E',
		    	templateUrl: 'views/directives/timeline.html',
		    	scope: {
			      workInfo: '=work'
			    },
		   		link: function ($scope, $element) {
	               
	               	var animate = setTimeout(function() {
			        	var $timeline_block = $('.cd-timeline-block');
					
						$timeline_block.each(function(){
							if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
								$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
							}
						});

						//on scolling, show/animate timeline blocks when enter the viewport
						$(window).on('scroll', function(){
							$timeline_block.each(function(){
								if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
									$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
								}
							});
		            	});
			    	}, 100);
	               	
				}
			}
	});