
// why its showing error when using HTMLInputElement (which is actually a input element) - caught as typescript onlu knows that documnet.anyquery will return HTMLElement
// but we may know it can be input or button or anchor any thing so we should use type assertions provided by ts to get exact types.




const email: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
const password: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
const submit: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement;

submit.addEventListener("click",(e: MouseEvent) => {
      e.preventDefault();
      console.log(email.value,password.value);
});


// try for other html types anchor, list, other events etc