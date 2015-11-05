'use strict';
/**
 * @ngdoc function
 * @name envirosolutionsApp.controller:ProductsCtrl
 * @description
 * # MainCtrl
 * Controller of the envirosolutionsApp
 */
angular.module('portfolioApp')
    .controller('WorkCtrl', ['$scope', 'PortfolioProvider', function ($scope, PortfolioProvider) {
       	$scope.getPortfolio = function(){
          PortfolioProvider.getPortfolio().then(function(data){
                $scope.arrPortfolio = data;
           },
          function(errorMessage){
              $scope.error=errorMessage;
          });
    };
    $scope.getPortfolio();
  }]);
