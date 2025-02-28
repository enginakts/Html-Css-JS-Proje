const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.querySelector("#result");

for(let i = 0; i<buttonsEl.length;i++)
{
    buttonsEl[i].addEventListener("click",()=>{
        let buttonValue = buttonsEl[i].textContent;
        if(buttonValue === "C"){
            clearResult()
        }else if(buttonValue === "="){
            calculateResult()
        }else{
            appendValue(buttonValue)
        }
    })
}

function clearResult()
{
inputFieldEl.value = ""
}
function calculateResult()
{
    inputFieldEl.value = eval(inputFieldEl.value)
}
function appendValue(buttonValue)
{
    console.log("fdvbhug")
    inputFieldEl.value += buttonValue
}