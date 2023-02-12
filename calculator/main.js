let firstNum = 0
let secondNum = 0
let operator = 0

const inputInterface = document.querySelector('#input');

const clearButton = document.querySelector('#Clear');
clearButton.addEventListener('click', function (){
    inputInterface.textContent = 0;
    firstNum = 0
    secondNum = 0
});

const intButtons = document.querySelectorAll('.calculator .row button');

intButtons.forEach(function(button) {

    button.addEventListener('click', function() {
        let inputValue = document.querySelector('#input').innerHTML;
        inputValue = parseInt(inputValue + button.innerHTML, 10);
        document.querySelector('#input').innerHTML = inputValue;
    });

});

const equalButton = document.querySelector("#Equals");
const plusButton = document.querySelector("#Plus");
const minusButton = document.querySelector("#Minus");
const timesButton = document.querySelector("#Times");
const divisionButton = document.querySelector("#Division");

equalButton.addEventListener('click', function(){

    secondNum = document.querySelector('#input').innerHTML;
    if (operator === "+"){
        inputInterface.textContent = parseFloat(firstNum) + parseFloat(secondNum);
    }
    else if (operator === "-"){
        inputInterface.textContent = parseFloat(firstNum) - parseFloat(secondNum);
    }
    else if (operator === '*'){
        inputInterface.textContent = parseFloat(firstNum) * parseFloat(secondNum);
    }
    else if (operator === '/'){
        inputInterface.textContent = parseFloat(firstNum) / parseFloat(secondNum);
    }
});

plusButton.addEventListener('click', function(){

    firstNum = parseInt(document.querySelector('#input').innerHTML);
    inputInterface.textContent = "";
    operator = "+"
});

minusButton.addEventListener('click', function(){

    firstNum = document.querySelector('#input').innerHTML;
    inputInterface.textContent = "";
    operator = "-"
});

timesButton.addEventListener('click', function(){

    firstNum = parseInt(document.querySelector('#input').innerHTML);
    inputInterface.textContent = "";
    operator = "*"
});

divisionButton.addEventListener('click', function(){

    firstNum = parseInt(document.querySelector('#input').innerHTML);
    inputInterface.textContent = "";
    operator = "/"
});