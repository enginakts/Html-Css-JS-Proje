const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector("#input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click",()=>{
    createPasword()

})
copyIconEl.addEventListener("click",()=>{
    copyPasword();
   if(inputEl.value){
    alertContainerEl.classList.remove("active");
    setTimeout(() =>{
        alertContainerEl.classList.add("active");
    },2000)
   }
})

const createPasword = ()=>{
    let PaswordLength = 14;
    const chars = " ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ abcdefghijklmnopqrstuvwxyz 0123456789 !#$%&()*+,-./:;<=>?@[]^_`{|}~ ";
    let Pasword = "";
    for(let index = 0; index<PaswordLength;index++)
    {
        const randomNum = Math.floor(Math.random() * chars.length);
        Pasword += chars.substring(randomNum,randomNum + 1);

    }
    inputEl.value = Pasword;
    alertContainerEl.innerText = Pasword + " copied!";
  
}
const copyPasword =()=>{
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
}