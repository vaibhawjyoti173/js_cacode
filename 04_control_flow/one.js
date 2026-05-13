// if statement
if(true) {
  // always exectued
}
if(false){
    // never executed
}

// if conditon is generally checked with comparison operator like ==, ===, >, <, >=, <=, !=, !== where == only checks for value but === also checks for the type along with values
if(2!=='2'){
  console.log("executed");
}
// output: executed

const temp=40;
if(temp>40){
  console.log("temp is greater than 40");
}
else{
  console.log("temp is lesser than or equal to 40");
}
console.log("executed");

// const score =200;
// if(score){
//     let power ="fly"; // if we use var here then line 29 wont give error but with let or const it will give error as power is not defined.
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

const balance =1000;
//if(balance>500) console.log("test") // this is called implicit scope where we dont need to use {} for scope of if, however this is only applicable for same line as if condtion.
// we can use different also without {} by using , but it is unhygenic way of code writing hence avoided

if(balance < 500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}// output : less than 1200 because all the conditions before else didnot satisfy 

const userloggedin =true
const debitcard =true
const loggedinfromGoogle = false
const loggedinfromEmail = true
const guestUser =false;

if(userloggedin && debitcard && 2==='2'){
    console.log("Allow to buy course");
}// condition is false if any of the three condition is false

if(loggedinfromEmail || loggedinfromGoogle || guestUser){
    console.log("User logged in");
}// condition is true if any of the three condition is true

// Short circuit evaluation — useful with if conditions
const username = null;
const displayName = username || "Guest"; // if username is falsy, use "Guest"
console.log(displayName); // "Guest"

// Nullish coalescing — only falls back for null/undefined (not 0 or "")
const score = 0;
console.log(score || "no score");  // "no score" ← wrong, 0 is falsy
console.log(score ?? "no score");  // 0 ← correct, ?? only checks null/undefined







