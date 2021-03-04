let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.querySelector(".score-board");
const result_p= document.querySelector(".result >p");
const rock_div= document.getElementById("rock");
const paper_div= document.getElementById("paper");
const scissors_div= document.getElementById("scissors");

/*userScore = userScore_span;
computerScore = computerScore_span;*/
function game(userChoice){
    console.log(" user choice is " + userChoice);
    let computerChoice = getComputerChoice();
    console.log("computer choice is " + computerChoice);
    const winner = compareChoices(userChoice , computerChoice);

    newUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    newComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    
    if(winner === "user"){
        userScore++;
        console.log("user-score is " + userScore);
        
        result_p.innerHTML = `${newUserChoice} beats ${newComputerChoice}. You Win! 🔥`;
        userScore_span.innerHTML=userScore;
        document.getElementById(userChoice).classList.add('green-glow');
        setTimeout(() => {
            document.getElementById(userChoice).classList.remove('green-glow');
        } , 1000);
    }
    else if(winner === "computer"){
        computerScore++;
        console.log("computer-score is " + computerScore);
        userChoice
        result_p.innerHTML = `${newComputerChoice} beats ${newUserChoice}. You lose 💩`
        computerScore_span.innerHTML=computerScore;
        document.getElementById(userChoice).classList.add('red-glow');
        setTimeout( () => {
            document.getElementById(userChoice).classList.remove('red-glow');
        } , 1000);
    }
    else{
        result_p.innerHTML = "DRAWWW!";
        document.getElementById(userChoice).classList.add('gray-glow');
        setTimeout( () => {
            document.getElementById(userChoice).classList.remove('gray-glow');
        } , 1000);
    }
    
   
}



function compareChoices(userChoice , computerChoice){
    switch(userChoice + computerChoice){

        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("user wins");
            return "user";
            
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("computer wins");
            return "computer";
            
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("nobody wins");
            return "none"
           
    }

}

function main(){
      rock_div.addEventListener('click' , () => game("rock"))
      
      paper_div.addEventListener('click' , () => game("paper"))
      
      scissors_div.addEventListener('click' , () => game("scissors"));

      
}

main();

function getComputerChoice(){
    const choices=['rock' , 'paper' ,'scissors'];
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
}





