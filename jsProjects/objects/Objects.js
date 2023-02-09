// An Object is similar to python's dictionary
// where you store key-value pairs

const car = {
            type:'Fiat', 
            model:'500', 
            color:'white',
            fullModel: function() 
            {return this.type + " " + this.color}
}

//Unlike python, you have methods and [''] to acess values

// console.log(car.type) === console.log(car['type'])

//being a method, you can store functions inside the Object

// inside these functions, you can use .this to acess the properties inside

const carName = car.fullModel();
console.log(carName);

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function(){
        return this.firstName + this.lastName
    }
};

console.log(Person.firstName);

// We can too iterate through an Object object's

const obj = {
    a:1,
    b:2,
    c:3
};


// to change a value inside the object, we can:

obj['c'] = 3.5
obj['d'] = 4

for (let property in obj) {
    console.log(`${property}: ${obj[property]}`)
};