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

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);

console.log(airline.length)
console.log('B737'.length) // length of string

console.log(airline.indexOf('r')); // first occurence
console.log(airline.lastIndexOf('r')); // last occurrence
// case sensitive

console.log(airline.slice(4)); // The begin parameter basically where the string will start\
console.log(airline.slice(4, 7)); // slice method

console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ') + 1))

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :(')
  else console.log('You got lucky :)')
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = loginEmail.trim(); // gets rid of whitespace and also \n
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replacing
const priceGB = '288,98£' // need to replace pound with the $ sign and the ',' with the '.'
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replaceAll('door', 'gate'));

// Regular expression 
console.log(announcement.replaceAll(/door/g, 'gate')); // Regular Expressions

// Booleans: includes(), startsWith(), endsWith()
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.endsWith('neo'));
console.log(plane.startsWith('A'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'));

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) console.log('You are NOT allowed on board');
  else console.log('Welcome aboard!')
}
checkBaggage('I have a laptop, some food and a pocket knife');

// Split Method

console.log('a+very+nice+string'.split('+')) // string method
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Join method

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Split Method

console.log('a+very+nice+string'.split('+')) // string method
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Join method

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');

// Padding a string
const message = 'Go to gate 23!'
console.log(message.padStart(25, '~').padEnd(35, '~'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}

console.log(maskCreditCard(4168945921));
maskCreditCard('416894592221');

// Repeat
const message2 = 'Bad weather... All Departures Dealayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}
planesInLine(5);

// More about functions

const createBooking = function (flightNum, numPassengers = 1, price = 199) { // creating default values
  // ES5 way of doing default values
  // numPassengers = numPassengers || 1;
  // price = price || 100;
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}
createBooking('LH123')
createBooking('LH123', 2, 800);
createBooking('LH123', undefined, 800); // Keeping the parameter as default

// passing a primitive type to a function a copy is made
// passing an object to the function passes the object itself

// First Class vs Higher Order Functions

// First class - all functions are values
// JavaScript treats functions as first-class citizens
// This means that functions are simply values
// Functions are just another 'type' of object

// Higher order function
// A function that recieves another function as an argument, that returns a new function, or both
// This is only possible because of first-class functions

// First Class vs Higher Order Functions

// First class function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`)
}
transformer('JavaScript is the best!', upperFirstWord) // call back function because it is called later

// Function that returns a new function
const greet = function (greeting) {
  return function (name) {
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');

// Arrow function returning function
const greet = greeting => {
  return function(name){
    console.log(`${greeting} ${name}`)
  }
}

const greetArr = greeting => name => console.log(`${greeting} ${name}`); 
// Arrow function returning another arrow function

// Call and Apply - allows use to explicitly define the this keyword

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${this.airline} booked a seat on ${this.iataCode} ${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
  }
}

lufthansa.book(237, 'Preyansh Dutta');
lufthansa.book(635, 'Mike');
// console.log(lufthansa);

// All of the variable names inside the object must match in order to use the call method
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method
// book(23, 'Sarah Williams');
book.call(eurowings, 23, 'Sarah Williams'); // manually and explicitly set the this keyword of any function we want to call eventho the book method is inside of lufthansa function - the call method allows us to go into lufthansa and get the book function
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa);


// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData) // (this, array of data) -> calls the book function with the flightData as parameters
console.log(eurowings);

book.call(eurowings, ...flightData); // allows use to explicitly define the this keyword

// Bind method
// Does not immediately call the function instead it returns a new function

const bookEW = book.bind(eurowings); // returns a new function where the this keyword is set to eurowings
const bookLH = book.bind(lufthansa);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 67765);
bookEW23('oierf');
bookEW23('Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes)
}
// lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23) // since we dont care about the this keyword
// 0.23 sets the rate value in stone

console.log(addVAT(100));
console.log(addVAT(23));

// Immediately Invoked Function Expression

(function() {
  console.log('This will never run again');
})();

// Closures - hardest javascript concept
// What is a closure?

// Closure: makes a function remember all the variables that were created at the birth place by the time it was created

// A function has access to the variable environment (VE) of the execution context in which it was created

// Closure: VE attached to the funciton, exactly as it was at the time and place the function was created


const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking(); // closure since booker is only created when secureBooking is made
// thanks to closure - a function does not lose connection to variables that exist in the funciton's birthplace

// A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, wehich preserves the scope chain throughout time

booker();
booker();
booker();

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  }
}

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  }
}

g();
f();

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2 - using timeout
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)
  console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(180, 3);


let arr = ['a', 'b', 'c', 'd', 'e'];

// slice with arrays
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));


// SPLICE 
console.log(arr.splice(2)); // start parameter and gets rid of # of elements to delete


// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// For each call back function
// cannot break or continue
movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// ForEach method on maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
})

// Set
const currenciesUnique = new Set(['USD', 'GDP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
})

// Method for inserting

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->

// Reading the HTML contents of an element

.insertAdjacentHTML();

// Data Transformations with Map, Filter, Reduce
map() // builds us a new array containing the results of applying an operation on all original array elements

filter() // filter returns a new array containing the array elements that passed a specified test condition

reduce() // reduce boils all array elements down to one single value (adding all elements together)

// Map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
let movemementsUSD = movements.map(function (mov) {
  return mov * eurToUsd; // fills the array with mov * eurToUsd 
})
movemementsUSD = movements.map(mov => mov * eurToUsd); // fills the array with mov * eurToUsd 
console.log(movemementsUSD);

const movementsDescriptions = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescriptions);

// filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// reduce method
const balance = movements.reduce((acc, curr) => acc + curr, 0); // the first parameter is the accumulator - the value that we ultimately want to return
console.log(balance);

// find method
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// Prevent form from submitting
e.preventDefault();

// find index
const index = accounts.findIndex(acc => acc.username === currentAccount.username);

// SOME - if there is any value for which the function is true then the method returns true
const anyDeposits = movements.some(mov => mov > 0);

// EVERY method - if all the elements in the array passes our condition
console.log(account4.movements.every(mov => mov > 0));

// FLAT method
const arr = [[1, 2, 3], [4, 5], 7, 8];

// FLATMAP method
const overallBalance2 = accounts.flat(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);

// Sorting with Strings - even numbers are considered as strings
const owners = ['Jonas', 'Zach']
owners.sort()

// return < 0: A, B
// return > 0: B, A
movements.sort((a, b) => {
  if (a > b)
    return 1;
  if (b > a)
    return -1;
});
console.log(movements);

// new Array(param)
const x = new Array(7); // creates an array with 7 items
x.fill(1); // fills an empty array
x.fill(1, 3); // fills from index 3
console.log(x);

// Array.from method
const y = Array.from({ length: 7 }, () => 1) // an arrow function that returns 1 in each position
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // throw away function and the second param is the call-back
console.log(z);

// Which array method to use in different situations?

/*

1. To mutate original array
Add to original:
  .push
  .unshift

Remove from original:
  .pop
  .shift
  .splice

Others:
  .reverse
  .sort
  .fill
  
2. To create a new array
Computed from original:
  .map

Filtered using condition
  .filter 

Portion of original
  .slice

Adding original to other
  .concat

Flattening the original
  .flat
  .flatmap
  
3. An array index
Based on value:
  .indexOf
  .findIndexs
  
4. An array element
Based on test condition:
  .find
  
5. Know if array includes
Based on value:
  .includes
  
Based on test condition:
  .some
  .every
  
6.  A new string
  .join
  
7. To transform a value
Based on accumulator
  .reduce
  
8. To just loop array
Based on callback
   .forEach
*/

// Number.parseInt -- String to number
// Number.isFinite or Number.isNaN

// BigInt(23234234234234234234)

// Date
const now = new Date();
// .getFullYear
// .getFullMonth ... etc

// Setting time outs
setTimeout(() => console.log(`Here is your pizza 🍕`), 3000); // set it for 3 seconds later

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza 🍕`), 3000, ...ingredients);
console.log('Waiting...')
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); // the timeout clears if the array contains 'spinach'

// Set Interval
setInterval(function(){
  const now = new Date();  
  console.log(now);
}, 1000);

// Implementing a countdown timer
const startLogOutTimer = function(){
  let time = 100;
  setInterval(function(){
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);;
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    time--;
    // When 0 seconds, stop timer and log user out
  }, 1000)
};

// Advanced DOM manipulation

// Dom api is broken up into different types of nodes: Element: HTMLElement, text, comment, document


// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button'); // HTMLCollection is realtime

// However the same does not happen with the node list
console.log(allButtons);

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class = "btn--close--cookie">Got it!</button>';

// Prepending adds the message to the first child
// Append adds the message to the last child
header.prepend(message);
header.append(message); // Dom element is unique can only exist in one place
header.append(message.cloneNode(true));

// header.before(message); // before the header element
// header.after(message); // after the header element

// Delete Elements
document.querySelector('.btn--close--cookie').addEventListener('click', function () {
  message.remove();
})

/ Attribures
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

console.log(logo.designer);
console.log(logo.getAttribute('designer')); // since it is not a standard property of an image - Non-standard

logo.setAttribute('company', 'Bankist');

console.log(logo.src); // Get actual link 
console.log(logo.getAttribute('src')); // Get relative 

const link = document.querySelector('.twitter-link');

// Data Attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Scrolling from one section to another

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //.target is the event that we clicked
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // Offsets from the page

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  })

// More modern browser
section1.scrollIntoView({ behavior: 'smooth' });
  

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great!') // new way

  h1.removeEventListener('mouseenter', alertH1); // only listening one time
}

h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) { // hover element
//   alert('addEventListener: Great!') // old way
// };

// EVENT Propagation in practice
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINK');
})

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('LINK');
})
  
// Event delegation
// 1) Add the event listener to a common parent element
// 2) Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
})
  
// DOM Traversing
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';
  

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (e) {
  if (e !== h1) e.style.transform = 'scale(0.5)';
})

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e)
})
  
document.addEventListener('load', function (e) {
  console.log('Page fully loaded', e) // When the page is fully loaded
})

window.addEventListener('beforeunload', function (e) { // when the x is clicked on the browser tab
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
})

// Different ways of loading scripts
  
<script src = "script.js"> // -> Parsing HTML, Fetch Script, Execute -> Finish Parsing HTML (don't want the browser to sit and do nothing)
// Hence don't put it in the head but instead in the END
  
<script async src = "script.js"> // -> Parsing and fetched at the same time -> Execute
  //DOMContentLoaded event waits for all scripts to execute, except for async scripts. So DOMContentLoaded does not wait for async script
  
<script defer src = "script.js"> // Execution is put off to the end 
// Forces DOMContentLoaded event to fire after the defer script is executed
// Scripts are executed in order
// Overall the best solution - use for your own scripts when order matters (e.g. including a library)

// Obect Oriented Programming vs Functional Programming
// What is OOP?
// A programming paradigm (style of the code) based on the concept of objects
// We use objects to model real-world abstract features
// Contains data (properties) or code (methods)
// Self contained pieces/blocks of code
// Objects are building blocks of applications and interact with one another - interactions happen through a API, methods that the code outside
// of the object can can access and use to communicate with object.
// GOAL: A solution to more flexible and easier to maintain organization of code
  
// Class: like a blueprint from which we can create new objects -> build as many instances as we need
// Instance: a real object that can be sed in the code
// 4 fundamental principles of OOP - Abstraction, Encapsulation, Inheritance, Polymorphism
// Abstraction: ignoring or hiding details that don't matter
// Encapsulation: keeping properties and methods private inside the class - so they are not accessible from outside the class
// Prevents external code from accidentally manipulating internal properties/state
// Inheritance: Child class extends parent class. Makes all properties and methods of a certain class available to a child class, forming a hierarchical relationship
// between classes. This allows us to reuse common logic and to model real-world relationships
// Polymorphism: A child class can overwrite a method it inherited from a parent class. 
  
// Obhjects are instantiated from a class, which functions like a blueprint
  
// Objects are linked to a prototype object - prototypal inheritance: the prototype contains methods (behaviour) that are accessible to all objects linked
// to that prototype
// Behaviour is delegated to the linked prototype object.
// 3 ways of implementing OOP
// Constructor functions: technique to create objects from a function; this is how built-in objects like Array, Maps, or Sets are actually implemented
// ES6 Classes: modern alternative. 
// Object.create() - most straightforward way of linking an object to a prototype object


const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Adding a method - never do this (1000 copies of this function)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
}

const jonas = new Person('Jonas', 1991); // constructor function
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

// Object from a constructor function
const matilda = new Person('Matilda', 2017); // instance of a person
const jack = new Person('Jack', 1975)
console.log(matilda, jack);
console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species')); // because this property is a prototype that is being accessed

// Prototype property
// Constructor function [Person()] -> .prototype Prototype [Person.prototype] ---- This is called the prototype chain but it does not end here
// Object() -> Object.prototype
// Person() -> Person.prototype ⬆️ 
//         {jonas} Person.prototype ⬆️
  
// How is it created?
// const jonas = new Person('Jonas', 1999);
// jonas.calcAge();
  
// The new operator:
  // 1) An empty object is created
  // 2) this keyword in constructor function cakk us set to the new oject
  // 3) The new object is linked to the constructor function's prototype property

// Prototypal Inheritance / Delegation

// // Object from a constructor function
// const matilda = new Person('Matilda', 2017); // instance of a person
// const jack = new Person('Jack', 1975)
// console.log(matilda, jack);
// console.log(jonas instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// }

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// // .prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species')); // because this property is a prototype that is being accessed

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr = [3, 5, 6, 23, 25, 6, 3, 5, 23]; // new Array === []
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)]; // this keyword would refer to the array
// }

// console.log(arr.unique());
  
// ES6 Classes

// Class expression
// const PersonCl = class{}


// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
  
  // 1. Classes are NOT hoisted (cannot be used before they are declared)
  // 2. Classes are first-class citizens
  // 3. Classes are executed in strict mode

// getter -> get age(){
//              return 2037 - this.birthYear;
//           }
// a getter just adds the property 
  
// setter use case ->
  
  
// Object.create can be used to set the prototype to any object
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
  
// Asynchronous Javascript, AJAX and APIs

// What is synchronous code? - Code is executed line by line.
// Execution has to wait ...

// What is asynchronous code? - Used when the rest of the code must load in the background
// Execution doesn't wait for an asynchronous task to finish its work
// Certain functions will have a callback function which *usually* makes the code asynchronous
// Event functions alone or callback functions alone do not make any code async

// AJAX Calls: Asynchronous Javascript and XML: Allows us to communicate with remote web server in an 
// asynchronous way. With AJAX calls, we can request data from web servers dynamically.
  
// Client: HTTP Request (GET/POST/Etc) -> Server
//       : Server Response -> Client

// API: Application Programming Interface: Piece of software that can be used by another piece of software, 
// in order to allow applications to talk to each other

// HTTP Request to get data - (CORS - Yes allows us to access other APIs)
// Endpoint is just the URL we need

// AJAX Call
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/name/india');
request.send();
// console.log(request.responseText);

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  // convert to JSON Object
  console.log(this.responseText);
})

// Callback hell - lots of callbacks in each function
// Promises to deal with Callback Hell

// Promise: An object that is used as a placeholder for future result of an asynchronous operation
//   => A container for a future value (Example: Response from AJAX call)
//   chaining promises allows to escape callback hell

// The promise lifecycle
// Pending: Before the future value is available
// Settled: (a) Fulfilled: Ready to use (b) Error has happened

// Fetch API returns a promise (Build Promise -> Consume Promise (once we already have a promise))
const request = fetch('https://restcountries.eu/rest/v2/name/india');
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (response) {
    console.log(response);
    return response.json(); // available on all the responses of the resolved value
  }).then(function (data) {
    console.log(data);
    renderCountry(data[0]);
  })// handling a fulfilled promise
  // fetch returns a promise and on all promises 'then' can be called
};

getCountryData('portugal')
  
// Short version
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData('portugal');

// Try, catch, finally
  const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`)
      }
      return response.json()
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0]

      if (!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
    }).then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      // catching the error
      console.log(`${err}`);
      renderError(`Something went wrong! ${err.message}. Try again!`);
    }).finally(() => {
      // always needs to happen no matter the promise loads or doesn't
      countriesContainer.style.opacity = 1;
    })
};
btn.addEventListener('click', function () {
  getCountryData('portugal');
})

getCountryData('sdfsdfsfd');
  
// Microtasks have priority over regular tasks
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');

// Asynchronous behavious with a promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening ~')
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰') // set as fulfilled
    } else {
      reject(new Error('You lost your money 😢'))
    }
  }, 2000)
})

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
  
// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}

wait(2).then(() => {
  console.log("I waited for two seconds");
  return wait(1);
}).then(() => console.log("I waited for 1 second"));

// Promise.resolve()
// takes in the resolved value as a parameter and handles it immediately.

































