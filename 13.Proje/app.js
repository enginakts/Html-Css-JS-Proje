const buttonsEl = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
const playerScorEl = document.querySelector("#player-score");
const computerScorEl = document.querySelector("#computer-score")

let playerScor = 0;
let compiterScor = 0;

buttonsEl.forEach(button =>{
    button.addEventListener("click",()=>{
     const result = playRaund(button.id,coputurePlay());
     resultEl.textContent = result;
     if(playerScor === 10)
     {
        resultEl.textContent = "Tebrikler Kazandınız";
    
        let playerScor = 0;
        let compiterScor = 0;
     }
    else if(compiterScor === 10)
     {
        resultEl.textContent = "Kaybetiniz!!!";
       
        let playerScor = 0;
        let compiterScor = 0;
     }
     
    });
});

function coputurePlay(){
    const choices = ["tas","kagit","makas"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice]
}
function playRaund(playerSelection,computerSelection)
{
    console.log(playerSelection +" "+ computerSelection);
    if(playerSelection === computerSelection){return "Aynı Hamle!"}
    else if(
        (playerSelection ==="tas" && computerSelection === "makas") ||
        (playerSelection ==="kagit" && computerSelection === "tas") ||
        (playerSelection ==="makas" && computerSelection === "kagit")
        ){
            playerScor++;
            playerScorEl.textContent = playerScor;
            return "Kazanan :  " +playerSelection+ "  " + "Kaybeden : "+ computerSelection;
        }
        else{
            compiterScor++;
            computerScorEl.textContent = compiterScor;
            return "Kazanan :  "+computerSelection +"  " + "Kaybeden : "+playerSelection;
        }
}