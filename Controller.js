angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
 if (localStorageService.get("angular-todolist")) {
   $scope.todo=localStorageService.get("angular-todolist");
 }else{
   $scope.todo=[];  
 }
 
 /*
 {
   actividad:'terminar el curso angular',
   fecha: '3-03-15 2:00pm'
 }


///watch para variables normales.
$scope.$watch(function(){
   return $scope.newActv;
},function(newValue,oldValue){
   console.log(newValue);
   console.log(oldValue);
});
 */

///para colecciones, el actualiza cada ves que se modifica la colleccion todo
$scope.$watchCollection('todo',function(newValue,oldValue){
   localStorageService.set("angular-todolist",$scope.todo);
});


 $scope.addActv=function(){
   $scope.todo.push($scope.newActv);
   $scope.newActv={};
 } 

/*
 $scope.clean = function(){
   $scope.todo=[];
   localStorageService.set("angular-todolist",$scope.todo);
 }
 */
});