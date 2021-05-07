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

// JavaScript Theory
// High-level
// Garbage Collected: removes unnecessary memory
// Interpreted or just-in-time compiled
// Multi-paradigm: an approach and mindset of structuring code
// Prototype-based object-oriented
// First-class functions: functions are treated just as regular variables
// Dynamic: no data types - types only become known at runtime
// Single-threaded: 
// Non-blocking event loop
//    Concurrency model: how the JavaScript engine handles multiple tasks happening at the same time.
//    JavaScript runs in one single thread, so it can do one thing at a time

// EVENT LOOP: Takes long running tasks, executes them in the "background", and puts 
// them in the main thread once they are finished.

// this keyword => points to the owner of the function

// Primitive data types in JavaScript

// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt

// Copying objects 
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// Destructuring Arrays

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j)

// Nested Destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k)

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Object destructuring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b)

// Nested objects
const { fri: { open, close } } = openingHours; // object inside of an object
console.log(open, close);

// Spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

// spread operator takes all the elements from the array and doesnt create new variables - only 
// used when new elements are added with commas

// Copy objects
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`);
  }
};

// this copies everything in the object restaurant
const restaurantCopy = { ...restaurant };

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// Does not include any skipped elements

console.log(pizza, risotto, otherFood);

// OBJECTS
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Short Circuits

// --- OR ---
// evaluation continues until truthy value

// --- AND ---
console.log(0 && 'Jonas'); // => 0
console.log(7 && 'Jonas'); = // => Jonas
// evaluation continues until falsy value

console.log('Hello' && 23 && null && 'jonas');

// Nullish Coalescing Operator -> works with nullish values instead of 0 or '' only works with null and undefined
(??)

// For of loops
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // the for-of loop

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Optional Chaining - if a third property does not exist returns undefined immediately (?.)

console.log(restaurant.openingHours.mon?.open); // only if till monday exists then it'll be read
// used for deeply nested objects

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Object keys and values

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = We are open on ${properties.length} days: "
for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
  console.log(openStr);
}

// Property VALUES
const values = Object.values(openingHours);
console.log(values)

// SETS
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // since the spread operator works on any iterable

// MAPS
// Convert from object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// destructuring the map
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/*
What data structure should we use *** IMPORTANT ***
Sources of data
1) From the program itselg: Data written directly in source code (status messages)
2) From the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
3) From external sources: Data fetched for example from web API (e.g. recipe objects)
    |
    |
    |
    -> Collection of data
    |
    -> Data Structure
          -> Simple List: Arrays or Sets
          -> Key/Value Pairs: Objects or Maps (allows us to describe values)

    JSON is a special data formatting: esentially just text which can be converted to JS objects because it uses the same formatting as JS objects

    Arrays vs Sets

    Arrays:
    Whenever ordered list of values are neeeded and might contain duplicates
    Use when you need to manipulate data

    Sets:
    Use when you need to work with unique values
    Use when high-performance is really important
    Use to remove duplicates from arrays

    Objects vs Maps (keys/values)

    Objects: More "traditional" key/value store ("abused objects"
      Easier to write and access values with . and [])
        -> Use when you need to include funtions (methods)
        -> Use when working with JSON (can convert to map)

    Maps: Better performance, keys can have any data type, easy to iterate, easy to compute size
      -> Use when you simply need to map keys to values
      -> Use when you need keys that are NOT strings

*/







