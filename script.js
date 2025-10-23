let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const option = ["rock", "paper", "scissor"];
    const choiceIdx = Math.floor(Math.random()*3);
    return option[choiceIdx];

}

const gameDraw = () =>{
    msg.innerText = "Game was draw ! , Paly again >";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";

} 

const showWinner =(userWin , userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Your choice ${userChoice} beets ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
         msg.innerText = `Your choice ${userChoice} loose by  ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    
    //generate computer choice
    const compChoice = genCompChoice();
    // console.log("computer  Choice = ", compChoice);

    // console.log("user Choice = ", userChoice);

    if(userChoice === compChoice){
        gameDraw()
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
    
    


}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
    let userChoice = choice.getAttribute("id");
        
    return playGame(userChoice);
       
    });

})