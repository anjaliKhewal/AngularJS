var app= angular.module("helloWorld", []);

app.controller("helloWorldController", ['$scope',helloController]);

function helloController($scope){

	$scope.message="Hello World";
}
