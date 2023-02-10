
const container = document.querySelector('#container');

const content = document.createElement('input');
content.type = "text";
content.classList.add('player');
content.placeholder = 'Select your move';

const button = document.createElement('button');
button.textContent = 'Submit';

const rockPaperScissors = ['ROCK', 'PAPER', 'SCISSORS']

function generateRandom(maxLimit=3){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand
}

let pcChoice = rockPaperScissors[generateRandom()]

let userInput;

button.addEventListener('click', function(){
    const userInput = document.querySelector("input").value.toUpperCase();
    console.log(userInput)
    const p = document.createElement('p');
    const winner = defineWinner(userInput, pcChoice);
    p.textContent = winner

    container.appendChild(p);
});

container.appendChild(content);
container.appendChild(button);

let winner;

function defineWinner(userInput, pcChoice){
    if (pcChoice === 'ROCK' && userInput === 'PAPER'){
        winner = 'You won! PAPER covers ROCK.';
    }
    
    else if (pcChoice === 'PAPER' && userInput === 'SCISSORS'){
        winner = 'You won! SCISSORS cuts PAPER.';
    }
    
    else if (pcChoice === 'SCISSORS' && userInput === 'ROCK'){
        winner = 'You won! ROCK cracks SCISSORS.';
    }
    
    else {
        winner = `${pcChoice} beats ${userInput}`;
    };

    return winner
}