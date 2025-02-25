const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");


formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    toDoList()
});

function toDoList(task){
    let newTask = inputEl.value;

    if(task){
        newTask = task.name
    }
    const liEl = document.createElement("li");
    if(task && task.checked){
        liEl.classList.add("checked");
    }

    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    inputEl.value ="";
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML= ` <i class="fa-solid fa-circle-check"></i> `;

    liEl.appendChild(checkBtnEl);
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = ` <i class="fa-solid fa-trash"></i>`
    liEl.appendChild(trashBtnEl);
    

    checkBtnEl.addEventListener("click",()=>{
        liEl.classList.toggle("checked");

    });
    trashBtnEl.addEventListener("click",()=>{
        liEl.remove();

    });

   
}


