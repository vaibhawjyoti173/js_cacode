const userId = "122445" // it means that value of userId cannot be changed, it is a constant variable. It is a good practice to use const for variables that are not going to be reassigned, as it helps to prevent accidental changes and makes the code more readable. If you try to reassign a value to a const variable, it will throw an error.

let userName = "vaibhaw" // it means that value of userName can be changed, it is a variable. It is a good practice to use let for variables that are going to be reassigned, as it allows for more flexibility in your code. If you try to reassign a value to a const variable, it will throw an error.

var userAge = 20 // var is an older way to declare variables in JavaScript, and it has some quirks compared to let and const. It is generally recommended to use let and const instead of var, as they provide better scoping rules and help to prevent bugs. However, var is still valid and can be used in certain situations where function-scoped variables are needed.

// it is a good practice to use const and let instead of var, as they provide better scoping rules and help to prevent bugs. However, var is still valid and can be used in certain situations where function-scoped variables are needed.

console.log(userId) // 122445
console.log(userName) // vaibhaw
console.log(userAge) // 20

userName = "vaibhaw kumar" // this is valid because userName is declared with let, which allows for reassignment.
console.log(userName) // vaibhaw kumar

// userId = "54321" // this will throw an error because userId is declared with const, which does not allow for reassignment.       