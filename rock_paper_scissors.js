function playRound(playerSelection, computerSelection){
    let results = 'You ';
    let playerResult;

    if (playerSelection == 'rock' && computerSelection == 'paper'){
        playerResult = 'lose! Paper beats Rock';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerResult = 'win! Rock beats Scissors';
    }
    
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        playerResult = 'lose! Scissors beats Paper';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerResult = 'win! Paper beats Rock';
    }
    
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        playerResult = 'lose! Rock beats Scissors';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerResult = 'win! Scissors beats Paper';
    }

    else {
        playerResult = 'tied! No one wins';
    }

    results +=  playerResult;

    return results
}

function computerPlay(){
    let computer_options = ['rock', 'paper', 'scissors'];
    let election = Math.floor(Math.random()*3);
    return computer_options[election]
}

function game(result, playerScore, computerScore){
    if (result.search('win') !== -1 && result.search('tied') == -1){
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else if(result.search('lose') !== -1 && result.search('tied') == -1){
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    
    roundResult.textContent = result;

    return
}

function play(event){
    player = event.target.textContent.toLowerCase();
    computer = computerPlay();
    result = playRound(player, computer);
    game(result, playerPts, computerPts);
}

const playerPts = document.getElementById("playerScore");
const computerPts = document.getElementById("computerScore");
const roundResult = document.getElementById("result")

const botones = document.querySelectorAll("button");
botones.forEach(button => button.addEventListener('click', play));
