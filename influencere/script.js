const more_btn = document.querySelectorAll("[data-readmore]");

more_btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let text = e.target.previousElementSibling;
    if (text.style.maxHeight) {
      text.style.maxHeight = null;
      btn.innerHTML =
        'Læs mere <svg width="88" height="45" viewBox="0 0 88 45" class="h-3 w-3 inline" xmlns="http://www.w3.org/2000/svg"><path d="M44 45L87.3013 0H0.69873L44 45Z" fill="black" /></svg>';
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
      btn.innerHTML =
        'Læs mindre <svg width="88" height="45" viewBox="0 0 88 45" class="h-3 w-3 inline" xmlns="http://www.w3.org/2000/svg"><path d="M44 0L87.3013 45H0.69873L44 0Z" fill="black"/></svg>';
    }
  });
});
