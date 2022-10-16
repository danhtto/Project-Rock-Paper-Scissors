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

function resetScore(player,computer) {
    player = 0;
    computer = 0;
}

function winCheck(player,computer) {
    if (player === 5) {
        result.textContent = 'Player Wins!'
        resetScore(scorePlayer,scoreComputer);
        playAgain();
    } else if (computer === 5) {
        result.textContent = 'Computer Wins!';
        resetScore(scorePlayer,scoreComputer);
        playAgain();
    }
}

function playAgain() {
    const buttonsYesNo = document.querySelector('.result');
    const yes = document.createElement('button');
    const no = document.createElement('button');
    yes.textContent = 'Yes';
    no.textContent = 'No';
    buttonsYesNo.appendChild(yes);
    buttonsYesNo.insertAdjacentElement('beforeend',no);

    yes.addEventListener('click', function(e){
        if (e.target.innerText === 'Yes') {
            location.reload();
        }
    });
    no.addEventListener('click', function(e) {
        if (e.target.innerText === 'No') {
            buttonsYesNo.removeChild(yes);
            buttonsYesNo.removeChild(no);
            result.textContent = 'Thanks for Playing!';
        }
    });

}



scorePlayer = 0;
scoreComputer = 0;

function playRound(event) {
    playerSelection = event.target.textContent;
    computerSelection = getComputerChoice();
     if (playerSelection === 'Rock') {
         if (computerSelection === 'Paper') {
            scoreComputer += 1;
            computerScore.textContent = `Computer Score: ${scoreComputer}`;

        } else if (computerSelection === 'Scissors') {
            scorePlayer +1;
            playerScore.textContent = `Player Score: ${scorePlayer}`;
        }
    } else if (playerSelection === 'Paper') {
         if (computerSelection === 'Rock') {
            scorePlayer += 1;
            playerScore.textContent = `Player Score: ${scorePlayer}`;
        } else if (computerSelection === 'Scissors') {
            scoreComputer += 1;
            computerScore.textContent = `Computer Score: ${scoreComputer}`;
        }
    } else if (playerSelection === 'Scissors') {
         if (computerSelection === 'Paper') {
            scorePlayer += 1;
            playerScore.textContent = `Player Score: ${scorePlayer}`;
        } else if (computerSelection === 'Rock') {
            scoreComputer += 1;
            computerScore.textContent = `Computer Score: ${scoreComputer}`;
        }
    } else {
        return;
    }
    winCheck(scorePlayer,scoreComputer);
    
}



const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', playRound);
});



const result = document.createElement('div');
result.setAttribute('class','result');
result.style.borderColor = 'black';
result.style.height = "100px";
result.style.borderStyle = 'solid';
result.style.display = 'flex';
result.style.justifyContent = 'center';
result.style.flexDirection = 'column';
result.style.alignItems = 'center';


const playerScore = document.createElement('div');
playerScore.setAttribute('class','player');
playerScore.textContent = `Player Score: ${scorePlayer}`;
const computerScore = document.createElement('div');
computerScore.setAttribute('class','computer');
computerScore.textContent = `Computer Score: ${scoreComputer}`;
result.appendChild(playerScore);
result.appendChild(computerScore);




document.body.insertBefore(result,buttons);


