var app=angular.module("communicationController",[]);

app.controller("ProductController",['$scope','MessageService',productController]);
app.service("MessageService",messageService);

function productController($scope,msgService){
		$scope.btnClick = function(msg){
		msgService.setMessage(msg);
		}
		//$scope.m1={};
		$scope.m1=msgService.getMessage();
}

function messageService(){
	var message={};
	return{
	
		getMessage: function(){
		return message;
		},
		setMessage: function(message){
		return message;
		}
	}
}
