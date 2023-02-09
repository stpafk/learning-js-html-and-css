// implicit return means an arrow function can define what it will return
// A function is returned values using the return keyword, it’s called an explicit return.

let like = 'like this:'

// Single-line
const explicit = (value) => { return value; }

// Multi-line
const expliciT = (value) => {
  return value;
}

let where = 'implicit return like'
// Single-line
const Implicit = (value) => value;

// Multi-line
const implicit = (value) => (
  value
);

cold = temperature => temperature < 0 ? "Below Zero": 'Above zero';


console.log(cold(-1))

const debt = rent => rent + (rent * 0.2) 

console.log(debt(100))

// When using implicit returns, object literals must be wrapped in parenthesis
//so that the curly braces are not mistaken for the opening of the function’s body.

const a = () => { value: 1 };
a(); // undefined

const b = () => ({ value: 1 });
a(); // { value: 1 }

//divide by two

let division = num => num / 2

console.log(division(10))