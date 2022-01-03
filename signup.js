var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
    document.querySelector("button").addEventListener("click",sub);

    function sub(){
        var name = document.querySelector("#name").value;
        var email = document.querySelector("#email").value;
        var mob = document.querySelector("#mob").value;
        var pass = document.querySelector("#pass").value;
        var userCred = {
        name:name,
        email:email,
        mobile:mob,
        password:pass
    }
    userData.push(userCred);
    localStorage.setItem("userDatabase",JSON.stringify(userData));
        alert("Thanks for registerd, Go to Sign In");
        window.location.href = "login.html"
}