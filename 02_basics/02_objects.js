// Symbols are always unique — even with same description(this part is written here for revision)
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false — completely different symbols

const mysym = Symbol("my symbol"); // creating a symbol with a description

const userJS ={
    name: "John",
    "full name": "John Doe", // keys with spaces need to be in quotes
    age: 30,
    mysym: "key1", // using the symbol as a value in the object
    [mysym]: "key1", // using the symbol as a key in the object
    isAdmin: true,
    courses: ["html", "css", "js"],
    wife: null,
    isLoggedIn: false,
    lastloginDays: ["Monday", "Tuesday", "Wednesday"]
}
//console.log(userJS);
console.log(Object.keys(userJS));
// Output: ['name', 'full name', 'age', 'mysym', 'isAdmin', 'courses', 'wife', 'isLoggedIn', 'lastloginDays']
// notice: Symbol key does NOT appear in Object.keys() — symbols are hidden from normal enumeration

// note that above is one way of creating an object in JavaScript, there are other ways to create objects as well.
// here object literals are used to create an object, which is a collection of key-value pairs.
// the keys in an object are also called properties, and the values can be of any data type, including other objects and arrays.
// keys are always strings (or symbols), and they are used to access the corresponding values in the object but in js you dont need to use quotes for 
// keys when defining an object literal, but when accessing the properties using bracket notation, you need to use quotes around the property name.

// you can access the properties of an object using dot notation or bracket notation. For example:
console.log(userJS.name); // Output: "John" (accessing the 'name' property using dot notation), we dont need to use quotes around key name when using dot notation

// note that if the property name has spaces or special characters, you cannot use dot notation to access it, and you must use bracket notation instead.
console.log(userJS["full name"]); // Output: "John Doe" (accessing the 'full name' property using bracket notation) and here we need to use quotes
//  around the property name when using bracket notation

console.log(userJS.age); // Output: 30 (accessing the 'age' property using dot notation) and here we dont need to use quotes around the property name 
// when using dot notation
console.log(userJS["age"]); // Output: 30 (accessing the 'age' property using bracket notation) and here we need to use quotes around the property 
// name when using bracket notation

console.log(userJS.courses[0]);        // "html" — dot + index
console.log(userJS["courses"][1]);     // "css"  — bracket + index

console.log(userJS.mysym); // Output: 'key1' (accessing the property with the key mysym using dot notation)
console.log(typeof userJS.mysym); // Output: 'string' (the type of the value stored in the 'mysym' property is 'string')
console.log(userJS[mysym]); // Output: 'key1' (accessing the property with the key mysym using bracket notation)
console.log(typeof userJS[mysym]); // Output: 'string' (the type of the value stored in the property with the key mysym is also 'string')

// Symbols don't show up in:
// console.log(Object.keys(userJS));         // ← symbol missing
// console.log(Object.values(userJS));       // ← symbol missing
// console.log(JSON.stringify(userJS));      // ← symbol missing
// for (let key in userJS) { }              // ← symbol missing

// // Only way to access symbol keys:
// console.log(Object.getOwnPropertySymbols(userJS)); // [Symbol(my symbol)]
// console.log(userJS[mysym]);                         // "key1"

// now to update anything in object, we can simply assign a new value to the property using dot notation or bracket notation. For example:
userJS.age = 31; // updating the 'age' property using dot notation
console.log(userJS.age); // Output: 31 (the 'age' property has been updated to 31)

// also if we want to not allow any changes to the object, we can use Object.freeze() method to freeze the object. For example:
// Object.freeze(userJS);
userJS.age = 32; // if trying to update the 'age' property after freezing the object
console.log(userJS.age); // Output: 31 (the 'age' property remains unchanged because the object is frozen)

// we can also add new properties to the object after it has been created. For example:
userJS.email = "john.doe@example.com"; // adding a new property 'email' to the object
console.log(userJS.email); // Output: "john.doe@example.com" but if the object is frozen, it will return undefined because we cannot add new properties to a frozen 
// object so first we need to unfreeze the object using Object.isFrozen() method to check if the object is frozen or not, 
// and then we can add new properties to the object.

// we can also add function in an object, which is called a method. For example:
userJS.greet = function() {
    console.log("Hello, my name is " + this.name); // this keyword refers to the current object, so this.name will access the name property of the userJS object
}
userJS.greet();
// Output: "Hello, my name is John"

console.log(userJS.greet);
// Output: [Function (anonymous)] // this will log the function definition of the greet method, but it will not execute the function.

console.log(userJS.greet());
// First:  "Hello, my name is John" (function executes)
// Then:   undefined (no return value, so console.log logs undefined)


