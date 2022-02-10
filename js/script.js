
//Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");



//data validation
function validateForm(){

    clearMessages();
    let errorFlag = false;


    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name field can not be empty";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(checkboxContact.checked==false){
      errorNodes[3].innerText = "You need to agree to the terms and conditions";
      message.classList.add("error-border");
      errorFlag = true;
  }

    if(!errorFlag && checkboxContact.checked==true){
        success.innerText = "Message Sent Successfully";
        success.style.paddingTop="30px";
    }

}

//Clear error / success messages
function clearMessages(){
    for(let i=0 ; i<errorNodes.length ; i++){
        errorNodes[i].innerText = "";
    }
    // success.innerText ="  ";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("termsand-conditions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var body = document.getElementsByTagName("body")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  // body.style.overflowY = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// the checkbox

var checkboxContact = document.getElementById("checkbox-agree");

var checkboxTerms = document.getElementsByClassName("popup-checkbox")[0];

function termsFunction(){
  if(checkboxTerms.checked==true){
    modal.style.display = "none";
  
  
  }
  checkboxContact.checked = checkboxTerms.checked;
  //checkboxTerms.checked = checkboxContact.checked;
}

