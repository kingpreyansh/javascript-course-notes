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

// Objects - notice how there is a function inside of the object

const jones = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () { // a property of jones object
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return (`${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`);
  }

}; // the order does not matter - any object can be accessed

console.log(jones.calcAge()); // must call this or else age does not exist
console.log(jones.summary());

// Loops

// For loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


// Iterate through an object
const jones = [
  'Jonas',
  'Schmedtmann',
  1991,
  'teacher',
  true,
  ['Michael', 'Peter', 'Steven'],
];
const types = [];

// For loop keeps running while condition is TRUE
for (let i = 0; i < jones.length; i++) {
  // Reading from jones array
  console.log(jones[i]);
  // Filling types array
  // types[i] = typeof jones[i];
  types.push(typeof jones[i]);
}

// Continue
console.log('----- ONLY STRINGS -----')
for (let i = 0; i < jones.length; i++) {
  if (typeof jones[i] !== 'string') continue; // if the current iteration is a string skip to the next iteration
  console.log(jones[i], typeof jones[i]);
}

// Break
console.log('----- BREAK WITH NUMBER -----')
for (let i = 0; i < jones.length; i++) {
  if (typeof jones[i] === 'number') break; // if the current iteration is a number then break out of the loop
  console.log(jones[i], typeof jones[i]);
}

// Loop in a loop & Backward loops

for (let i = jones.length - 1; i >= 0; i--) {
  console.log(i, jones[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting Exercise ${exercise} -------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
};


// While loops

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep}`);
  rep++;
}

// Random
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// To set up live server
// Install Node.js and run live-server

// Developing and debugging: 
// Use tools like Stackoverflow or MDN or Console Debugger in Chrome to debug applications and bugs

// Basic HTML CSS

.first { 
// ID selector
  color: red;
} 

// ID can be used for one specific item whereas the class is generalized and can be applied to a lot more things
// at once

#your-name { 
//class selector
  background-color: yellow;
  border: 5px solid rgb(187, 75, 75)
}

#your-name h2{ 
//class selector
  background-color: yellow;
  border: 5px solid rgb(187, 75, 75)
}

// selects everything in css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; // allows the size to be accurate if we say size = 100 
  // it wont take into account the other things
}

// DOM Manipulation - interact with the webpage
console.log(document.querySelector('.message').textContent); // the text content of a specific ID

// Document Object Model: Structured representation of HTML Documents. Allows JS to access HTML Elements and styles
// to manipulate them


document.querySelector('.message').textContent  = 'Some text goes here';
document.querySelector('.guess').value = 23; // this is for the input box area

// Event - something that happens in the website: a mouse moving, a mouse scrolling, clicking etc

// EventListener checks for some event on the website
// EventHandler handles the particular event and function will only be called when the event happens
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
})

// Manipulate CSS with JS  
document.querySelector('body').style.backgroundColor = '#60b347';
// 'body' is the whole html tag and it's asking for the CSS 'style' which has the property background-color
// but in js this will be backgroundColor

// Refactoring our code: DRY Principle (Don't Repeat Yourself)
  => Instead of having multiple if/else if : used a ternary operator

// Problem with querySelector: whenever there is multiple only the first one gets chosen
// So instead use querySelectAll

 modal.classList.remove('hidden') // removes the class of the modal hidden

document.addEventListener('keydown', function (e) { // e is for event but anything can be used
  if (e.key === 'Escape') { // if the key pressed is escape
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
}) // for global events 

// classList can be toggled by: player1El.classList.toggle('player--active');
// use '.' for the querySelector()



























