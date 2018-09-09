var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter,$timeout) {
    
    $scope.handle = '';
    $scope.lowercasehandle = function(){
    	return $filter('lowercase')($scope.handle);
    };
    

    $scope.$watch('handle', function (newValue, oldValue){
    	console.info('Changed!');
    	console.log('Old: ' + oldValue);
    	console.log('New: ' + newValue);
    });

    /*setTimeout(function(){
    	$scope.$apply(function(){
	    	$scope.handle =  'newtwitterhandle';
	    	console.log('Scope Changed!');    		
    	});

    }, 3000);*/

	$scope.$timeout(function(){
    	$scope.handle =  'newtwitterhandle';
    	console.log('Scope Changed!');    		
	});

}]);
