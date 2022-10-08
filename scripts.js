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




