var myNinjaApp= angular.module('myNinjaApp',[]); // 'myNinjaApp' and whatever ng-app name will be both should be same


//before your application run it came here to see where to go
myNinjaApp.config(function(){

});


// as ur application run
myNinjaApp.run(function(){

});


//['$scope'] to protect it from minification version of angualr js
myNinjaApp.controller('NinjaController',['$scope',function($scope){
$scope.message="hello buddies";
$scope.greet="kya mamu";
$scope.ninjas=[

  {
    name: "Nayan",
    belt: "green",
    rate: 80,
  },
  {
    name:"Shubham",
    belt:"black",
    rate: 20,
  },
  {
    name:"Harshal",
    belt:"yellow",
    rate: 100,
  }

  ];

}]);
