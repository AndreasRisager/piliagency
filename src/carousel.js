function carousel(){
    const container = document.querySelector(".partner-images");
    const carouselImgs = document.querySelectorAll(".partner-images .partner-image");
    
    let index = 0;
    let visibleImgs = window.innerWidth <= 768 ? 2 : 4

    window.addEventListener("resize", (e) => {
        if (e.target.innerWidth <= 768) {
            visibleImgs = 2
        } else {
            visibleImgs = 4
        }
    })
    
    function run() {
        index++;
    
        if(index > (carouselImgs.length - 1) / visibleImgs){
            index = 0;
        }
        container.style.transform = `translateX(${-index * container.clientWidth}px)`;
    }
    setInterval(run, 5000);
}
carousel();