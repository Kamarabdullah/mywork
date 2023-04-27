// Declare function 
function checkEmail() {

    //Get feedback element from html
    var elMsg = document.getElementById('email_feedback');

    //If the email input is = or greater than 5 char, and contains a period and an @ symbol (most emails do, so I just used this criteria. I know this isn't foolproof by any means though haha)
    if(this.value.length >= 5 && this.value.includes('.') && this.value.includes('@')){
        //If all conditions are true, write nothing
        elMsg.innerHTML = '';
    } else {
        //If any condition is false, write this message in the html
        elMsg.innerHTML = "Please enter a valid email address";
    }
}
//setting variable
var elEmail = document.getElementById('email')
//when you click away from element, the function will run
elEmail.onblur = checkEmail


//This function gives an alert depending on if both fields are filled out. It checks if the name OR email fields are empty and sends an alert to fill them out. If both fields are filled, it alerts a thank you message. For some reason after OK is clicked, the page changes to an error page. I didn't really know how to fix that. 

function validateForm() {
    let x = document.forms["newsletter"]["name"].value
    let y = document.forms["newsletter"]["email"].value;
    if (x == "" || y == "") {
      alert("Fields must be filled out");
      return false;
    } else {
        if (x != "" && y != "") {
          alert("Thank you for signing up!");
        }
        return true;
      }
    }
