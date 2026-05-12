const user  ={
    username:'Vaibhaw',
    price : 1000,
    welcomemessage : function() {
        console.log("Welcome " + this.username); // Output: Welcome Vaibhaw (the function can access the username property of the user object using the this keyword)
        // or console.log(`Welcome ${this.username}`); // Output: Welcome Vaibhaw 
        console.log(this); // Output: {username: 'Vaibhaw', price: 1000, welcomemessage: ƒ} ('this' keyword refers to the user object which is the current context of the function)
    }
}
user.welcomemessage(); // Output: Welcome Vaibhaw (the function is called using the user object)
// user.welcomemessage // code will run but nothing is printed because () is important whenever we want to call any method of the function.
//so this keyword is used to refer current context, in above example this refers to the user object, and it can access properties of the user object using this keyword.

user.username = "John"; // we can change the username property of the user object 
user.welcomemessage(); // Output: Welcome John (the function can access the updated username property of the user object using the this keyword as the current context is changed 
// so this.username will now refer to the updated username property of the user object)

console.log(this); // Output: Window (in browser, this refers to the global object which is Window, but in node it will refer to the global empty object which is global)
// so in the global scope, this refers to the global object, but inside a function, this refers to the object that is calling the function. 
// and in an arrow function, this refers to the lexical scope, which means it refers to the scope in which the arrow function is defined.


// function chai(){
//     console.log(this); 
//     // <ref *1> Object [global] {
// //   global: [Circular *1],
// //   clearImmediate: [Function: clearImmediate],
// //   setImmediate: [Function: setImmediate] {
// //     Symbol(nodejs.util.promisify.custom): [Getter]
// //   },
// //   clearInterval: [Function: clearInterval],
// //   clearTimeout: [Function: clearTimeout],
// //   setInterval: [Function: setInterval],
// //   setTimeout: [Function: setTimeout] {
// //     Symbol(nodejs.util.promisify.custom): [Getter]
// //   },
// //   queueMicrotask: [Function: queueMicrotask],
// //   structuredClone: [Function: structuredClone],
// //   atob: [Function: atob],
// //   btoa: [Function: btoa],
// //   performance: [Getter/Setter],
// //   fetch: [Function: fetch],
// //   crypto: [Getter],
// //   navigator: [Getter]
// }
// chai();

// function  chai(){
//     let username ="Vaibhaw";
//     console.log(this.username); // Output: undefined (in a regular function, this refers to the global object, and since there is no username property in the global object,
//     // it returns undefined)
// }
//chai();

// const chai = function() {
//     let username ="Vaibhaw";
//     console.log(this.username); // Output: undefined (in a regular function, this refers to the global object, and since there is no username property in the global object,
//     // it returns undefined)
// }
// chai();

const chai= () => {
    let username ="Vaibhaw";
    //console.log(this); // {}
    console.log(this.username); // Output: undefined (in an arrow function, this refers to the lexical scope, which means it refers to the scope in which the arrow function is defined,
}
chai(); 

const add = (num1,num2)=> {
    return num1+num2;
}
console.log(add(2,3)); // Output: 5 (the arrow function can be called like a regular function)

// if there is only one parameter in the arrow function, we can omit the parentheses around the parameter. For example:
const square = num => {
    return num*num;
}
console.log(square(4)); // Output: 16 (the arrow function can be called like a regular function)

// if there is only one expression in the arrow function, we can omit the curly braces and the return keyword. For example:
const cube = num => num*num*num;  // this way is called implicit return, where the value of the expression is automatically returned without the need for the return keyword.
console.log(cube(3)); // Output: 27 (the arrow function can be called like a regular function)

// so note that if curly braces are used in arrow functions then return keyword is needed but if small braces or no braces are used then return keyword is not needed.

const sqrt = num => (num**0.5); // this way is called implicit return, where the value of the expression is automatically returned without the need for the return keyword.
console.log(sqrt(16)); // Output: 4 (the arrow function can be called like a regular function)

let dummyarrow =(num1,num2) => num1>num2 ? num1 : num2; // this function returns the maximum of two numbers using a ternary operator
console.log(dummyarrow(5,10)); // Output: 10 (the arrow function can be called like a regular function)

let lol = (num1, num2) => {username: "Vaibhaw", sum : `${num1+num2}`};
// Output: undefined — BUT not because of missing return keyword
// REAL reason: {} is treated as a code block, not an object literal
// JS sees 'username:' as a label, not a key — this is a common trap
// Fix: either use return keyword OR wrap in parentheses like lol2

// let lol =(num1,num2) => {return {username : "Vaibhaw", sum : num1+num2}}; // this function returns an object with username and sum properties
// console.log(lol(2,3)); // Output: { username: 'Vaibhaw', sum: 5 } 

let lol2 =(num1,num2) => ({username : "Vaibhaw", sum : num1+num2}); // this function returns an object with username and sum properties
console.log(lol2(2,3)); // Output: { username: 'Vaibhaw', sum: 5 } (the arrow function returns the object because it is wrapped in parentheses, which allows 
// for implicit return of the object)




