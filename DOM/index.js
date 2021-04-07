var email;
var password;
var submit;
email = document.getElementById("email");
password = document.getElementById("password");
submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(email.value, password.value);
});
