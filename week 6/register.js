window.onload = initializePage;

function initializePage() {
    const formElement = document.getElementById("myRegister");
    formElement.onsubmit = validateRegistrationForm;
}

function showError(message) {
    const errorMessageElement = document.getElementById("errormsg");
    errorMessageElement.innerHTML = message;
    return false;
}

function validateRegistrationForm() {
    const formElement = document.forms["myRegister"];
    
    if (!formElement.firstname.value) {
        return showError("First name is required.");
    } else if (!formElement.lastname.value) {
        return showError("Last name is required.");
    } else if (!formElement.gender.value) {
        return showError("Gender is required.");
    } else if (!formElement.bday.value) {
        return showError("Birthday is required.");
    } else if (!formElement.email.value) {
        return showError("Email address is required.");
    } else if (!formElement.username.value) {
        return showError("Username is required.");
    } else if (!formElement.password[0].value) {
        return showError("Password is required.");
    } else if (!formElement.password[1].value) {
        return showError("Please confirm your password.");
    } else if (formElement.password[0].value !== formElement.password[1].value) {
        return showError("Passwords do not match.");
    }

    console.log(formElement);
    alert("Registration successful!");
}
