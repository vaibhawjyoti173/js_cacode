let index =0;
while(index<=10){
    console.log(`value of index is ${index}`);
    index+=2;
}
// output : value of index is 0
            // value of index is 2
            // value of index is 4
            // value of index is 6
            // value of index is 8
            // value of index is 10
//  similar things can be done with arrays

let myarray = ["one","two","three"]
let arr = 0;
while(arr<myarray.length){
    console.log(`value is ${myarray[arr]}`);
    arr++;
}
// output: value is one  value is two  value is three

// there is also do- while loop which is first do something and then checks the condition

let score =100;
do {
console.log(`score is ${score}`);
score++;
}while(score<105) 
// output: score is 100 score is 101 score is 102 score is 103 score is 104

// however there is one issue that it executes first and then check the condition which might not be good in cases where while condition is never satisfied 
// and thus not used much
do {
console.log(`score is ${score}`);
score++;
}while(score<100)

// output: score is 105 
