// primitive data types are immutable, which means that their values cannot be changed once they are created. When you perform an operation on a primitive value, it creates a new value rather than modifying the original value. For example:
let str = "Hello";
let newStr = str.toUpperCase(); // creates a new string "HELLO" and assigns it to newStr
console.log(str); // Output: "Hello" (original string remains unchanged)
console.log(newStr); // Output: "HELLO" (new string created by the operation)
str= "hello"; // here we are reassigning the variable str to a new string "hello", but the original string "Hello" still exists in memory until it is garbage collected. This is because strings are immutable, so when we change the value of str, it creates a new string in memory rather than modifying the original string.
console.log(str); // Output: "hello" (str now points to the new string "hello")

// In JavaScript, primitive data types include:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (introduced in ES6)
// 7. BigInt (introduced in ES2020)

// all of these are passed by value type
// Each of these primitive data types has its own characteristics and behaviors, but they all share the common property of being immutable. When you perform an operation on a primitive value, it creates a new value rather than modifying the original value.
// here there is no special thing like float, double, int, long etc. all numbers are of type number and they are all floating point numbers. This means that they can represent both integers and decimal numbers, but they may not be able to represent very large or very small numbers with high precision due to the limitations of the floating-point representation. For example:
let num1 = 0.1 + 0.2; // This should equal 0.3, but due to floating-point precision issues, it does not.
console.log(num1); // Output: 0.30000000000000004


// symbols are a new primitive data type introduced in ES6. They are unique and immutable values that can be used as keys for object properties. Each symbol is guaranteed to be unique, even if they have the same description. For example:
let sym1 = Symbol("mySymbol");
let sym2 = Symbol("mySymbol");
console.log(sym1 === sym2); // Output: false (sym1 and sym2 are different symbols, even though they have the same description) 

// BigInt is a new primitive data type introduced in ES2020 that can represent integers with arbitrary precision. This means that you can use BigInt to represent very large integers that cannot be represented by the Number type. For example:
let bigInt1 = BigInt("9007199254740991"); // This is the largest integer that can be represented by the Number type
let bigInt2 = bigInt1 + 1n; // This creates a new BigInt value that is one greater than bigInt1
console.log(bigInt1); // Output: 9007199254740991n
console.log(bigInt2); // Output: 9007199254740992n (bigInt2 is a new BigInt value that is one greater than bigInt1)     



// In contrast, non-primitive data types (objects, arrays, functions) are mutable, which means that their values can be changed after they are created. When you perform an operation on a non-primitive value, it modifies the original value rather than creating a new value and which means that original value is no longer stored in memory in garbage collection. For example:


// const arr = [1, 2, 3];
// arr.push(4); // modifies the original array by adding a new element to it
// console.log(arr); // Output: [1, 2, 3, 4] (original array is modified)

// let myObj = { name: "Alice", age: 30 };
// myObj.age = 31; // modifies the original object by changing the value of the age property
// console.log(myObj); // Output: { name: "Alice", age: 31 } (original object is modified)  

// now here since arr and objects are non primitive data types, they are passed by reference type, which means that when you assign an array or an object to a variable, you are actually assigning a reference to the memory location where the array or object is stored, rather than the value itself. This means that if you modify the array or object through one variable, it will affect all variables that reference the same array or object. For example:

let arr1 = [1, 2, 3]; // we used let here because we will reassign arr1 later, but if we had used const, we would not be able to reassign arr1 to a new array later in the code. This is because const variables cannot be reassigned after they are initialized. However, we can still modify the contents of the array that arr1 references, even if arr1 is declared as a constant. For example:         
const arr2 = arr1; // arr2 is a reference to the same array as arr1
arr2.push(4); // modifies the original array that both arr1 and arr2 reference
console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is also modified because it references the same array as arr2)
console.log(arr2); // Output: [1, 2, 3, 4] (arr2 is modified as well)

// but here when we reassign arr1 to a new array, it does not affect arr2 because arr2 still references the original array. For example:
arr1 = [5, 6, 7]; // arr1 now references a new array, but arr2 still references the original array
console.log(arr1); // Output: [5, 6, 7] (arr1 now references a new array)
console.log(arr2); // Output: [1, 2, 3, 4] (arr2 still references the original array)   



// similarly for objects:
let obj1 = { name: "Alice", age: 30 };
let obj2 = obj1; // obj2 is a reference to the same object as obj1
obj2.age = 31; // modifies the original object that both obj1 and obj2 reference
console.log(obj1); // Output: { name: "Alice", age: 31 } (obj1 is also modified because it references the same object as obj2)
console.log(obj2); // Output: { name: "Alice", age: 31 } (obj2 is modified as well)

// but here when we reassign obj1 to a new object, it does not affect obj2 because obj2 still references the original object. For example:
obj1 = { name: "Bob", age: 25 }; // obj1 now references a new object, but obj2 still references the original object
console.log(obj1); // Output: { name: "Bob", age: 25 } (obj1 now references a new object)
console.log(obj2); // Output: { name: "Alice", age: 31 } (obj2 still references the original object)    

// similarly for functions: 
function greet() {
  console.log("Hello!");
}
let greet2 = greet; // greet2 is a reference to the same function as greet
greet2(); // Output: "Hello!" (greet2 calls the same function as greet)

// but here when we reassign greet to a new function, it does not affect greet2 because greet2 still references the original function. For example:
greet = function() {
  console.log("Hi!");
}; // greet now references a new function, but greet2 still references the original function
greet(); // Output: "Hi!" (greet now calls the new function)
greet2(); // Output: "Hello!" (greet2 still calls the original function)        




// js is a dynamically typed language, which means that you can change the type of a variable at runtime. For example:
let myVar = "Hello"; // myVar is a string
console.log(typeof myVar); // Output: "string"
myVar = 42; // myVar is now a number
console.log(typeof myVar); // Output: "number"
myVar = true; // myVar is now a boolean
console.log(typeof myVar); // Output: "boolean"

// js is a loosely typed language, which means that you can compare values of different types and JavaScript will attempt to convert them to a common type before making the comparison. This is known as type coercion. In contrast, TypeScript is a strongly typed language, which means that you cannot compare values of different types without explicitly converting them to a common type.



// typeof operator for all primitive and non primitive data types:
console.log(typeof "Hello"); // Output: "string"
console.log(typeof 42.1); // Output: "number"
console.log(typeof true); // Output: "boolean"
console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript, null is actually a primitive data type, but typeof returns "object")
console.log(typeof undefined); // Output: "undefined"
console.log(typeof Symbol("mySymbol")); // Output: "symbol"
console.log(typeof BigInt("9007199254740991")); // Output: "bigint"
console.log(typeof [1, 2, 3]); // Output: "object" (arrays are a type of object in JavaScript)
console.log(typeof { name: "Alice", age: 30 }); // Output: "object"
console.log(typeof function() {}); // Output: "function" (functions are a special type of object in JavaScript)

// link: https://262.ecma-international.org/5.1/#sec-11.4.3




// there are two types of memory management in JavaScript: stack and heap. 
// Primitive data types are stored in the stack, while non-primitive data types (objects, arrays, functions) are stored in the heap. The stack is a region of memory that is used for storing primitive values and function call frames, while the heap is a region of memory that is used for storing objects and other complex data structures. When you create a variable that holds a primitive value, it is stored directly in the stack. When you create a variable that holds a non-primitive value, it is stored in the heap, and the variable holds a reference to the location of that value in memory. This is why non-primitive data types are passed by reference type, while primitive data types are passed by value type.

// lets understand this with an example:
let num = 42; // num is a primitive value stored in the stack
let obj = { name: "Alice", age: 30 }; // obj is a non-primitive value stored in the heap, and the variable obj holds a reference to the location of that object in memory

// when we assign num to another variable, it creates a copy of the value in the stack:
let num2 = num; // num2 is a copy of the value of num, and it is also stored in the stack
num2 = 43; // modifying num2 does not affect num because they are stored separately in the stack
console.log(num); // Output: 42 (num remains unchanged)
console.log(num2); // Output: 43 (num2 is modified)

// when we assign obj to another variable, it creates a reference to the same object in the heap:
let obj2 = obj; // obj2 is a reference to the same object as obj, and it is stored in the heap
obj2.age = 31; // modifying obj2 modifies the original object that both obj and obj2 reference
console.log(obj); // Output: { name: "Alice", age: 31 } (obj is modified because it references the same object as obj2)
console.log(obj2); // Output: { name: "Alice", age: 31 } (obj2 is modified as well)