var myNinjaApp= angular.module('myNinjaApp',[]); // 'myNinjaApp' and whatever ng-app name will be both should be same


//before your application run it came here to see where to go
myNinjaApp.config(function(){

});


// as ur application run
myNinjaApp.run(function(){

});


//['$scope'] to protect it from minification version of angualr js
myNinjaApp.controller('NinjaController',['$scope',function($scope){

  $scope.removeNinja=function(ninja){
    var removedNinja= $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja,1);
  }

  $scope.addNinja=function(){
    $scope.ninjas.push({
      //name:$scope.nayaname
      name:$scope.newninja.name,
      belt:$scope.newninja.belt,
      rate:parseInt($scope.newninja.rate),
      available:true,
      thumb:"content/img/avatar3.png"
    });

    $scope.newninja.name="";
    $scope.newninja.belt="";
    $scope.newninja.rate="";
  };
$scope.message="hello buddies";
$scope.greet="kya mamu";


$scope.ninjas=[

  {
    name: "Nayan",
    belt: "green",
    rate: 80,
    available:true,
    thumb:"content/img/avatar3.png",

  },
  {
    name:"Shubham",
    belt:"black",
    rate: 20,
    available:false,
    thumb:"content/img/avatar2.png",
  },
  {
    name:"Harshal",
    belt:"yellow",
    rate: 100,
    available:true,
    thumb:"content/img/avatar2.png",
  }

  ];



}]);
