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
            

            






















