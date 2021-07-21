 var config = {
    apiKey: "AIzaSyAqlUskzmjinKAQ7kpA1eJFLNJ1fEXgYkM",
    authDomain: "browsersmart-5f450.firebaseapp.com",
    databaseURL: "https://browsersmart-5f450-default-rtdb.firebaseio.com",
    projectId: "browsersmart-5f450",
    storageBucket: "browsersmart-5f450.appspot.com",
    messagingSenderId: "600801488042",
    appId: "1:600801488042:web:72df635247b5c1ee77f4d3"
	};
    firebase.initializeApp(config);


(function() {
  
  var myapp = angular.module('myapp', [ "firebase"]);

myapp.controller('Maincontoller', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

var xg = location.href;
  
var resf = xg.replace("&m=1", "");

  var res = resf.replace("https://ytgrowup.blogspot.com/p/yt-video.html?" , "");  
var userid = localStorage.getItem('userid');
  $scope.sortType     = 'date'; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = res;
$scope.myExpression = "!"+userid;
 $scope.showData = function( ){

 $scope.itemsPerPage = 8;
 $scope.currentPage = 0; 
  
 var live = "Post";
var ref = firebase.database().ref().child(live);

	$scope.pages = $firebaseArray(ref);
     $scope.range = function() {
    var rangeSize = 4;
    var ps = [];
    var begin;

    begin = $scope.currentPage;
    if ( begin > $scope.pageCount()-rangeSize ) {
      begin = $scope.pageCount()-rangeSize+1;
    }

    for (var i=begin; i<begin+rangeSize; i++) {
      ps.push(i);
    }
    return ps;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.DisablePrevPage = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.pages.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.DisableNextPage = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };
         
}

}]);

angular.module('myapp').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();






(function() {
  
  var myapp = angular.module('myapps', [ "firebase"]);

myapp.controller('Maincontollers', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

$scope.sortType     = ''; // set the default sort type
$scope.sortReverse  = false;  // set the default sort order
$scope.searchFish   = '';     // set the default search/filter term
$scope.showData = function( ){

 $scope.itemsPerPage = 15;
 $scope.currentPage = 0;
  
  var xg = location.href;
  
var resf = xg.replace("&m=1", "");

  var res = resf.replace("https://ytgrowup.blogspot.com/p/yt-video.html?" , "");
  
 
  
 var live = "Post/"+(res)+"/Commentpost";
 
 
var ref = firebase.database().ref().child(live);

	$scope.pages = $firebaseArray(ref);
     $scope.range = function() {
    var rangeSize = 4;
    var ps = [];
    var begin;

    begin = $scope.currentPage;
    if ( begin > $scope.pageCount()-rangeSize ) {
      begin = $scope.pageCount()-rangeSize+1;
    }

    for (var i=begin; i<begin+rangeSize; i++) {
      ps.push(i);
    }
    return ps;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.DisablePrevPage = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.pages.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.DisableNextPage = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };
         
}

}]);

angular.module('myapps').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();

 var firstDiv = document.getElementById('myapp');
       var secondDiv = document.getElementById('myapps');

       // manually boostrapping the second app
       angular.element(document).ready(function() {
              angular.bootstrap(firstDiv, [ 'myapp' ]);
              angular.bootstrap(secondDiv, [ 'myapps' ]);
       });
	   

 
	
