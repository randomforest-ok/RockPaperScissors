function computerPlay(){
let rockPaperScissors = ["Rock", "Paper", "Scissors"];
let play= rockPaperScissors[Math.floor(Math.random()*3)];
console.log("computer: " + play);
return play;
}

function getUserAnswer(){
    let initialAnswer=prompt("Rock, Paper, or Scissors?", "");
    if (initialAnswer===null){
        alert("Game Canceled");
        return -1;
    }
    let low=initialAnswer.toLowerCase();
    let hi=initialAnswer.toUpperCase();
    let answer = hi.substring(0,1) + low.substring(1);
    console.log("You: " + answer);
    return answer;
}

function playRound(){
    let userAnswer= getUserAnswer();
    let compAnswer=computerPlay();
    if(userAnswer===-1){
        return -1;
    }
    else if(userAnswer!="Rock" && userAnswer!="Paper" && userAnswer!="Scissors"){
        alert("Invalid answer! Try again!");
       // return getUserAnswer();
    }
    else if(compAnswer===userAnswer){
        return "Tie";
    }
    else if(compAnswer==="Rock"){
        if(userAnswer==="Paper"){
            return "You win! Paper smothers Rock!"
        }
        if(userAnswer==="Scissors"){
            return "Computer wins! Rock blunts Scissors!"
        }
    }
    else if(compAnswer==="Paper"){
        if(userAnswer==="Rock"){
            return "Computer wins! Paper smothers Rock!"
        }
        if (userAnswer==="Scissors"){
            return "You win! Scissors cut Paper!"
        }
    }
    else if(compAnswer==="Scissors"){
        if(userAnswer==="Rock"){
            return "You win! Rock blunts Scissors!"
        }
        if(userAnswer==="Paper"){
            return "Computer wins! Scissors cut paper!"
        }
    }

}

function playMatch(){
    let compScore=0;
    let userScore=0;
    while(compScore<3&&userScore<3){
        let outcome=playRound();
        if(outcome===-1){
            return -1;
        }
        else if(outcome===null || outcome===undefined){
            outcome=playRound();
        }
        if (outcome.search("Computer")>=0){
            compScore++;
        }
        if(outcome.search("You")>=0){
            userScore++;
        }
        console.log(outcome);
        console.log("Current score - You: " + userScore + ". Computer: " + compScore)
    }
    if(compScore===3){
        console.log("Computer wins by " + compScore + " to " + userScore);
    }
    if(userScore===3){
        console.log("You win by " + userScore + " to " + compScore);
    }
}