// why it is going and checking in other file.
// why its showing error when using HTMLInputElement (which is actually a input element)


var email: HTMLElement;
var password: HTMLElement;
var submit: HTMLElement;

email = document.getElementById("email");
password = document.getElementById("password");
submit = document.getElementById("submit");

submit.addEventListener("click",(e: MouseEvent) => {
      e.preventDefault();
      console.log(email.nodeValue,password.nodeValue);
});


// try for other html types anchor, list, other events etc