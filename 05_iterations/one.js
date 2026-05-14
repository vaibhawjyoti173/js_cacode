// in case of for loop first the variable is initialised and then the condition is checked on the initialised variable and 
// if condition is true then whatever is there in the block is executed and then value of variable is changed as instructed then 
// again the condition is checked and then again the code inside the block is executed with the updated value of the variable and 
// so on till the condition fails
for(let index=0; index<=10;index++){
    const element =index;
    console.log(element);
}
console.log( ); 
// output : 0 1 2 3 4 5 6 7 8 9 10 (printed on different lines) 
// console.log(element) // error as element is defined with const which is block scoped
// console.log(index)  // error as index is defined with let which is block scoped

for(let index=0; index<=10;index++){
    const element =index;
    if(index==5){
        console.log("5 is the best number");
        
    }
    console.log(element);
}
// output : 0 1 2 3 4 5 is the best number 5 6 7 8 9 10 (printed on different lines) 

for(let i=0; i<=2; i++){
    console.log(`value in outer loop ${i}`);
    for(let j=0;j<=3;j++){
        console.log(`value in inner loop ${j} and inner loop ${i}`);
    }
}

/* 
value in outer loop 0
value in inner loop 0 and inner loop 0
value in inner loop 1 and inner loop 0
value in inner loop 2 and inner loop 0
value in inner loop 3 and inner loop 0
value in outer loop 1
value in inner loop 0 and inner loop 1
value in inner loop 1 and inner loop 1
value in inner loop 2 and inner loop 1
value in inner loop 3 and inner loop 1
value in outer loop 2
value in inner loop 0 and inner loop 2
value in inner loop 1 and inner loop 2
value in inner loop 2 and inner loop 2
value in inner loop 3 and inner loop 2
*/


let myarray = ["one","two","three"];
for(let i=0;i<myarray.length;i++){ // note that ++ is very important here for i as if it is not there then loop will run infinitely at initialised value
    const element = myarray[i];
    console.log(element);
} // output : one  two  three  (printed on different lines)



 // or we can do the same for loop as below
for(const element of myarray){
    console.log(element); // directly gives value, no index needed
}
// Output: one two three

// many times we dont want the loop to run full and want to go out after certain condition in that case we use word break
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("detected 5");
        break; // ie as soon as 5 is detected loop is terminated 
    }
    console.log(`value of index is ${index}`);
}

for (let index = 1; index <=5; index++) {
    if(index==3){
        console.log("detected 3");
        continue; // ie as soon as 3 is detected further execution is avoided and loop runs from next assigned value of the variable 
        // so output is : value of index is 1 value of index is 2 detected 3 value of index is 4 value of index is 5 (all printed on different lines)
    }
    console.log(`value of index is ${index}`);
}

// problem — break inside inner loop only breaks inner loop, not outer
outer: for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        if(j===2){
            break outer; // breaks BOTH loops — label tells which loop to break
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output: i=1, j=1 — stops completely when j hits 2

// same with continue:
outer: for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        if(j===2){
            continue outer; // skips to next iteration of OUTER loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}
// Output: i=1 j=1 / i=2 j=1 / i=3 j=1    — j=2 and j=3 always skipped