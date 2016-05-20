var AlchyApp = angular.module("Alchy-App", [] );

AlchyApp.controller("DrinksController", ["$scope", "$http", function( $scope, $http){

  $http.get('/api/drinks').then(function(response){
    // an array of love seekers
    $scope.drinks = response.data.drinks;
    console.log("WE GOT DRANKS!");
  });

  $scope.getDrinkData() = function(){
    $http.post('/api/drinks').then(function(response){
      // an array of love seekers
      $scope.drinks = response.data.drinks;
      console.log("WE GOT DRANKS!");
    });
  }

}])
