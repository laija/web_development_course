var myApp = angular.module('myApp', []); //array of dependencies, is a list of modules my app uses or depends on 

myApp.controller('mainController', ['$scope', '$timeout', function($scope,$timeout) {

	$scope.name = 'Tony'; // scope is the glue that connects the controler/code and the view
	$timeout(function() {
		$scope.name = 'Everybody';
	},3000);
	
}]);
