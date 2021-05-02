////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// FUNDAMENTALS PART 1 ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

alert("Hello World!")
// pop-up on the browser of the javascript console

console.log
// outputs any calculation or text on the console

/*
7 Primitive Data Types
=> Number: Floating point numbers
=> String: Sequence of characters
=> Boolean: Logical type that can only be true or false
=> Undefined: Value taken by a variable that is not yet defined
=> Null: Also means 'empty value'
=> Symbol (ES2015)
=> BigInt (ES2020)
*/

// This is a comment

let age = 30; // Can be mutated
age = 31;

const birthYear = 1991; // Cannot re-assign or mutate
birthYear = 1990;

var job = 'programmer'; // Allowed to mutate
job = 'teacher';

// Basic Operations
2 ** 3 // means 2 to the power of 3

// Concatenation
const firstName = 'Jonas';
const lastName = 'Jonas';
console.log(firstName + ' ' + lastName);

// Comparison
console.log(ageJonas > ageSarah);
const isFullAge = ageSarah >= 18; // boolean value

// Strings
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ',a ' + (year - birthYear) + 'years old' + job + '!';

// Use template sreens with the `Back ticks`
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// for multi line strings
console.log(`String
multiple
lines`);

// conditionals

if(condition){
  // executes iff condition is true
} else{
  // executes iff contition is false
}

// Type Conversion and Coercion
const inputYear = "1991"
console.log(Number(inputYear) + 18); // string to number
console.log(String(24)); // number to string

// type corecion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // output: 10
console.log('23' + '10' + 3); // output: 23103
console.log('23' / '2'); // output: 11.5
console.log('23' > '18'; // true

// 5 Falsy Values: 0, '', undefined, null, NaN
// Everything else is Truthy values   
         
=== vs ==
// Only returns true if both sides are equal (18 === 18) -- does not do type coercion
// Does type coercion (18 == '18') would be true

!= vs !==
// != is the strict version and !== is the loose(r) version
            
// Boolean Logic

'A' AND 'B' -> both must be true
'A' OR 'B' -> Only needs one to be true            
NOT 'A' -> inverts the bool
            
// Switch Statement
const day = 'thursday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
  case 'friday':
    console.log('Record videos');
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :)');
    break;
  default: // if its none of the options
    console.log('Not a valid day!');
}

// Statements vs Expressions
// Expression produces a value: 3 + 44 - 5 OR produces a boolean value (true/false)
if(23 >10){
  const str = '24 is bigger';
} // does not produce a value hence it is a statement


// Conditional (Ternary) Operator
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
// the thing inside {} is an expression and hence has a value
// if age >= 18 then wine else water

// Tip calculator
const bill = Number(prompt("Enter the bill amount: "));
let tip = bill < 50 && bill > 0 ? bill * 0.20 : bill * 0.15
console.log(`The bill was ${bill}, the tip was ${tip}`);
console.log(`The total is ${bill + tip}`); 

////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// FUNDAMENTALS PART 2 ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

'use strict'; // less bugs, forbids to do some things, does not allow 
// to use variables that would be methods in future js updates

// Functions

function fruitProcessor(apples, oranges) { // parameters or arguments
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
  // function body
}

let string = fruitProcessor(5, 6); // the return value juice is set to the variable string
console.log(string);

// DRY (Don't Repeat Yourself)

// Function Declaration vs Function Expression
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2)

// Arrow Function good for single liner functions
const calcAge3 = birthYear => 2037 - birthYear; // birth year is the parameter
const age3 = calcAge3(1991);
console.log(age3);

// For bigger functions - multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
}

// Arrays

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = new Array(1991, 34803, 08238, 2020);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]

// Arrays Methods
const friends = ['Michael', 'Bob'];
friends.pop() // pops the last element of the array
friends.shift() // get the first element in the array
friends.unshift() // add to the first position of the array
friends.push() // adds to the last position of the arry

// Bill Calculator with Arrays

bill = 100;
const tip = (bill) => {
  let val = bill > 50 && bill < 300 ? bill * 0.20 : bill * 0.15;
  return val;
}
bills = [tip(5), tip(10), tip(25), tip(50), tip(100)];
console.log(bills);













