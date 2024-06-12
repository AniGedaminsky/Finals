const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const submitSignUpBtn = document.getElementById("submitSignUp");
const submitSignInBtn = document.querySelector('.container--signin .btn');

signInBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Perform any validation or form submission tasks here
    window.location.href = "/index.html"; // Change this to your main page URL
});

secondForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "/index.html"; // Change this to your main page URL
});

submitSignUpBtn.addEventListener("click", () => {
    fistForm.submit();
});

submitSignInBtn.addEventListener("click", () => {
    secondForm.submit();
});
