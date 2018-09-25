var myApp = angular.module('myApp');

myApp.controller('BlocksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BlocksController loaded...');

$scope.getBlocks = function(){
	$http.get('/api/blocks').success(function(response){
		$scope.blocks = response;
	});
}

$scope.getBlock = function(){
	var id = $routeParams.id;
	$http.get('/api/blocks/'+id).success(function(response){
		$scope.block = response;
	});
}

$scope.removeBlock = function(id){
	$http.delete('/api/blocks/'+id).success(function(response){
		window.location.href='#/blocks';
	});
}

}]);
