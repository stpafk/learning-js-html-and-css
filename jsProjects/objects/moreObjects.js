const person = {
    name: 'John'
};

//reassigning values
var newPerson = Object.assign({}, person, {
    name: 'Jeff',
    age: 10
});

//console.log(person)
// or 

var newPerson = {
    ...person, ... {
        name: 'Erick',
        lastName: 'Bambino',
        age: 20
    }
};

//Object.defineProperty() => assign new properties

const people = {};

Object.defineProperty(people, 'name', {
    value: 'Erick', 
    writable: false //can't change name property
});

Object.defineProperty(people, 'datetime', {
    get(){
        return new Date()
    }
})

//console.log(people.datetime)

//Object.entries() => to array

const groceryStore = {
    bread: 0.25,
    candy: 1,
    coffee: 5
};

const pricesStore = Object.entries(groceryStore);

//console.log(pricesStore)

// fromEntries()

const prices = [
    ['meat', 'pork'],
    ['salad', 'tomato']
];

const pricesMall = Object.fromEntries(prices);
//console.log(pricesMall)

//Object.freeze() === can't change anything

Object.freeze(pricesMall);