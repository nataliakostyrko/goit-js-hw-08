const loginForm = document.querySelector(".login-form");


function handleSubmit(event) {
    event.preventDefault();

    const elemForm = event.currentTarget.elements;
 
    const elemInfo = {
        email: elemForm.email.value.trim(),
        password: elemForm.password.value.trim(),
    };
    if (elemInfo.email && elemInfo.password) {
        console.log(elemInfo);

        loginForm.reset();
    }
    else {
        alert("All form fields must be filled in"); 
    }
    
}
loginForm.addEventListener("submit", handleSubmit);




