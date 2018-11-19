// importing ngRoute directive to provide routing services
var myApp = angular.module('myApp',['ngRoute']);
//configuring routes by specifying bound controller and view
myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'MainsController',
		templateUrl: 'views/home.html'
	})
	.when('/home', {
		controller:'MainsController',
		templateUrl: 'views/home.html'
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
	.when('/assign_component/:id',{
			controller:'MainsController',
			templateUrl: 'views/assign_component.html'
	})
	.when('/component/edit/:id',{
			controller:'MainsController',
			templateUrl: 'views/edit_component.html'
	})
	.when('/addf',{
			controller:'MainsController',
			templateUrl: 'views/addf.html'
	})
	.when('/addc',{
			controller:'MainsController',
			templateUrl: 'views/addc.html'
	})
	.when('/addb',{
			controller:'MainsController',
			templateUrl: 'views/addb.html'
	})
	.when('/add',{
			controller:'MainsController',
			templateUrl: 'views/add.html'
	})
	.when('/insights',{
			controller:'MainsController',
			templateUrl: 'views/insights.html'
	})
	.when('/scopes',{
			controller:'MainsController',
			templateUrl: 'views/scopes.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
