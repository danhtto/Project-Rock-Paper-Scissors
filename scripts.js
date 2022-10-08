function getComputerChoice() {
    randomNumber = Math.ceil(Math.random()*3);
    computerSign ='';
    if (randomNumber === 1) {
        computerSign = 'Rock';
        return computerSign;
    }
    else if (randomNumber === 2) {
        computerSign = 'Paper';
        return computerSign;
    }
    else {
        return computerSign = 'Scissors';
    }
}

function playRound(playerSelection,computerSelection) {
    playerSelectionLower = playerSelection.toLowerCase();
    firstLetterCapital = playerSelectionLower.charAt(0).toUpperCase();
    playerSelection = firstLetterCapital + playerSelectionLower.slice(1);

    result = '';
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            result = 'You Lose! Paper beats Rock';
        } else if (computerSelection === 'Scissors') {
            result = 'You Win! Rock beats Scissors';
        } else {
            result = 'It is tied!'
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            result = 'You Win! Paper beats Rock';
        } else if (computerSelection === 'Scissors') {
            result = 'You Lose! Scissors beats Paper';
        } else {
            result = 'It is tied!'
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            result = 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'Rock') {
            result = 'You Lose! Rock beats Scissors';
        } else {
            result = 'It is tied!'
        }
    }

    return result;
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (i = 1; i <= 5; i++) {
        playerSelection = prompt('Please choose a sign:');
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection,computerSelection);
        console.log('Round:',i);
        if (roundResult === 'You Win! Rock beats Scissors' || roundResult === 'You Win! Paper beats Rock' || roundResult === 'You Win! Scissors beats Paper') {
            playerScore += 1;
        } else if (roundResult === 'You Lose! Rock beats Scissors' || roundResult === 'You Lose! Scissors beats Paper' || roundResult === 'You Lose! Paper beats Rock') {
            computerScore += 1;
        } else {
            console.log(roundResult);
        }
        console.log('Player Score: ', playerScore);
        console.log('Computer Score: ', computerScore);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations you've won!");
    } else if (playerScore < computerScore) {
        console.log("Ha Ha you lose");
    } else {
        console.log('The game is tied.')
    }
    return `Player Score: ${playerScore}\nComputer Score: ${computerScore}`
}
game()