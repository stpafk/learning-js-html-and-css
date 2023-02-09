// map(), filter(), reduce(), every(), some(), find(), includes()
var arr = [];

for (i=3;i<100;i++){
    arr.push(i)
};
arr.includes
//map() === change items at an array

const doubleNumber = arr.map(function(elem) { return elem * 2}); 
const doubleNumber_ = arr.map(num => num * 2);
console.log(doubleNumber[1]);

const dollars = [100, 200, 300, 400, 500, 1000];
const reais = dollars.map(function(dollar){ return dollar * 5})
console.log(reais)

//filter() => removes items that matches certain parameter
const arr_ = [];
for (i=0;i<10;i++){arr_.push(Math.floor(Math.random() * 10))};
console.log(arr_);

const arrFilter = arr_.filter( num => num % 2 === 0);
console.log(arrFilter);
const anotherArray = arr_.filter( (element, index, arr) => arr.indexOf(element) === index);


// reduce() === takes a series of elements and reduce to only one element, kind of sum.
// it has two parameters, the first being previous values and the next the reduced element
// 0 will be the start value .  

const monthSalaries = [
    {employee: 'Brad', salary: 1500},
    {employee: 'Alicia', salary: 2000},
    {employee: 'John', salary: 3000},
    {employee: 'Erick', salary: 5000}
];

const totalSalary = monthSalaries.reduce( (total, toPay ) => total + toPay.salary, 0);
console.log(totalSalary);
const employees = monthSalaries.reduce( (string, names) => string + names.employee + " ", "");
console.log(employees);

// every() === when you have to test if every element in an arr matcher condition

const checker = arrFilter.every( element => element % 2 === 0);
console.log(checker);

const ages = [22, 17, 49, 50, 37, 30, 25, 19, 18]
const checkAge = ages.every( age => age >= 18);
console.log(checkAge);

//some() === check if at least one element of array matches certain parameter

function isPrime(value) {
    for (i=2;i<value; i++){
        if (value % i === 0) {
            return false
        }
    }

    return value > 1
}
const validator = arr.some( isPrime )
console.log(validator)

//

const playedPay = [
    {pos:'ATA', played:true, payed: true},
    {pos:'ATA', played:true, payed: false},
    {pos:'BOX', played:false, payed: true},
    {pos:'DEF', played:true, payed: true},
    {pos:'GK', played:true, payed: true}
]

console.log( playedPay.some(person => person.payed ))
//or
function didNotPay(players) {
    return players.filter(player => player.played === true && player.payed === false);
}

const unpaidPlayers = didNotPay(playedPay);

// find() => search an object from an array // returns the first instance

const haveGK = playedPay.find( p => p.pos === 'GK');
console.log(haveGK)

// includes() === returns boolean if includes 

console.log( [NaN, NaN, NaN, 1, 2].includes(NaN))

const players = playedPay.filter( p => p.pos.includes( "DEF" ));
console.log(players);
