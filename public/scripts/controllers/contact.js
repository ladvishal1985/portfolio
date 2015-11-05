'use strict';
angular.module('portfolioApp')
  .controller('ContactCtrl', ['$scope', 
  							              'PortfolioProvider', '$modal', function ($scope, PortfolioProvider, $modal) {
        	$scope.contactObj = {};
        	$scope.ph_numbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
         	$scope.sendContactUs = function(){
            	PortfolioProvider.sendContact($scope.contactObj).then(function(data){
                    $scope.message = data;
                    var modalInstance = $modal.open({
                      animation: $scope.animationsEnabled,
                      templateUrl: 'mailSuccess.html',
                    });
            	},
            	function(errorMessage){
              		$scope.error=errorMessage;
            	});
      	};  
    
    //sendContactUs();  
    
  }]);
