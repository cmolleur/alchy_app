// function getDrinkData(){
//
//   $.get( "api/drinks", function( data ) {
//     for (var i = 0; i < data.drinks.length; i++) {
//       var drink = data.drinks[i];
//       var name = drink.name;
//       var ingredients = drink.ingredients;
//       var image = drink.image;
//       var location = drink.location;
//       drinkDiv = $("<div>").addClass("container drink-details").appendTo(".main");
//       $("<div>").addClass("X").appendTo(drinkDiv);
//       $("<img>").attr("src", image).appendTo(drinkDiv);
//       $("<h3>").text(name).appendTo(drinkDiv);
//       $("<p>").text("Ingredients: " + ingredients).appendTo(drinkDiv);
//       $("<p>").text("Drank at: " + location).appendTo(drinkDiv);
//     console.log(name, ingredients, image, location);
//     }
//
//   });
// }
//
// function postDrinkData(){
//
//   $(".drink-form").submit(function(e){
//     e.preventDefault();
//     var $form = $(this),
//     term = $form.find("input[name='s']").val();
//     url = $form.attr("action");
//
//     var posting = $.post(url, {s: term});
//
//     posting.done(function(data){
//       console.log(data);
//     })
//
//   })
//
//
//   // $(".btn").click(function(){
//   //     var form = $('.drink-form');
//   //     console.log(form.text());
//   //   // $.ajax({
//   //   //   url: "api/drinks",
//   //   //   type: 'POST',
//   //   //   data: form.serialize(),
//   //   //   success: function(result){
//   //   //     console.log(result);
//   //   //     console.log("Successfull logged data");
//   //   //   }
//   //   // });
//   // })
//
// }
//
//
//
//
//
//
// $(document).ready(function(){
//     getDrinkData();
//     postDrinkData();
// });
