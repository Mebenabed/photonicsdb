var myApp = angular.module('myApp');

myApp.controller('MainsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('MainsController loaded...');

	$scope.getFoundries = function(){
		$http.get('/api/foundries').success(function(response){
			$scope.foundries = response;
		});
	}

	$scope.getFoundry = function(){
		var id = $routeParams.id;
		$http.get('/api/foundries/'+id).success(function(response){
			$scope.foundry = response;
		});
	}

	$scope.addFoundry = function(){
		console.log($scope.foundry);
		$http.post('/api/foundries/', $scope.foundry).success(function(response){
			window.location.href='#/foundries';
		});
	}

	$scope.updateFoundry = function(){
		var id = $routeParams.id;
		$http.put('/api/foundries/'+id, $scope.foundry).success(function(response){
			window.location.href='#/foundries';
		});
	}

	$scope.removeFoundry = function(id){
		$http.delete('/api/foundries/'+id).success(function(response){
			window.location.href='#/foundries';
		});
	}

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

	$scope.addBlock = function(){
		console.log($scope.block);
		$http.post('/api/blocks/', $scope.block).success(function(response){
			window.location.href='#/blocks';
		});
	}

	$scope.updateBlock = function(){
		var id = $routeParams.id;
		$http.put('/api/blocks/'+id, $scope.block).success(function(response){
			window.location.href='#/blocks';
		});
	}

	$scope.removeBlock = function(id){
		$http.delete('/api/blocks/'+id).success(function(response){
			window.location.href='#/blocks';
		});
	}

	$scope.getDefinitions = function(){
		$http.get('/api/definitions').success(function(response){
			$scope.definitions = response;
		});
	}

	$scope.getDefinition = function(){
		var id = $routeParams.id;
		$http.get('/api/definitions/'+id).success(function(response){
			$scope.definition = response;
		});
	}

	$scope.addDefinition = function(){
		console.log($scope.definition);
		$http.post('/api/definitions/', $scope.definition).success(function(response){
			window.location.href='#/definitions';
		});
	}

	$scope.updateDefinition = function(){
		var id = $routeParams.id;
		$http.put('/api/definitions/'+id, $scope.definition).success(function(response){
			window.location.href='#/definitions';
		});
	}

	$scope.removeDefinition = function(id){
		$http.delete('/api/definitions/'+id).success(function(response){
			window.location.href='#/definitions';
		});
	}

	$scope.getComponents = function(){
		$http.get('/api/components').success(function(response){
			$scope.components = response;
		});
	}

	$scope.getComponent = function(){
		var id = $routeParams.id;
		$http.get('/api/components/'+id).success(function(response){
			$scope.component = response;
		});
	}

	$scope.addComponent = function(){
		console.log($scope.component);
		$http.post('/api/components/', $scope.component).success(function(response){
			window.location.href='#/components';
		});
	}

	$scope.updateComponent = function(){
		var id = $routeParams.id;
		$http.put('/api/components/'+id, $scope.component).success(function(response){
			window.location.href='#/components';
		});
	}

	$scope.removeComponent = function(id){
		$http.delete('/api/components/'+id).success(function(response){
			window.location.href='#/components';
		});
	}

}]);
