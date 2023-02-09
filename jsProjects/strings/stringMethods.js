var stringOne = 'This is a string that we will work on, string'
var stringTwo = 'This is other string that contains: this 12345'

//charAt():
console.log(stringOne.charAt(9))

//charCodeAt() => return unicode
console.log(stringTwo.charCodeAt(10))

//concat()
console.log(stringOne.concat(stringTwo))

//endsWith() => checks whether string endswith that character
console.log(stringOne.endsWith('on'))

//fromCharCode() => unicode to alphabet
console.log(String.fromCharCode(stringTwo.charCodeAt(10)))

//includes()
console.log(stringTwo.includes('5'))

//indexOf() #first index of occurance
console.log(stringOne.indexOf('string'))

//lastIndexOf()
console.log(stringOne.lastIndexOf('string'))

//match() search a string to match regular expression
console.log(stringTwo.match('/this/g'))

//repeat() will repeat the string
console.log(stringOne.repeat(5))

//replace()
console.log(stringTwo.replace('/this/g', "END"))

//search()
console.log(stringOne.search('This'))

//slice()
console.log(stringTwo.slice(5, 15))

//split() into an array of substring
console.log(stringTwo.split(" "))

//startsWith()
console.log(stringOne.startsWith('This'))

//substr() kinda like slice
console.log(stringTwo.substr(5, 15))

//substring()
console.log(stringTwo.substring(5, 15))

//toLowerCase()
console.log(stringOne.toLowerCase())

//toUpperCase()
console.log(stringTwo.toUpperCase())

//trim() remove white space
var stringThree = "            A              "
console.log(stringThree.trim())


let arr = [1, 2]
arr.toString()

