function validateLogin() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "dg8002@mdm.com" && password === "123456") {
        alert("Login successful")
        window.location.href = "index.html"
        localStorage.setItem('user', email)
    } else
        alert("Email or Password incorrect!")

}
