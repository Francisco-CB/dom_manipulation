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

function playerSelection(){
    let player_election;
    player_election = window.prompt('Rock, Paper, or Scissors?');
    return player_election.toLowerCase()
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let player;
    let computer;
    let result;

    for (let i=0; i<5; i++){
        player = playerSelection();
        computer = computerPlay();
        result = playRound(player, computer);
        
        if (result.search('win') !== -1){
            playerWins += 1;
        }
        else{
            computerWins += 1;
        }

        console.log(result);
    }
    
    if(playerWins > computerWins){
        console.log('You win! :)')
    }
    else if(playerWins < computerWins){
        console.log('You lose! :(')
    }
    else{
        console.log('You tied!')
    }
    return
}