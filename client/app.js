var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'MainsController',
		templateUrl: 'views/mains.html'
	})
	.when('/mains', {
		controller:'MainsController',
		templateUrl: 'views/mains.html'
	})
	.when('/foundry/:id',{
			controller:'MainsController',
			templateUrl: 'views/foundry.html'
	})
	.when('/foundry/edit/:id',{
			controller:'MainsController',
			templateUrl: 'views/edit_foundry.html'
	})
	.when('/blocks', {
		controller:'MainsController',
		templateUrl: 'views/blocks.html'
	})
	.when('/block/:id',{
			controller:'MainsController',
			templateUrl: 'views/block.html'
	})
	.when('/block/edit/:id',{
			controller:'MainsController',
			templateUrl: 'views/edit_block.html'
	})
	.when('/block/fill/:id',{
			controller:'MainsController',
			templateUrl: 'views/fill_block.html'
	})
	.when('/definitions', {
		controller:'MainsController',
		templateUrl: 'views/definitions.html'
	})
	.when('/definition/:id',{
			controller:'MainsController',
			templateUrl: 'views/definition.html'
	})
	.when('/definition/edit/:id',{
			controller:'MainsController',
			templateUrl: 'views/edit_definition.html'
	})
	.when('/components',{
			controller:'MainsController',
			templateUrl: 'views/components.html'
	})
	.when('/component/:id',{
			controller:'MainsController',
			templateUrl: 'views/component.html'
	})
	.when('/component/edit/:id',{
			controller:'MainsController',
			templateUrl: 'views/edit_component.html'
	})
	.when('/add',{
			controller:'MainsController',
			templateUrl: 'views/add.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
