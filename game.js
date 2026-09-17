let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#resetBtn");  // NEW

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIndx = Math.floor(Math.random() * 3);
    return options[ranIndx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreDisplay.innerText = userScore;
    } else {
        console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreDisplay.innerText = compScore;
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// NEW: Reset Game Function
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    console.log("Game Reset!");
};

// NEW: Reset button event listener
resetBtn.addEventListener("click", resetGame);

// Game play event listeners
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});