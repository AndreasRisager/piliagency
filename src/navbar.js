const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#navbar");
const line1 = menuButton.querySelector(".menuButton-line1");
const line2 = menuButton.querySelector(".menuButton-line2");
let menuHeight;

menuButton.addEventListener("click", () => {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    
    menuButton - line1.classList.add("absolute", "rotate-45");
    menuButton - line2.classList.add("absolute", "-rotate-45");
    menuButton - line2.classList.remove("mt-1.5");
    
    menuHeight = nav.scrollHeight;
    nav.classList.add(`max-h-[${menuHeight}px]`);
  } else {
    menuButton - line1.classList.remove("absolute", "rotate-45");
    menuButton - line2.classList.remove("absolute", "-rotate-45");
    menuButton - line2.classList.add("mt-1.5");

    nav.classList.remove(`max-h-[${menuHeight}px]`);

    setTimeout(() => {
      nav.classList.add("hidden");
    }, 300);
  }
});
