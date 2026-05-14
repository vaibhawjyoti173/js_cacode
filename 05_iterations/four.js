//NOTE THAT OBJECT ARE NOT ITERATABLE USING FOR OF LOOP AND WE USE FOR IN LOOP TO ITERATE OVER OBJECT

const myobj ={
    in: "india",
    usa: "united states of america",
    fr: "france"
}
//for (const key of myobj) {
    //console.log(key);
//} 
// output : myobj is not iterable

//for([key,value] of myobj){
    //console.log(key);
//}  
//output- myobj is not iterable

for (const key in myobj) {
    console.log(key);
}// output: in usa fr

for (const key in myobj) {
    console.log(`${key} is shortcut for ${myobj[key]}`);
}
/* output: 
in is shortcut for india
usa is shortcut for united states of america
fr is shortcut for france 
*/

const programming =['js','rb','py','java','cpp']
for(const key in programming){
    console.log(`${key} ->${programming[key]}`);
} 
//output :- 0 ->js  1 ->rb  2 ->py  3 ->java  4 ->cpp

// for...of  → values  → arrays, strings, Maps, Sets
// for...in  → keys    → plain objects (also works on arrays but avoid)

const arr = ["a", "b", "c"];
for(const val of arr)  console.log(val);   // a  b  c  ← values
for(const key in arr)  console.log(key);   // 0  1  2  ← indices

const mp =new Map();
mp.set("IN","India");
mp.set("USA","United States of America");
mp.set("Fr","France");
mp.set("IN","India");
//console.log(mp);

for (const key in mp) {
    console.log(key);
}// no output

/*for...of   → values    → everything EXCEPT plain objects
for...in     → keys/indices      → plain objects only (avoid on others),like no output for maps
Map/Set      → always use .keys() .values() .entries() or for...of
Object       → always use Object.keys() Object.values() Object.entries()
*/

// for arrays there is inbuilt for each loop which generally used 
const coding =['js','cpp','ruby','python','java','javascript']
coding.forEach(function (item){
    console.log(item);
});
// output : js  cpp   ruby   python   java   javascript
// for .foreach method we take callback function as parameter which is just an unnamed function

// we can also use arrow function for callback 
coding.forEach((item)=>{
    console.log(item);
});// same output 

// we can even create a seperate function and then use them as parameter 
function printme(item){
    console.log(item);
}
coding.forEach(printme); // note that here we have to give reference of the function and not implement them like printme()
// same output

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
/* output--
js 0 [ 'js', 'cpp', 'ruby', 'python', 'java', 'javascript' ]
cpp 1 [ 'js', 'cpp', 'ruby', 'python', 'java', 'javascript' ]
ruby 2 [ 'js', 'cpp', 'ruby', 'python', 'java', 'javascript' ]
python 3 [ 'js', 'cpp', 'ruby', 'python', 'java', 'javascript' ]
java 4 [ 'js', 'cpp', 'ruby', 'python', 'java', 'javascript' ]
javascript 5 [ 'js', 'cpp', 'ruby', 'python', 'java', 'javascript' ]
*/

const myCoding =[
    {
        language:"javascript",
        languagename:'js'
    },
    {
        language:"java",
        languagename:'java'
    },
    {
        language:"python",
        languagename:'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.language);
});
// output -> javascript   java    python



// break and continue do NOT work inside forEach
coding.forEach((item) => {
    //if(item === 'ruby') break; // ← SyntaxError — cannot use break in forEach
});

// if you need to stop mid-loop — use regular for loop or for...of
for(const item of coding){
    if(item === 'ruby') break; // ✓ works perfectly
    console.log(item);
}
// Output: js  cpp