var AlchyApp = angular.module("Alchy-App", [] );

AlchyApp.controller("DrinksController", ["$scope", "$http", function( $scope, $http){

  $scope.getAllDrinks = function(){
    $http.get('/api/drinks').then(function(response){
      // an array of love seekers
      $scope.drinks = response.data.drinks;
      console.log("WE GOT DRANKS!");
    });
  }
  $scope.getAllDrinks();



  $scope.getDrinkData = function(){
    var newDrink = {
      drink: {
        name: $scope.drink.name,
        ingredients: $scope.drink.ingredients,
        image: $scope.drink.image,
        location: $scope.drink.location
      }
    }
    $http.post('/api/drinks', newDrink).then(function(response){
      $scope.drinks.push(response.data.drink);
    });

  }

  $scope.removeDrink = function(drink){
    var drinkId = drink.id;
    $http.delete('/api/drinks/' + drinkId)
    .success(function (drinkId,status,headers){
      console.log("Drink Deleted");
    }).then(function(){
      $scope.getAllDrinks();
    });
  }





}])
