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
        if (parseInt(playerScore.textContent) == 5){
            winner.textContent = "You beat the machine!\nWanna try again?";
            Array.from(botones).forEach(button => button.removeEventListener('click', play));
        }
    }
    else if(result.search('lose') !== -1 && result.search('tied') == -1){
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        if (parseInt(computerScore.textContent) == 5){
            winner.textContent = "You lost to the machine!\nWanna try again?";
            Array.from(botones).forEach(button => button.removeEventListener('click', play));
        }
    }
}

function reset(event){
    Array.from(botones).forEach(button => button.removeEventListener('click', play));
    Array.from(botones).forEach(button => button.addEventListener('click', play));
    winner.textContent = "You can do it!";
    roundResult.textContent = " ";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

function play(event){
    player = event.target.textContent.toLowerCase();
    computer = computerPlay();
    result = playRound(player, computer);
    roundResult.textContent = result;
    game(result, playerPts, computerPts);
}

const playerPts = document.getElementById("playerScore");
const computerPts = document.getElementById("computerScore");
const roundResult = document.getElementById("result");
const winner = document.getElementById("winner-anouncer");
const botones = document.getElementsByClassName("boton-eleccion");
const retryButton = document.getElementById("retryButton");

Array.from(botones).forEach(button => button.addEventListener('click', play));
retryButton.addEventListener('click', reset);
