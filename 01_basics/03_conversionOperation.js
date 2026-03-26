let score = 33
console.log(score, typeof score) // 33 'number'
console.log(typeof(score)) // 'number'
score = String(score)
console.log(score, typeof score) // '33' 'string'
score = Number(score)
console.log(score, typeof score) // 33 'number'
score = Boolean(score)
console.log(score, typeof score) // true 'boolean'
let valueInNumber = Number(score);
console.log(valueInNumber, typeof valueInNumber) // 1 'number'


score = "33abc";
let valueInNumber2 = Number(score);
console.log(valueInNumber2, typeof valueInNumber2) // NaN 'number'
// NaN stands for Not a Number, it is a special value in JavaScript that indicates that a value is not a valid number. When you try to convert a non-numeric string to a number using the Number() function, it will return NaN.

score = null;
let valueInNumber3 = Number(score);
console.log(valueInNumber3, typeof valueInNumber3) // 0 'number'
// When you convert null to a number using the Number() function, it will return 0. This is because null is considered a falsy value in JavaScript, and when you convert a falsy value to a number, it will return 0.

score = undefined;
let valueInNumber4 = Number(score);
console.log(valueInNumber4, typeof valueInNumber4) // NaN 'number'
// When you convert undefined to a number using the Number() function, it will return NaN. This is because undefined is not a valid number and cannot be converted to a numeric value.  


// "33" -> 33
// "33abc" -> NaN
//"vaibhaw" -> NaN
//true -> 1 false -> 0
// null -> 0
// undefined -> NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn) // true 'boolean'

isLoggedIn = 0;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn) // false 'boolean'

isLoggedIn = "vaibhaw";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn) // true 'boolean'

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn) // false 'boolean'

isLoggedIn = null;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn) // false 'boolean'

isLoggedIn = undefined;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn) // false 'boolean' 

// any number other than 0 will be true, 0 will be false
// any string other than empty string will be true, empty string will be false
// null and undefined will be false 




                                //********************************* OPERATIONS ********************************
let value = 33;
negvalue = -value;
console.log(negvalue, typeof negvalue) // -33 'number'
// console.log(2+2); //4
// console.log("2"+"2"); // '22'
// console.log("2"+2); // '22'
// console,log(2+'2'); // '22'
// console.log(2-2); // 0
// console.log("2"-"2"); // 0
// console.log("2"-2); // 0
// console.log(2-"2"); // 0
// When you use the - operator with strings that can be converted to numbers, JavaScript will convert the strings to numbers and perform the subtraction. In this case, "2" is converted to 2, and the result is 0. However, when you use the + operator with strings, it concatenates them together instead of performing addition.        

 console.log(2+'2'+2) // 222 and datatype is string
 console.log(2+2+'2') // 42 and datatype is string
 console.log(2-'2'+2) // 2 and datatype is number 
 // when you have a mix of numbers and strings in an expression, JavaScript will evaluate the expression from left to right. In the first expression, 2 - '2' is evaluated first, which results in 0. Then, 0 + 2 is evaluated, resulting in 2. In the second expression, 2 + 2 is evaluated first, resulting in 4. Then, 4 + '2' is evaluated, which results in '42' because the + operator concatenates the number and the string together.

// console.log(2*2); // 4
// console.log("2"*"2"); // 4
// console.log("2"*2); // 4
// console.log(2*"2"); // 4
// When you use the * operator with strings that can be converted to numbers, JavaScript will convert the strings to numbers and perform the multiplication. In this case, "2" is converted to 2, and the result is 4. However, when you use the + operator with strings, it concatenates them together instead of performing addition.

// console.log(2/2); // 1
// console.log("2"/"2"); // 1
// console.log("2"/2); // 1
// console.log(2/"2"); // 1
// When you use the / operator with strings that can be converted to numbers, JavaScript will convert the strings to numbers and perform the division. In this case, "2" is converted to 2, and the result is 1. However, when you use the + operator with strings, it concatenates them together instead of performing addition.   

// console.log(2%2); // 0       
// console.log("2"%"2"); // 0
// console.log("2"%2); // 0
// console.log(2%"2"); // 0
// When you use the % operator with strings that can be converted to numbers, JavaScript will convert the strings to numbers and perform the modulus operation. In this case, "2" is converted to 2, and the result is 0. However, when you use the + operator with strings, it concatenates them together instead of performing addition.      

// console.log(2**3); // 8
// console.log("2"**"3"); // 8
// console.log("2"**3); // 8
// console.log(2**"3"); // 8
// When you use the ** operator with strings that can be converted to numbers, JavaScript will convert the strings to numbers and perform the exponentiation. In this case, "2" is converted to 2, and the result is 8. However, when you use the + operator with strings, it concatenates them together instead of performing addition.    




let value1 = "33";
let value2 = " 44";
let result = value1 + value2;
console.log(result, typeof result) // '33 44' 'string'
// When you use the + operator with two strings, it concatenates them together. In this case, "33" and "44" are concatenated to form "33 44". The result is a string because both operands are strings.


//console.log(2 + 3 * 4 % 5); // 2 + 12 % 5 = 2 + 2 = 4

console.log(true); // true
console.log(+true); // 1
console.log(false); // false
console.log(+false); // 0
// When you use the unary + operator with a boolean value, it converts the boolean to a number. true is converted to 1 and false is converted to 0. This is because in JavaScript, true is considered a truthy value and false is considered a falsy value. When you convert a truthy value to a number, it will return 1, and when you convert a falsy value to a number, it will return 0.    

console.log(+""); // 0
// When you use the unary + operator with an empty string, it converts the empty string to a number. An empty string is considered a falsy value in JavaScript, and when you convert a falsy value to a number, it will return 0. Therefore, +"" evaluates to 0.

console.log(+"abc"); // NaN

let num1,num2,num3;
num1 = num2 = num3 = 2 + 3 * 4;
console.log(num1,num2,num3) // 14 14 14

let gamecounter =100;
gamecounter++; // gamecounter = gamecounter + 1 and so 100 + 1 = 101
++gamecounter; // gamecounter = gamecounter + 1 and so 101 + 1 = 102   
// difference between post increment and pre increment is that in post increment the value is used first and then it is incremented, whereas in pre increment the value is incremented first and then it is used. 
console.log(gamecounter) // 102
gamecounter--;
console.log(gamecounter) // 101
--gamecounter;// gamecounter = gamecounter - 1 and so 101 - 1 = 100
console.log(gamecounter) // 100

// link to study 
//https://tc39.es/ecma262/#sec-abstract-operations
