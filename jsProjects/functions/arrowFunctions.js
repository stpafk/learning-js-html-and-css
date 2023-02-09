
// Arrow functions are, in a grotesque way, kinda like python's
// list comprehension, in the sense that it's syntax is way simpler
// than a normal function

// this is a regular function:

hello = function() {
    return "Hello World!";
  } 

// this is an arrow function:

hello = () => {
    return "Hello World"
};

// or

hello = () => "Hello World";
//note: this only works with one-statement only functions

//if we ought to use parameters, arrow functions works like this:

hello = (yourName) => "Hello " + yourName;
calc = (int1, int2) => int1 + int2;

console.log(calc(1, 2));

//if you have one parameter, you can skip the ()

const listOf = [
    'John',
    'Erick',
    'Bambino',
    'Joe'
];

console.log(listOf.map(len => len.length));

// many examples:

// An empty arrow function returns undefined
const empty = () => {};

(() => "foobar")();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => (a > 15 ? 15 : a);
simple(16); // 15
simple(10); // 10

const max = (a, b) => (a > b ? a : b);

// Easy array filtering, mapping, etc.
const arr = [5, 6, 13, 0, 1, 18, 23];

const sum = arr.reduce((a, b) => a + b);
// 66

const even = arr.filter((v) => v % 2 === 0);
// [6, 0, 18]

const double = arr.map((v) => v * 2);
// [10, 12, 26, 0, 2, 36, 46]


const posTemp = temp => {
    if (temp > 0) {
        return true
    }
    return false
}
// rather const checkValue = (value) => value > 10 ? true : false;

console.log(posTemp(-2))

const sumGrades = arr.reduce((a, b) => a+b)

//where arrow functions really shine though, is in anonymous functions.

class Person {
    constructor(name) {
      this.name = name
    }
  
    printNameArrow() {
      setTimeout(() => {
        console.log(`Arrow: ${this.name}`)
      }, 100)
    }
  
    printNameFunction() {
      setTimeout(function() {
        console.log(`Function: ${this.name}`)
      }, 100)
    }
  }
  
  const person = new Person('Kyle')
  person.printNameArrow()
  // Arrow: Kyle
  person.printNameFunction()
  // Function: 