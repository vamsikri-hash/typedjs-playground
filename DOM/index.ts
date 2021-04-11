
// why its showing error when using HTMLInputElement (which is actually a input element) - caught as typescript onlu knows that documnet.anyquery will return HTMLElement
// but we may know it can be input or button or anchor any thing so we should use type assertions provided by ts to get exact types.




const email: HTMLInputElement = document.getElementById("email") as HTMLInputElement;
const password: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
const submit: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement;
const generateAnchors: HTMLButtonElement = document.getElementById("generate-anchors") as HTMLButtonElement;
const anchorElements: HTMLDivElement = document.querySelector(".anchor-elements");

submit.addEventListener("click",(e: MouseEvent): void => {
      e.preventDefault();
      console.log(email.value,password.value);
});

generateAnchors.addEventListener("click", (): void => {
      console.log("hello");
      const listTag: HTMLUListElement = document.createElement("ol"); //  It's HTMLOList but i given UList still taken
      for(let i=0;i<10;i++) {
            const listItemTag: HTMLLIElement = document.createElement("li");
            listItemTag.appendChild(randomAnchor(i));
            listTag.appendChild(listItemTag);
      };
      anchorElements.appendChild(listTag);
})



const randomAnchor = (i: number): HTMLAnchorElement => {
      const aTag = document.createElement("a");
      aTag.appendChild(document.createTextNode(`link${i}`));
      aTag.href = `https://localhost:3000/${i}`;
      aTag.title = `link${i}`;
      return aTag as HTMLAnchorElement;
};




// try for other html types anchor, list, other events etc