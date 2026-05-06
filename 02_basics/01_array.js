let myArr = [1, 2, 3, 4, 5]; 
console.log(myArr); // Output: [1, 2, 3, 4, 5]
console.log(typeof myArr); // Output: 'object' (arrays are a type of object in JavaScript)

// note that it is not important that all elements in an array are of the same type. 
// For example, you can have an array that contains both numbers and strings:
let myArrWithMixedTypes = [1, "hello", true, null];
console.log(myArrWithMixedTypes); // Output: [1, "hello", true, null]
console.log(myArrWithMixedTypes[1]); // Output: "hello" (accessing the second element of the array)

// you can also create an array using the Array constructor. For example:
let myArr1 = new Array(1, 2, 3, 4, 5); 
console.log(myArr1); // Output: [1, 2, 3, 4, 5]
console.log(typeof myArr1); // Output: 'object' (arrays created with the Array constructor are also of type 'object')

// you can also create an array with a specific length using the Array constructor. For example:
let myArr2 = new Array(5); 
console.log(myArr2); // Output: [ <5 empty items> ] (an array of length 5 with empty items)

// you can also create an array with a specific length and fill it with a specific value using the fill() method. For example:
let myArr3 = new Array(5).fill(0); 
console.log(myArr3); // Output: [0, 0, 0, 0, 0] (an array of length 5 filled with the value 0)  


// you can also create an array with a specific length and fill it with a specific value using the Array.from() method. For eg::
let myArr4 = Array.from({ length: 5 }, () => 0); 
console.log(myArr4); // Output: [0, 0, 0, 0, 0] (an array of length 5 filled with the value 0)

// you can also create an array with a specific length and fill it with a specific value using the Array.of() method. For eg:
let myArr5 = Array.of(0, 0, 0, 0, 0); 
console.log(myArr5); // Output: [0, 0, 0, 0, 0] (an array of length 5 filled with the value 0)

// arrays in js follow shallow copy semantics, which means that when you assign an array to a new variable, 
// you are actually creating a reference to the same array in memory.
// there are many methods available for arrays in JavaScript, such as push(), pop(), shift(), unshift(), slice(), splice(), etc. 
// You can use these methods to manipulate the array as needed. For example:
myArr.push(6);
console.log(myArr); // Output: [1, 2, 3, 4, 5, 6]

myArr.pop();
console.log(myArr); // Output: [1, 2, 3, 4, 5]

myArr.shift(); // removes the first element of the array and returns it
console.log(myArr); // Output: [2, 3, 4, 5]

myArr.unshift(1); // adds a new element to the beginning of the array and returns the new length of the array
console.log(myArr); // Output: [1, 2, 3, 4, 5]

let slicedArr = myArr.slice(1, 4);
console.log(slicedArr); // Output: [2, 3, 4] (a new array containing elements from index 1 to index 3)
console.log(myArr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

let newsplicedArr = myArr.splice(2, 1);
console.log(newsplicedArr); // Output: [3] (returns the removed elements)
console.log(myArr); // Output: [1, 2, 4, 5] (removes the element at index 2)

myArr.splice(2, 0, 3);
console.log(myArr); // Output: [1, 2, 3, 4, 5] (inserts the value 3 at index 2 without removing any elements)  
// NOTE THAT slice  — non-destructive, returns new array, original unchanged
// splice — destructive, mutates original array in place 
// splice(where, howManyToRemove, ...whatToAdd)
//         ↑           ↑                ↑
//      position    0 = just add     optional
//                  1+ = remove

console.log(typeof myArr.includes(8)); // Output: 'boolean' 
console.log(myArr.indexOf(3)); // Output: 2 (returns the index of the first occurrence of the value 3 in the array)
console.log(myArr.indexOf(0)); // Output: -1 (returns -1 as value 0 is not found in the array)


const newArr= myArr.join(); //creates and returns a new string by concatenating all the elements in an array, separated by commas 
// (or a specified separator string).
console.log(newArr,typeof newArr); // Output: "1,2,3,4,5" 'string' (joins all elements of the array into a string, 
// separated by commas by default)

// now to add two arrays together, if we use push() method, it will add the second array as a single element to the first array. For example:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// arr1.push(arr2);
// console.log(arr1); // Output: [1, 2, 3, [4, 5, 6]] (the second array is added as a single element to the first array)
// it is problematic as if you want to access 4 from the first array, you will have to access it as arr1[3][0] instead of arr1[3] which is not ideal.

// to add two arrays together and create a new array that contains all the elements from both arrays, you can use the concat() method. For example:
let arr3 = arr1.concat(arr2);
console.log(arr1); // Output: [1, 2, 3] (original array remains unchanged)

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6] (the concat() method creates a new array that contains all the elements from both arrays)

// you can also use the spread operator (...) to add two arrays together. For example:
let arr4 = [...arr1, ...arr2];
console.log(arr4); // Output: [1, 2, 3, 4, 5, 6] (the spread operator creates a new array that contains all the elements from both arrays)

let another_arr = [1,2,3,[4,5,6,[7,8,[9,10]]]];
const flatened_arr = another_arr.flat(Infinity); // the flat() method creates a new array with all sub-array elements concatenated into it 
// recursively up to the specified depth.
console.log(flatened_arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (the flat() method flattens the nested array into a single-level array)

console.log(Array.isArray(arr1)); // Output: true (isArray is a method of the Array object, not a property of the array instance)
console.log(Array.isArray("hi")); // Output: false (a string is not an array)
console.log(Array.from("vaibhaw")); // Output: ['v', 'a', 'i', 'b', 'h', 'a', 'w'] (the from() method creates an array from an iterable object)
console.log(Array.from({ length: 5 }, (_, index) => index + 1)); // Output: [1, 2, 3, 4, 5] (creates an array of length 5 filled with the values from 1 to 5 
// using the from() method with a mapping function)
console.log(Array.from({name:"vaibhaw"})); // Output: [] (the from() method creates an array from an iterable object,
//  but an object with a name property is not iterable, so it returns an empty array)

// we can also make array of already existing various data using of() method. For example:
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3] (the of() method creates a new array with the specified elements)
console.log(Array.of("hi", "hello")); // Output: ["hi", "hello"] (the of() method creates a new array with the specified elements)
console.log(Array.of({ name: "vaibhaw" })); // Output: [{ name: "vaibhaw" }] (the of() method creates a new array with the specified elements) 

let scr1= 200;
let scr2= 300;
let scr3= 400;
let scr4= 500;
console.log(Array.of(scr1, scr2, scr3, scr4)); // Output: [200, 300, 400, 500] (the of() method creates a new array with the specified elements)
