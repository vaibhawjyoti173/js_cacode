"use strict"; // this is used to enable strict mode in JavaScript, which helps to catch common coding mistakes and unsafe actions
// ; can be used to separate multiple statements on a single line, but it is not necessary in Js if written in multiple lines

//alert(3+3) // this shows error because alert is not defined in Node.js environment, it is a function that is available in web browsers to display an alert dialog box with a specified message and an OK button. In Node.js, you can use console.log() to print messages to the console instead of alert().

// there are few datatypes in js 
let name = "vaibhaw" // represents string
let age = 20 // represents int 
let isloggedIn = true // represents boolean datatype 

/*Safe Integer Range: Integers can be safely and precisely represented between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER, inclusive.
Number.MAX_SAFE_INTEGER is 2⁵³ - 1 (or 9,007,199,254,740,991).
Number.MIN_SAFE_INTEGER is -(2⁵³ - 1) (or -9,007,199,254,740,991).
*/

// bigint 
// string => ""
// boolean =>true/false
// null => means it is empty
// undefined=> means value has not been assigned yet. note that it is different from null
// symbols => for uniqueness

// these were some primitive datatypes

// object are non-primitive datatypes that can store collections of data and more complex entities. They are used to represent real-world objects and their properties and behaviors. Objects can contain multiple key-value pairs, where the keys are strings (or symbols) and the values can be of any datatype, including other objects.

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isloggedIn); // boolean  
console.log(typeof "vaibhaw"); // string
console.log(typeof null); // object (this is a known quirk in JavaScript, where typeof null returns "object" due to historical reasons)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof 123n); // bigint             
