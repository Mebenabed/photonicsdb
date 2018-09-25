var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/blocks', {
		controller:'BlocksController',
		templateUrl: 'views/blocks.html'
	})
	.when('/block/:id',{
			controller:'BlocksController',
			templateUrl: 'views/block.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
