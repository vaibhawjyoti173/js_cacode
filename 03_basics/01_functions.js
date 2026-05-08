// functions are reusable blocks of code that perform a specific task. They can take input parameters and return output. 
// Functions are defined using the function keyword followed by the function name and parentheses. The code block is enclosed 
// in curly braces. For example:
function sayMyName() {
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("W");
}
//sayMyName(); // Output: V A I B H A W (each letter is printed on a new line)
sayMyName; // Output: [Function: sayMyName] (this will log the function definition of the sayMyName function, 
// but it will not execute the function)

// we can also define a function that takes parameters. For example:
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Vaibhaw"); // Output: Hello, Vaibhaw!  

let username = greet("Vaibhaw"); // Output: Hello, Vaibhaw! but username will be undefined because the greet function does not return any value, 
// it only prints a message to the console, so when we try to assign the return value of the greet function to a variable, 
// it will be undefined because there is no return statement in the greet function.
console.log(username); // Output: undefined (the value of username is undefined because the greet function does not return any value)


function addTwoNumbers(num1, num2) {
    return num1 + num2; // the return statement is used to return a value from the function. 
    // note that it is not same as console.log() which is used to print a value to the console, 
    // but it does not return any value from the function where as return statement will return the value to the caller of the function.

    console.log("This will not be executed"); // this line will not be executed because it is after the return statement, 
    // so the function will exit as soon as it reaches the return statement and any code after the return statement will not be executed.
}
let sum = addTwoNumbers(5, 10); // calling the function and storing the returned value in a variable
console.log(sum); // Output: 15 (the sum of 5 and 10)
console.log(addTwoNumbers(20,"20")) //Output:2020
console.log(addTwoNumbers(3,"a")); //Output: 3a
console.log(addTwoNumbers(2,null)); //Output: 2 because null is treated as 0 in arithmetic operations
console.log(addTwoNumbers(2,undefined)); //Output: NaN because undefined is treated as NaN in arithmetic operations

// note that we usually understand that parameters and arguments are the same thing but they are not. 
// Parameters are the variables that are defined in the function definition, 
// while arguments are the actual values that are passed to the function when it is called.

function loginUser(username){
    return `Welcome, ${username}! You have successfully logged in.`;
}
let loginMessage = loginUser("Vaibhaw"); // Output: nothing is printed as function is returning a string but we are not printing it to the console,
// console.log(loginMessage); // Output: Welcome, Vaibhaw! You have successfully logged in. (the returned string from the loginUser function is printed to the console)

console.log(loginUser("")); // Output: Welcome, ! You have successfully logged in. 
// (the returned string from the loginUser function is printed to the console, 
// but since we passed an empty string as the username, it will be empty in the output)

console.log(loginUser()); // Output: Welcome, undefined! You have successfully logged in. 
// (the returned string from the loginUser function is printed to the console,
// but since we did not pass any argument to the function, the username parameter will be undefined, so it will be printed as undefined in the output)

// these cases of passing empty string or not passing any argument to the function can lead to unexpected results, so it is always a good practice to validate 
// the input parameters in the function and handle such cases accordingly. 
// For example, we can modify the loginUser function to check if the username is empty or undefined and return an appropriate message:

function loginUser2(username){
    if(!username){ //checks if the username is falsy (which includes empty string, undefined, null, etc.)
        // !username will be true if username is falsy, so it will cover all the cases of empty string, undefined, null, etc.
        return "Username cannot be empty. Please provide a valid username.";
    }
    return `Welcome, ${username}! You have successfully logged in.`;
}

// we can also use default parameters in functions to provide default values for parameters if no argument is passed when the function is called. For example:
function greet2(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet2()); // Output: Hello, Guest! (since no argument is passed, the default value "Guest" is used)
console.log(greet2("Vaibhaw")); // Output: Hello, Vaibhaw! (the passed argument "Vaibhaw" is used instead of the default value)  

// we can also use rest parameters to handle an indefinite number of arguments in a function which is generally case when we don't know how many arguments will be passed
//  like shopping carts.
// rest parameters are denoted by three dots (...) followed by the parameter name. It allows us to represent an indefinite number of arguments as an array 
// which is same as spread operator but it is used in function parameters to collect the remaining arguments into an array, 
// whereas spread operator is used to expand an array into individual elements.
function calculateCartPrice(...num) {
    return num;
}
console.log(calculateCartPrice(1, 2, 3)); // Output: [1, 2, 3] (the rest parameter collects all the passed arguments into an array and returns it)
// but if we pass parameters like this: val1,val2,...num then it will treat val1 and val2 as separate parameters and the rest parameter will collect the remaining arguments 
// into an array. For example:

function calculateCartPrice2(val1, val2, ...num) {
    // console.log(val1); // Output: 1 (the first argument is assigned to val1)
    // console.log(val2); // Output: 2 (the second argument is assigned to val2)
    return num; 
}
console.log(calculateCartPrice2(1,2,3,4,5)); // Output: [3, 4, 5] (the rest parameter collects the remaining arguments into an array and returns it)

// lets understand handling objects inside functions:
const user={
    username : "Vaibhaw",
    age : 22,
    email : "vaibhaw@example.com"
}           
function displayUserInfo(anyobject){
    return `Username: ${anyobject.username}, Age: ${anyobject.age}, Email: ${anyobject.email}`;
}
console.log(displayUserInfo(user)); // Output: Username: Vaibhaw, Age: 22, Email: vaibhaw@example.com 
// but note that in function while using anyobject.properties name of the properties should be same as the properties of the object that we are passing to the function,
// otherwise it will return undefined for those properties.

// we can also directly pass object while calling the function 
console.log(displayUserInfo({username: "Vaibhaw", age: 22, email: "vaibhaw@example.com"})); // Output: Username: Vaibhaw, Age: 22, Email: vaibhaw@example.com 

// similar thing can be done with arrays as well, we can pass an array to a function and access its elements using the index. For example:

function displayFirstElement(arr){
    return `The first element of the array is: ${arr[0]}`;
}
console.log(displayFirstElement([1, 2, 3, 4, 5])); // Output: The first element of the array is: 1 (the first element of the array is accessed using the index 0)
