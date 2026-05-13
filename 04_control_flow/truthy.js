// note that there are truthy values which is considered always true and falsy values which is always considered false in js

const email="vaibhaw@gmail.in";
if(email){
    console.log("verified");
}
else{
    console.log("not verified");
}
// here output is : 'verified' as email is containing non empty string which is truthy value 

// FALSY values — exactly 7 in JavaScript:
// false, 0, -0, 0n, "", null, undefined, NaN

// TRUTHY values — everything else, including these common surprises:
// "0"          ← non-empty string, even if it contains "false" or "0"
// "false"      ← non-empty string
// " "          ← space — non-empty string
// []           ← empty array
// {}           ← empty object
// function(){} or ()=>{} ← any function
// -1           ← any non-zero number including negative

const arr =[];
if(arr.length===0){
    console.log("array is empty");
}
else
{
    console.log("array is not empty");
}
// output: array is empty

const emptyobj ={};
if(Object.keys(emptyobj).length===0){
    console.log(`"object is empty"`); 
}
else {
    console.log(`object is not empty`);
}
// output: "object is empty"

if(false==0 && false=='' && 0==''){
    console.log("all are false");
} 
else{
    console.log("all are not false");
}
// output : all are false
// WHY this works:
// false == 0   → JS converts false to 0  → 0==0   → true
// false == ''  → JS converts both to 0   → 0==0   → true
// 0 == ''      → JS converts '' to 0     → 0==0   → true
// This is called TYPE COERCION — == triggers implicit type conversion
// This is exactly why === is always preferred over ==


//nullish coalescing ?? vs || with truthy/falsy
// || uses falsy check — falls back for 0, "", false, null, undefined
const score1 = 0;
console.log(score1 || "no score"); // "no score" ← wrong, 0 is valid but falsy

// ?? uses nullish check — only falls back for null and undefined
const score2 = 0;
console.log(score2 ?? "no score"); // 0 ← correct
console.log(null ?? "no score");   // "no score" ← correct
console.log(undefined ?? "no score"); // "no score" ← correct
console.log(undefined ?? null ?? 10 ?? 15);  // 10


// there is also something called  nullish coalescing assignment ??= which is used to assign first non null and non undefined value
let username = null;
username ??= "Guest"; // assign "Guest" only if username is null or undefined
console.log(username); // "Guest"

let username2 = "Vaibhaw";
username2 ??= "Guest"; // won't assign because username2 is not null/undefined
console.log(username2); // "Vaibhaw"


// note that ?? is not same as ? which is ternary operator
// condtion ? true : false

const iceTeaprice = 100;
iceTeaprice <=80 ? console.log("price is less then 80"): console.log("price is more than 80");
// price is more than 80

const priceMessage = iceTeaprice <= 80 ? "price is less than 80" : "price is more than 80";
console.log(priceMessage); // "price is more than 80"


// optional chaining ?. — safely access nested properties without errors
const user = {
    username: "Vaibhaw",
    address: {
        city: "Delhi"
    }
}

console.log(user.address.city);      // "Delhi" ✓
console.log(user.address.pincode);   // undefined — no error
//console.log(user.phone.number);      // TypeError: Cannot read properties of undefined ✗

// optional chaining saves you:
console.log(user.phone?.number);     // undefined — no error ✓
console.log(user.address?.city);     // "Delhi" ✓

// combine with ?? for clean defaults:
console.log(user.phone?.number ?? "no phone"); // "no phone" ✓