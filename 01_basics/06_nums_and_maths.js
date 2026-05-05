let score = 400;
console.log(score); // Output: 400
console.log(typeof score); // Output: number

const score2 = new Number(400);
console.log(score2); // Output: [Number: 400]
console.log(typeof score2); // Output: object

console.log(score.toString().length); // Output: 3
console.log(score.toFixed(1)); // Output: "400.0" — string with 1 decimal place
console.log(score.toExponential(2)); // Output: "4.00e+2" — e+2 means 10^2
console.log(score.toPrecision(2)); // Output: "4.0e+2" — 2 significant digits

const othernumber = 123.7345;
console.log(othernumber.toPrecision(2)); // Output: "1.2e+2" which equals 120 — 2 significant digits
console.log(othernumber.toPrecision(3)); // Output: "124" — 3 significant digits
console.log(othernumber.toPrecision(4)); // Output: "123.7" — 4 significant digits
console.log(othernumber.toPrecision(5)); // Output: "123.73" — 5 significant digits
console.log(othernumber.toPrecision(6)); // Output: "123.734" — 6 significant digits
console.log(othernumber.toPrecision(7)); // Output: "123.7345" — 7 significant digits (original number)

const lol = 40000000;
console.log(lol.toLocaleString());       // Output: "40,000,000" — default US locale
console.log(lol.toLocaleString('en-US')); // Output: "40,000,000" — US thousands separator
console.log(lol.toLocaleString('en-IN')); // Output: "4,00,00,000" — Indian numbering system

console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308 — largest positive finite number in JS

console.log(Number.MIN_VALUE);
// Output: 5e-324
// IMPORTANT: NOT a large negative number (unlike some other languages).
// This is the tiniest positive number above zero.
// Largest negative number = -Number.MAX_VALUE (~-1.79e+308)
// Common trap: developers expect MIN_VALUE to be negative — it is not.







// ======================== MATH ========================

console.log(Math); // Math object with constants and methods
console.log(Math.abs(-5)); // Output: 5 — absolute value
console.log(Math.round(4.3)); // Output: 4 — rounds to nearest integer
console.log(Math.round(4.7)); // Output: 5 — rounds to nearest integer
console.log(Math.ceil(4.3)); // Output: 5 — rounds up to next integer
console.log(Math.floor(4.7)); // Output: 4 — rounds down to previous integer
console.log(Math.max(1, 5, 3)); // Output: 5 — maximum of given numbers
console.log(Math.min(1, 5, 3)); // Output: 1 — minimum of given numbers
console.log(Math.random()); // Output: random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10); // Output: random number between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random() * 10)); // Output: random integer between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // Output: random integer between 1 and 10 

// Random integer between min (inclusive) and max (inclusive)
const min = 5;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // very important formula to remember for generating random integers in a specific range
// Output: random integer between 5 and 20

console.log(Math.PI); // Output: 3.141592653589793
let a = Math.PI;
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
// PI is a constant — cannot be changed or deleted

console.log(Math.E); // Output: 2.718281828459045 — Euler's number

// Use string primitive — NOT new String() wrapper
let names = "John";
console.log(typeof names); // Output: "string" (not "object")

console.log(Object.getOwnPropertyDescriptor(names, "0"));
// Output: { value: 'J', writable: false, enumerable: true, configurable: false }
// Node.js auto-boxes the primitive temporarily, so it works just like a String object

let namesObj = new String("John");
console.log(Object.getOwnPropertyDescriptor(namesObj, "0"));
// Output: { value: 'J', writable: false, enumerable: true, configurable: false }

// Check valueOf on String prototype (not on the instance)
console.log(Object.getOwnPropertyDescriptor(String.prototype, "valueOf"));
// Output: { value: [Function: valueOf], writable: true, enumerable: false, configurable: true }

console.log(Object.getOwnPropertyNames(Math));
// Returns ALL OWN property names of Math — both enumerable AND non-enumerable.
// Does NOT include inherited properties from prototype chain.
// Output: [ 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2',
//           'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh',
//           'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround',
//           'hypot', 'imul', 'log', 'log10', 'log2', 'max', 'min', 'pow',
//           'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc' ]