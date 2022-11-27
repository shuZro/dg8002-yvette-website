// simple test for email and pass 

function validate() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "human1@nothing.com" && password == "123456") {
        alert("login sucessfull")
        window.location.href = "index.html"

    }
    else 
        alert("email or password incorrect")       

}

function continuePage() {

    window.location.href = "index.html"
}
