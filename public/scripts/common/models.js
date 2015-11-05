'use strict';
angular.module('app.models',[])
    .service('AppModels', ['$q','$http', function($q, $http){
        /**------Constants---------**/
        this.URL_BLOG = "https://www.googleapis.com/blogger/v3/blogs/";
        this.ID_BLOG = "8531250650146036449";
        this.BLOG_API_KEY="AIzaSyAk1E6Lxur4hgiKKxDjE2UAJLGX9oKpaJU";

        /*** Application Shared Variables ****/
		this.blogItem = [];
		this.postsList = [];
        this.postItem = {};
        this.navItems = [{id:1, location:"/home", icon:"icon-user", label:"Home"},
                         {id:2, location:"/skills", icon:"icon-dropbox", label:"Skills"},
                         {id:3, location:"/work", icon:"icon-cog", label:"Work"},
                         {id:4, location:"/contact", icon:"icon-comment", label:"Contact"}
                        ]
	 this.currentViewIndex = 1;

  }]);