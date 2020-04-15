let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () =>{
    return Math.floor(Math.random() * 10);
};
let compareGuesses = (humanGuess,computerGuess,secretTargetNumber) =>{
    let human = Math.abs(secretTargetNumber - humanGuess);
    let computer = Math.abs(secretTargetNumber - computerGuess)

    return human <= computer;
};

let updateScore = (winner) =>{
    if(winner === 'human'){
        humanScore++
    }else if(winner === 'computer'){
        compareGuesses++
    }
}

const advancedRound = () => currentRoundNumber++

