'use strict';
/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # Personal application
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'app.services',
    'app.filters',
    'app.directives',
    'app.animations',
    'app.models'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        item:'home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/skills', {
        item:'skills',
        templateUrl: 'views/skills.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        item:'contact',
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/work', {
        item:'contact',
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }).directive('disableAnimation', ['$animate', function($animate) {
      return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
      }
  }]).
   controller('MainCtrl', ['$scope', '$location', '$interval', 'AppModels', function($scope, $location, $interval, AppModels) {
      $scope.time = 0;
      $scope.isCurrentLocation = function(path, index){
        return path === $location.path()
      }

      $scope.navItems = AppModels.navItems;

      $scope.$on('$routeChangeStart', function(event, current, prev) {
          var newIndex;
          for(var i = 0; i < AppModels.navItems.length; i++) {
              if(current.$$route.originalPath == AppModels.navItems[i]["location"]) {
                newIndex = parseInt(AppModels.navItems[i]["id"]);
              }
          }
          if(newIndex < AppModels.currentViewIndex) {
             $scope.pageClass = 'view-animate-ltor';

          }
          else {
             $scope.pageClass = 'view-animate-rtol';
          }
          
          AppModels.currentViewIndex = newIndex;
          console.log('Route Start!!');
      });
      $scope.$on('$stateChangeStart', function(event, current, prev) {
          console.log('Route Success!!');
          
      });
  }]);

  function bootstrap() {
    setTimeout(function(){
        angular.bootstrap(angular.element("body")[0], ["portfolioApp"]); 
        console.log('Application Ready!!'); 
      }, 10);
   
   
  }
        
window.onload = bootstrap();



