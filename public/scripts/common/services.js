'use strict';
angular.module('app.services',['app.models'])
    .factory('PortfolioProvider',
                            ['$q', '$http', 'app.services.utils', 'AppModels', function($q, $http, Utils, AppModels){
        
        return {
            /*----------------Send Email------------------*/
            sendContact: function(params){
                 var deferred = $q.defer();
                 $http.post('/api/sendEmail', params).success(function(data) {
                    deferred.resolve(data);
                }).error(function(data) {
                    deferred.reject(data);
                });

                return deferred.promise;
            },
            /*----------------Get Skills------------------*/
            getSkills: function(){
                 var deferred = $q.defer();
                 $http.get('/api/skills').success(function(data) {
                    deferred.resolve(data);
                }).error(function(data) {
                    deferred.reject(data);
                });

                return deferred.promise;
            },

            getPortfolio: function(){
                 var deferred = $q.defer();
                 $http.get('/api/work').success(function(data) {
                    deferred.resolve(data);
                }).error(function(data) {
                    deferred.reject(data);
                });

                return deferred.promise;
            }
        };
    }])
            
    .service('app.services.utils',['AppModels', function(AppModels){
            this.urlBuilder = function(type){
                var url = "";
                url = url + AppModels.URL_BLOG+AppModels.ID_BLOG;
                url = url + type;
                url = url + '?key='+AppModels.BLOG_API_KEY;
                return url;
            }
    }]);
