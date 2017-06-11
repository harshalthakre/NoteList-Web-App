var myNinjaApp= angular.module('myNinjaApp',[]);

myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});

myNinjaApp.controller('NinjaController',['$scope',function($scope){

$scope.message="hello buddies";
$scope.greet="kya mamu";
$scope.ninjas=[

  {
    name: "Nayan",
    belt: "green"
  },
  {
    name:"Shubham",
    belt:"black"
  },
  {
    name:"Harshal",
    belt:"yellow"
  }

  ];

}]);
