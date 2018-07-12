/*var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$location', '$log',
function($scope, $location, $log){

	$log.info($location.path());

}]);

*/

var  myApp = angular.module('myApp', ['ngRoute']); // adding  dependencies in the  array 

myApp.config(function($routeProvider){ // routeProvider is available because ngRoute
	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	},

	.when('pages/second.html'),{

	})
	
});
