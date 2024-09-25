/********f************
    
	Project 4 
	Name: Dawson Zorn
	Date: 2024-04-09
	Description: Using all my skills from the term to create a home page a product page and a contact page using html css and javascript

*********************/

document.addEventListener("DOMContentLoaded", load);

/*
 * checks for all form errors and completes validation
 */
function formHasErrors(){

    //check text fields for empty values
    let errorFlag = false;
    let requiredFields = ["fullname", "phone", "email"];
    
    let textField = document.getElementById("fullname");
    if (textField.value == null || textField.value.trim() == "") {
        document.getElementById("fullname_error").style.display = "block";
        if (!errorFlag) {
            textField.focus();
            textField.select();
        }
        errorFlag = true;
	}

    //Regular expressions to validate email
    let emailRegEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    let emailValue = document.getElementById("email").value;
    if(!emailRegEx.test(emailValue)){
        document.getElementById("emailformat_error").style.display = "block";
        
        if(!errorFlag){
            document.getElementById("email").focus();
			document.getElementById("email").select();
		}
		errorFlag = true;
	}

    //Regular expression to validate phone number
    let phoneRegEx = new RegExp(/^\s*\(?([0-9]{3})\)?\s*[-.\s]?\s*([0-9]{3})\s*[-.\s]?\s*([0-9]{4})\s*$/);
    let phoneValue = document.getElementById("phone").value;
    if(!phoneRegEx.test(phoneValue)){
        document.getElementById("phoneformat_error").style.display = "block";

        if(!errorFlag){
            document.getElementById("phone").focus();
			document.getElementById("phone").select();
        }
        errorFlag = true;
    }

    return errorFlag;
}
/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		error[i].style.display = "none";
	}
}

function load(){
    //adds event listener for submit button and reset button
	document.getElementById("contact_form").addEventListener("submit", validate);
    document.getElementById("contact_form").addEventListener("reset", resetForm);

    // Add event listener for the form submit
    hideErrors();
}

/*
 *determines if form has errors and checks for validation
 */
function validate(e){
        // Hides all error elements on the page
        hideErrors();
    
        // Determine if the form has errors
        if (formHasErrors()) {
            // Prevents the form from submitting
            e.preventDefault();
    
           
            return false;
        }

        return true;
    
    }

    function resetForm(){
        hideErrors();
        // Reset the form fields if necessary
    }