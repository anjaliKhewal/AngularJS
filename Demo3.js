var app=angular.module("RadioApp",[]);

app.controller("RadioController",["$scope", radioController]);

function radioController($scope){
	$scope.question = {
	text: 'What is your current location?',
	options: [
	{text:'Bangalore',ans:true},
	{text:'Pune',ans:false},
	{text:'Delhi',ans:false}
	]
	};
	
	$scope.evaluate = function(){
		
        /*if($scope.question.options[$scope.question.response-1].ans == true){
            alert("You are right");
        }*/
		
		if($scope.question.options[$scope.question.response-1].text == 'Bangalore'){
		alert("You are right");
		}
    }
}
