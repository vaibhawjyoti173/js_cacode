// here we will learn about scopes in JavaScript. A scope is the current context of code, which determines the accessibility of variables and functions.  
// In JavaScript, there are three types of scopes: global scope, function scope, and block scope.
// Global scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// Function scope: Variables declared inside a function are in the function scope and can only be accessed within that function.
// Block scope: Variables declared inside a block (using let or const) are in the block scope and can only be accessed within that block like if, for, while, etc.

// let and const are block scoped, which means they are only accessible within the block they are defined in.
// var is function scoped, which means it is accessible within the function it is defined in, but not outside of it. 
// If var is declared outside of any function, it will be in the global scope and can be accessed from anywhere in the code.

// example of global scope
let globalVariable = "I am a global variable"; // this variable is in the global scope

function myFunction() {
    console.log(globalVariable);
}
myFunction();  // Output: I am a global variable (the global variable can be accessed inside the function)

console.log(globalVariable); // Output: I am a global variable (the global variable can be accessed outside the function as well)

// example of function scope
function anotherFunction() {
    let functionVariable = "I am a function variable"; // this variable is in the function scope
    console.log(functionVariable); // Output: I am a function variable (the function variable can be accessed inside the function)
}
anotherFunction();
// console.log(functionVariable); // Output: ReferenceError: functionVariable is not defined (the function variable cannot be accessed outside the function)  

// example of block scope
if (true) {
    let blockVariable = "I am a block variable"; // this variable is in the block scope
    console.log(blockVariable); // Output: I am a block variable (the block variable can be accessed inside the block)
}
// console.log(blockVariable); // Output: ReferenceError: blockVariable is not defined (the block variable cannot be accessed outside the block)

// example of var being function scoped
function varFunction() {
    var functionVar = "I am a function variable declared with var"; // this variable is in the function scope
    console.log(functionVar); // Output: I am a function variable declared with var (the function variable can be accessed inside the function)
}
varFunction();
// console.log(functionVar); // Output: ReferenceError: functionVar is not defined (the function variable cannot be accessed outside the function)

// example of var being in global scope
var globalVar = "I am a global variable declared with var"; // this variable is in the global scope
console.log(globalVar); // Output: I am a global variable declared with var (the global variable can be accessed from anywhere in the code)         

// main problem with var is that it is function scoped and not block scoped, which can lead to unexpected behavior when using var inside loops or if statements. 
for (var i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4 (the value of i is printed in each iteration of the loop)
}
console.log(i); // Output: 5 (the value of i is still accessible outside the loop and it will be 5 after the loop ends, which can lead to unexpected behavior)

// to avoid such issues, it is recommended to use let or const instead of var, as they are block scoped and will not be accessible outside the block they are defined in.
for (let j = 0; j < 5; j++) {
    console.log(j); // Output: 0 1 2 3 4 (the value of j is printed in each iteration of the loop)
}
// console.log(j); // Output: ReferenceError: j is not defined (the value of j is not accessible outside the loop, which is the expected behavior)

// if we use same name for variables with let or const in different scopes, they will not interfere with each other as they are block scoped. For example:
let name = "Vaibhaw"; // this variable is in the global scope
if (true) {
    let name = "John"; // this variable is in the block scope and it does not interfere with the global variable
    console.log(name); // Output: John (the block variable is accessed inside the block)
}
console.log(name); // Output: Vaibhaw (the global variable is accessed outside the block)

// if we use same name for variables with var in different scopes, they will interfere with each other as they are function scoped. For example:
var age = 22;
if (true) {
    var age = 30; // this variable is in the function scope and it will interfere with the global variable
    console.log(age); // Output: 30 (the function variable is accessed inside the function)
}
console.log(age); // Output: 30 (the global variable is accessed outside the block scope, but it has been overwritten by the if block, which can lead to unexpected behavior) 


// finally note that these scope is different in node environment and in browser, in node we have module scope which is different from global scope, 
// but in browser we have global scope which is accessible from anywhere in the code.


// lets discuss about nested scopes, in JavaScript we can have nested functions, which means we can have a function inside another function.
function outerFunction() {
    let outerVariable = "I am an outer variable"; // this variable is in the outer function scope

    function innerFunction() {
        let innerVariable = "I am an inner variable"; // this variable is in the inner function scope
        console.log(outerVariable); // Output: I am an outer variable (the outer variable can be accessed inside the inner function)
        console.log(innerVariable); // Output: I am an inner variable (the inner variable can be accessed inside the inner function)
    }
    innerFunction();
    // console.log(innerVariable); // Output: ReferenceError: innerVariable is not defined (the inner variable cannot be accessed outside the inner function)
}
outerFunction();
// console.log(outerVariable); // Output: ReferenceError: outerVariable is not defined (the outer variable cannot be accessed outside the outer function)

// in the above example, we have an outer function and an inner function. The outer function has a variable outerVariable which is in the outer function scope, 
// and the inner function has a variable innerVariable which is in the inner function scope. The inner function can access the outer variable, 
// but the outer function cannot access the inner variable.
// also note that if innerfunction is not called inside the outer function, then the inner variable will not be created and it will not be accessible from anywhere 
// in the code.

if(true) {
    const username = "Vaibhaw"; // this variable is in the block scope
    if(username==="Vaibhaw") {
        const website ="Youtube"; // this variable is in the block scope
        console.log(username + ' ' + website); // Output: Vaibhaw Youtube (the block variable is accessed inside the block)
    }
    //console.log(website); // Output: ReferenceError: website is not defined (the block variable cannot be accessed outside the block)
    
}
//console.log(username); // Output: ReferenceError: username is not defined (the block variable cannot be accessed outside the block)


// function can also be assigned to variables, and they will be in the scope of the variable they are assigned to. For example:
const myFunc = function() {
    console.log("I am a function assigned to a variable"); // this function is in the scope of the variable myFunc
}
myFunc(); // Output: I am a function assigned to a variable (the function can be accessed using the variable it is assigned to)

// now there is interesting thing that happens when first call the function before it is defined, this is called hoisting. 
// In JavaScript, function declarations are hoisted to the top of their scope, which means that you can call a function before it is defined in the code. For example:
console.log(addone(5)); // Output: 6 (the function can be called before it is defined due to hoisting)

function addone(num) {
    return num + 1; // this function is hoisted to the top of its scope, so it can be called before it is defined
}   

// however, if we use function expression instead of function declaration, then it will not be hoisted and we cannot call the function before it is defined. For example:
// console.log(addtwo(5)); // Output: ReferenceError: Cannot access 'addtwo' before initialization (the function cannot be called before it is defined)

const addtwo = function(num) {
    return num + 2; // this function is not hoisted, so it cannot be called before it is defined
}
console.log(addtwo(5)); // Output: 7 (the function can be called after it is defined)

/************************************************************VERY IMPORTANT THING ABOUT HOISTING WITH LET AND VAR */
// when we use var to declare a variable, it is hoisted to the top of its scope and initialized with undefined. For example:
console.log(x); // Output: undefined (the variable x is hoisted and initialized with undefined)
var x = 10; // this variable is hoisted to the top of its scope and initialized with undefined, then it is assigned the value 10
console.log(x); // Output: 10 (the variable x is now assigned the value 10)

// however, when we use let or const to declare a variable, it is hoisted to the top of its scope but it is not initialized. For example:
// console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization (the variable y is hoisted but not initialized)
let y = 20; // this variable is hoisted to the top of its scope but it is not initialized, then it is assigned the value 20
console.log(y); // Output: 20 (the variable y is now assigned the value 20)

