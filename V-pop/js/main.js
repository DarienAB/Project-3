document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const buttonText = document.getElementById("buttonText");

    // Check sessionStorage for login state
    let isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    // Update button on page load
    updateButtonState();

    loginButton.addEventListener("click", function () {
        isLoggedIn = !isLoggedIn;
        sessionStorage.setItem("isLoggedIn", isLoggedIn);
        updateButtonState();
    });

    function updateButtonState() {
        if (isLoggedIn) {
            buttonText.textContent = "Logout";
            loginButton.classList.remove("btn-primary");
            loginButton.classList.add("btn-danger");
        } else {
            buttonText.textContent = "Login";
            loginButton.classList.remove("btn-danger");
            loginButton.classList.add("btn-primary");
        }
    }
});
