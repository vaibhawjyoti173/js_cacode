// now manytimes to prevent global scope pollution, we can use IIFE (Immediately Invoked Function Expression) which is a function that is defined and immediately invoked. 
// It is a common pattern in JavaScript to create a new scope and avoid polluting the global scope. For example:
(function() {
    let name = "Vaibhaw"; // this variable is in the scope of the IIFE
    console.log(name); // Output: Vaibhaw (the variable can be accessed inside the IIFE)
})();
// console.log(name); // Output: ReferenceError: name is not defined (the variable cannot be accessed outside the IIFE)

// in the above example, we have defined an IIFE which creates a new scope for the variable name. The variable name can be accessed inside the IIFE, 
// but it cannot be accessed outside the IIFE, which helps to prevent global scope pollution.
// NOTE that ()() is used to define and immediately invoke the function. The first () is used to define the function, and the second () is used to invoke the function. 
// also note that ; is needed if there is another iife after the first iife, to prevent syntax errors. For example:

// (function() {
//     let name = "Vaibhaw"; // this variable is in the scope of the IIFE
//     console.log(name); // Output: Vaibhaw (the variable can be accessed inside the IIFE)
// })()

// ( ()=> {
//     let age = 22; // this variable is in the scope of the IIFE
//     console.log(age); // Output: 22 (the variable can be accessed inside the IIFE)
// } )();
// this will give error due to missing ; after the first IIFE, so we need to add ; after the first IIFE to prevent syntax errors and note that iife 
// can be used for both regular functions and arrow functions.

((name)=>{console.log(`Hello, ${name}!`); // Output: Hello, Vaibhaw! (the variable name is passed as an argument to the IIFE and can be accessed inside the IIFE)
}) ( "Vaibhaw" ); // this is unnamed IIFE which takes an argument and immediately invokes the function with the argument


(function chai(){
    let username ="Vaibhaw";
    console.log(`${username}`); // Output: Vaibhaw (the variable username can be accessed inside the IIFE)
    
})(); // this is example of named  IIFE, where the function is named chai and it can be accessed inside the IIFE, but it cannot be accessed outside the IIFE.
