const accsessKey = "MPQavekDxPTABr-X6fmc3Ng1Qs-Ma3-4AfOSl04JK4o";
const formEl = document.querySelector("form");
const searchInputEl = document.querySelector("#search-input");
const searchResaultsEl =document.querySelector(".search-resaults");
const showMoreButtonEl = document.querySelector("#show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInputEl.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accsessKey}`
    const response = await fetch(url);
    const data =await response.json();

    if(page === 1)
    {
        searchResaultsEl.innerHTML = "";
    }
    
    const results = data.results;
    results.map((result)=>{

        const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-rsault")
    const image = document.createElement("img")
    image.src = result.urls.small;
    image.alt  = result.alt_description;
    const imageLink = document.createElement("a")
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
        
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResaultsEl.appendChild(imageWrapper);
    });
    page++;
   if(page>1) {
    showMoreButtonEl.style.display = "block";
   }

  
    
}

formEl.addEventListener("submit",event=>{
    event.preventDefault();
    page = 1 ;
    searchImages();
})
showMoreButtonEl.addEventListener("click",()=>{
    searchImages();
})