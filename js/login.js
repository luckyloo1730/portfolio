const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value
    const password = loginForm.password.value

    if (username === "admin" && password === "admin.") {
        alert("You've successfully logged in as Admin.")
        location.reload();
        window.location.replace("h4fuhfurcjs/admin.html")
    }
    else{
        loginErrorMsg.style.opacity = 1
    }
})