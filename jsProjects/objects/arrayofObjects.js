
const survey = [
    {'id':145, rent:500, totalRooms:2, bathrooms:2, hasGarage:false},
    {'id':55, rent:700, totalRooms:3, bathrooms:2, hasGarage:true},
    {'id':77, rent:3000, totalRooms:10, bathrooms:7, hasGarage:true},
    {'id':44, rent: 900, totalRooms:5, bathrooms:3, hasGarage:true},
    {'id':11, rent: 750, totalRooms:4, bathrooms:2, hasGarage:false}
]

//console.log(survey.find(bath => bath.totalRooms >= 4)) // returns first matching

let myHouse = survey.find(home => home.totalRooms === 2 && home.bathrooms === 2);
//console.log(myHouse)

/// get multiple items from an array that match a condition

let bigHomes = survey.filter(home => home.bathrooms >= 3 && home.totalRooms >= 4);
//console.log(bigHomes.filter(home => home.hasGarage===true))

/// transform values

let values = survey.map(price => {
    if (price.rent >= 700 && price.rent < 800) {
        return "good price"
    }
    if (price.rent >= 900){
        return 'expensive'
    }
    if (price.rent < 700){
        return 'might be too little'
    }
})

//console.log(values)

// new Object out of other object

let homeOfInterest = survey.map(home => {
    let finalObj = {
        "price": home.rent,
        "interest": "little"
    };

    if (home.rent >= 700 && home.rent < 800) {
        finalObj['interest'] = 'Go for it'
    };
    if (home.rent >= 900) {
        finalObj['interest'] = 'Too expensive'
    };

    return finalObj
});

//console.log(homeOfInterest)

survey.forEach(correct => {
    correct.rent = correct.rent
    if ( correct.hasGarage === true){
        correct['rent'] += 150
    };
})

//console.log(survey)

// sort by price

//console.log(survey.sort(( v1, v2 ) => (v1.rent < v2.rent) ? 1 : (v1.rent > v2.rent) ? -1 : 0));

//sum up

const shopPrices = [
    {group:'greens', type:'tomato', price:2},
    {group:'greens', type:'lettuce', price:3},
    {group:'grains', type:'soy', price:5},
    {group:'grains', type:'rice', price:10},
    {group:'meat', type:'beef', price:20}
];

//console.log(shopPrices.reduce( ( prev, currVal ) => prev + currVal.price, 0));

let profit = shopPrices.map(product => product.price + (product.price * 0.2));
console.log(profit)

const finalPrice = shopPrices.map(obj => {
    const newObj = {...obj};
    if (newObj.price) {
        newObj.price += (newObj.price * 0.2)
    };
    return newObj
});

console.log(finalPrice)