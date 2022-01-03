 var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
  document.querySelector("button").addEventListener("click", logF);
  function logF() {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#pass").value;

    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].email == email && regdUsers[i].password == password) {
        alert("Logged in Successfully");
        break;
      } else {
        alert("Invalid Users. Please Sign Up");
        break;
      }
    }
  }