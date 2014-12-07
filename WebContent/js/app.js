'use strict';


var twitter = angular.module('twitterApp',['ngRoute','twitter.controller','twitter.services','twitter.directive']);

twitter.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.
		when("/home",{
			templateUrl : "partials/home.html",
			controller : "homeController"
		}).
		when("/profile",{
			templateUrl : "partials/profile.html",
			controller : "profileController"
		}).
		when("/tweetpost",{
			templateUrl : "partials/tweetpost.html",
			contoller : "postController"
		}).
		otherwise({redirectTo : "/home"});
		
	
}]);
