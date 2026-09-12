let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");



const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIndx=Math.floor(Math.random()*3);
    return options[ranIndx];

}
   const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw!";
     msg.style.backgroundColor="yellow";
   }

   const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You win!");
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You lose!");
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
   }

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice===compChoice){
      drawGame();
    }else{
       let userWin=true;
    
    if(userChoice==="rock"){
        userWin=compChoice==="paper" ? false : true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors" ? false : true;
    }else{
        userWin=compChoice==="rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
};
    playGame(userChoice);

choices.forEach( (choice)=> {
    console.log(choice);
    choice.addEventListener("click",()=>{
        //console.log("choice was clicked",userChoice);
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});