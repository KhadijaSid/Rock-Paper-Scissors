let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
let finalMsg = document.querySelector("#msg");
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");
const refreshBtn = document.getElementById("refreshBtn");

const computerChoice = () =>{
    const options = ["rock", "paper", 'scissors'];
   const randIdX = Math.floor(Math.random()*3);
   return options[randIdX];
}

const drawGame = () => {
    finalMsg.innerText = "Game was draw! Play Again.";
    finalMsg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        finalMsg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        finalMsg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        finalMsg.innerText = `You lost! ${compChoice} beats your ${userChoice}`
        finalMsg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generate comp choice -> modular way (making functions for each action)
    const compChoice = computerChoice();
    if(userChoice === compChoice)
    {
        //draw
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock")
        {
            //paper, scissors 
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper")
        {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true; 
        }
        else 
        {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});


refreshBtn.addEventListener("click", function() {
    location.reload();
});