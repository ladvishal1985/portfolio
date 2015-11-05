'use strict';
angular.module('portfolioApp')
  .controller('AboutCtrl',['$scope', 'PortfolioProvider', function ($scope, PortfolioProvider) {
    $scope.sendContactUs = function(){
          PortfolioProvider.getSkills().then(function(data){
                $scope.skills = data;
                $scope.selection = $scope.skills[0]["name"];
          },
          function(errorMessage){
              $scope.error=errorMessage;
          });
    };  
    $scope.sendContactUs();
    $scope.idSelectedSkill = 0;
    $scope.changeSelTech =function(index) {
         $scope.idSelectedSkill = index;
         $scope.selection = $scope.skills[index]["name"];
    };
   
    
  }]);
