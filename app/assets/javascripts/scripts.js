function submitForm() {
   // Get the first form with the name
   // Hopefully there is only one, but there are more, select the correct index
   var frm = document.getElementsByName('form')[0];
   frm.submit(); // Submit
   frm.reset();  // Reset
   console.log(frm);
}
$(document).ready(function(){
  submitForm();
});
