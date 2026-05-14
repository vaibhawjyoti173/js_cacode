// array loops
const arr = [1,2,4,5,6]
for(const num of arr){
    console.log(num);    
}
// output : 1 2 4 5 6 each printed on different lines

const greetings ="Hello world!";
for(const greet of greetings){
    console.log(`each char is ${greet}`);
}// prints all the char on different lines

// MAPS - it is an object in js to store key value pair and it stores unique keys, also it keeps the key value in the order they were entered
const mp =new Map();
mp.set("IN","India");
mp.set("USA","United States of America");
mp.set("Fr","France");
mp.set("IN","India");
console.log(mp);
/* 
output - Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/
// now how to iterate using for loops over any map
for (const key of mp) {
    console.log(key);
}
// output - it returns an array of key value pairs present inside
/*Map internally stores entries as:
[ [key1, value1], [key2, value2], [key3, value3] ]

for...of pulls one entry at a time:
iteration 1 → ['IN', 'India']        ← array
iteration 2 → ['USA', 'United...']   ← array
iteration 3 → ['Fr', 'France']       ← array
*/

//destructuring [ key, value ] unpacks each array into two variables 
for (const [key, value] of mp) {
    console.log(`key is ${key} and value is ${value}`);
}
// Output:
// key is IN and value is India
// key is USA and value is United States of America
// key is Fr and value is France

// if you want ONLY keys:
for (const [key] of mp) {
    console.log(key);
}
// Output: IN  USA  Fr

// if you want ONLY values:
for (const [,value] of mp) {
    console.log(value);
}
// Output: India  United States of America  France

// we can also use following built in methods for map
// iterate only keys
for (const key of mp.keys()) {
    console.log(key); // IN  USA  Fr
}

// iterate only values
for (const value of mp.values()) {
    console.log(value); // India  United States...  France
}

// iterate both — same as destructuring
for (const [key, value] of mp.entries()) {
    console.log(key, value);
}
