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

