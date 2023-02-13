const rockPaperScissors = ['ROCK', 'PAPER', 'SCISSORS']
const container = document.querySelector('#container');
var userPoints = 0
var pcPoints = 0

if (userPoints >= 5) {
    const p = document.querySelector('p');
    p.textContent = "You won the PC!";
};

if (pcPoints === 5) {
    const p = document.querySelector('p');
    p.textContent = "PC Won";
};

function generateRandom(maxLimit=3){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand
}

let userInput = undefined

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#Scissors');

rock.addEventListener('click', function() {
    userInput = rockPaperScissors[0];
    pcChoice = rockPaperScissors[generateRandom()];
    defineWinner(userInput, pcChoice);
});

paper.addEventListener('click', function() {
    userInput = rockPaperScissors[1];
    pcChoice = rockPaperScissors[generateRandom()];
    defineWinner(userInput, pcChoice);
});

scissor.addEventListener('click', function() {
    userInput = rockPaperScissors[2];
    pcChoice = rockPaperScissors[generateRandom()];
    defineWinner(userInput, pcChoice);

});

function defineWinner(userInput, pcChoice){
    if (pcChoice === 'ROCK' && userInput === 'PAPER'){
        winner = 'You won! PAPER covers ROCK.';
        userPoints += 1
    }
    
    else if (pcChoice === 'PAPER' && userInput === 'SCISSORS'){
        winner = 'You won! SCISSORS cuts PAPER.';
        userPoints += 1
    }
    
    else if (pcChoice === 'SCISSORS' && userInput === 'ROCK'){
        winner = 'You won! ROCK cracks SCISSORS.';
        userPoints += 1
    }

    else if (pcChoice === userInput) {
        winner = "DRAW";
    }
    
    else {
        winner = `${pcChoice} beats ${userInput}`;
        pcPoints += 1
    };

    let p = document.querySelector('p');
    if (!p){
        p = document.createElement('p')
        container.appendChild(p);}
    p.textContent = winner;
}