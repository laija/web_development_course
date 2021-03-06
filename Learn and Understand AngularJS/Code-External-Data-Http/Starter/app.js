var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter,$http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('https://reqres.in/api/users?page=2').success(function(result){
        $scope.rules = result.data;
        console.log( $scope.rules);
    })
    .error(function(data, status){
        console.log(data);
    });

    $scope.newRule = '';
    $scope.addRule = function(){
        $http.post('https://reqres.in/api/users', {"name": "morpheus", "job": "leader" })
        .success(function(result){
        console.log(result);
        })
        .error(function(data, status){
            console.log(result);
        })
    };

}]);