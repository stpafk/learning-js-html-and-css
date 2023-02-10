
const rockPaperScissors = ['ROCK', 'PAPER', 'SCISSORS']

function generateRandom(maxLimit=3){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand
}

let pcChoice = rockPaperScissors[generateRandom()]
