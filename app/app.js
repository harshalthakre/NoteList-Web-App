var myNinjaApp= angular.module('myNinjaApp',['ngRoute']); // 'myNinjaApp' and whatever ng-app name will be both should be same


//before your application run it came here to see where to go
myNinjaApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/home',{
    templateUrl:'views/home.html',
    controller:'NinjaController' // in real time u write diff controller for each specifically
  }).when('/contact',{
    templateUrl:'views/contact.html'
  })
  .when('/directory',{
    templateUrl:'views/directory.html',
    controller: 'NinjaController'
  }).otherwise({
    redirectTo:'/home'
  })
}]);


// as ur application run

//when u want to create your own directory
//- replaced by camecCase
myNinjaApp.directive('randomNinja',[function(){
  return {
    restrict : 'EA', // E elements(tag) A(Attributes)
    //directive has its own scope
    scope:{
      ninjas:"=", //binding
      title: "="
    },
    templateUrl:'views/random.html',
    transclude:true,
    replace:true,
    controller:function($scope){
      $scope.random=Math.floor(Math.random()*3);
    }
  };
}])

//['$scope'] to protect it from minification version of angualr js
myNinjaApp.controller('NinjaController',['$scope','$http','$sce',function($scope,$http,$sce){



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

/*$http.get('data/ninjas.json').success(function(data){
 $scope.ninjas=data;
 console.log("passed")
});*/

/*$http({
     method: 'GET',
     url: 'data/ninjas.json'
  }).then(function (success){
    $scope.ninjas=success.data;
  },function (error){

  });*/

  $http.get('data/ninjas.json').then(successCallback, errorCallback);

  function successCallback(response){
      //success code
      // refer documentation for response object
        $scope.ninjas=response.data;
        console.log($scope.ninjas);
  }
  function errorCallback(error){
      //error code
  }
/*  $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCIswYVmH2GII181tNbYxTsOM7W57sPjcY').then(successCallback1, errorCallback1);

  function successCallback1(success){
      //success code
      // refer documentation for response object
        $scope.genres=success.data;
        console.log("in genres");
        console.log("genres are: "+$scope.genres);
  }
  function errorCallback1(error){
      //error code
      $scope.genres=error.data;
      console.log(error);
      console.log("in genres ,m not");
  }
*/


}]);
