//Sometimes, we need to assign a variable depending on a condition.

//For instance:

let accessAllowed;
let age = console.log('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

//let result = condition ? value1 : value2;

let accessAllowed_ = (age > 18) ? true : false;

/*The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

    if a is defined, then a,
    if a isn’t defined, then b.
///*/

let student;

console.log(student ?? "Missed Class");

student = 'Jason';
console.log(student ?? 'Missed class');

const grades = [
  {student1:'Jacob', grade: 90},
  {student1:'Jason', grade: 95},
  {student1:'Python', grade: null} 
];

function getGrades(grade){
  for (i in grade){
    console.log(grade[i].grade ?? "Didn't took the test")
  }
};

console.log(getGrades(grades))

/* The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;

The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.
*/

let vari = 0
