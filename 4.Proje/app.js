const imageContaınerEl = document.querySelector(".image-container");
const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");

let x = 0;
let timer;
prevEl.addEventListener("click",() =>{
    x = x + 36;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click",() =>{
    x = x - 36;
    clearTimeout(timer);
    updateGallery();
});
const updateGallery =()=>{
    imageContaınerEl.style.transform = `perspective(1000px) rotateY(${x}deg) `

  timer = setTimeout(()=>{
        x = x- 36;
        updateGallery();
    },3000)
}
updateGallery();


