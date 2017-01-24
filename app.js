(function (){
'use strict';

 angular.module('LunchCheck', [])
  		.controller('LunchCheckController', LunchCheckController);
		
		 LunchCheckController.$inject = ['$scope'];
		 
		  function LunchCheckController ($scope) {
                 $scope.input = "";
				 $scope.message = "";
				 
				 $scope.checkValue = function (){
				 
				 var array = $scope.input.split(',');
				 var count=0;
				 var item;
				 array.forEach(function(item){
				 
				 	 	if(item===""){
					
					
						
					}else{
						count++;
					}
				 });
				
				 if( count===0 ){
					 $scope.message = "Please enter data first"
				 }else{
				 
				 		 if (count <=3){
					 $scope.message = "Enjoy!"
					 } else if(count > 3){
					  $scope.message = "Too much!"
					 }
				 }
			
				 };
         }
		
})();