const inputs = document.querySelectorAll("input");
const messageInput = document.getElementById("message");
const formWrapper = document.querySelector(".formWrapper");
const formContainer = document.querySelector(".form-container");
const inlineErrors = document.querySelectorAll(".inline-error");
const submitBtn = document.querySelector(".submit-btn");
const successSubmit = document.querySelector(".success-submit");
const btnReset = document.getElementById("btn-reset");
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        inlineErrors.forEach((error) => {
            error.textContent = "";
        });
    });
});

messageInput.addEventListener("input", () => {
    const messageError = document.getElementById("message-error");
    messageError.textContent = "";
});

btnReset.addEventListener("click", () => {
    formContainer.style.display = "block";
    formWrapper.style.display = "block";
    successSubmit.style.display = "none";
    formContainer.reset();
});

formContainer.addEventListener("submit", (event) => {
    event.preventDefault();//prevent the default form submission behavior, which would typically involve sending the form data to a server and refreshing the page. By calling event.preventDefault(), we can handle the form submission using JavaScript without causing a page reload, allowing us to perform validation and provide feedback to the user without interrupting their experience.
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const checkboxInput = document.getElementById("checkbox");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");
    const checkboxError = document.getElementById("checkbox-error");
    const firstNameInput = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstName-error");
    const lastNameInput = document.getElementById("lastName");
    const lastNameError = document.getElementById("lastName-error");

   if (firstNameInput.value.trim() === "") {
        firstNameError.textContent = "First Name is required";
        return false;
    }

    if (/^\s*$/.test(firstNameInput.value)) {
        firstNameError.textContent = "First Name cannot be empty or just whitespace";
        return false;
    }else{
        firstNameError.textContent = "";
    }

    if (lastNameInput.value.trim() === "") {
        lastNameError.textContent = "Last Name is required";
        return false;
    }else{
        lastNameError.textContent = "";
    }

    if (/^\s*$/.test(lastNameInput.value)) {
        lastNameError.textContent = "Last Name cannot be empty or just whitespace";
        return false;
    }

    if (!emailInput.value.trim().includes("@")) {
        emailError.textContent = "Enter a valid email address";
        return false;
    }
    // && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()) is used to check if the email is in a valid format. It checks for the presence of characters before and after the "@" symbol, as well as a valid domain structure after the "." symbol.
    // /^[^\s@]+@[^\s@]+\.[^\s@]+$/ is a regular expression that validates the email format. It ensures that there are characters before the "@" symbol, followed by a valid domain structure after the "." symbol. The ^ and $ symbols indicate the start and end of the string, ensuring that the entire input is validated against this pattern.
    if (!messageInput.value.trim()) {
        messageError.textContent = "Message cannot be empty";
        return false;
    }
    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters long";
        return false;
    }else{
        messageError.textContent = "";
    }

    if(!checkboxInput.checked) {
        checkboxError.textContent = "You must agree to the terms and conditions";
        return false;
    }

    formContainer.style.display = "none";
    formWrapper.style.display = "none";
    successSubmit.style.display = "block";
});


