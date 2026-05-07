// now that we have understood one way of creating objects in js which is by object literals i.e. by using curly braces {}
// and defining key-value pairs inside it, there is a traditional way of creating same object literal by using syntax new Object()
// which uses the built-in Object constructor in JavaScript.
// the new Object() syntax creates an empty object, and then we can add properties to it using dot notation or bracket notation.

// IMPORTANT — Three different concepts, don't confuse them:
// 1. {} and new Object()     → "one-off" objects — no reusable blueprint, new memory allocated every time
// 2. Constructor / Class     → "blueprint" objects — reusable template, creates multiple instances
// 3. Singleton Design Pattern → always returns the SAME memory reference no matter how many times called

//const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


const regularUser = {
    email: "john@example.com",
    fullname: {
        userFullName:{   
            firstName: "John",
            lastName: "Doe"
        }
    }
}
console.log(regularUser); // output: { email: 'john@example.com', fullname: { userFullName: { firstName: 'John', lastName: 'Doe' } } }
console.log(regularUser.fullname.userFullName.firstName); // output: John

// lets understand combining two objects like arrays
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3",
    key4: "value4"
}
const obj3 ={obj1,obj2};
console.log(obj3); //output: {obj1: { key1: 'value1', key2: 'value2' }, obj2: { key3: 'value3', key4: 'value4' }}
// which means that above method is not combining the two objects but rather creating a new object with two keys obj1 and obj2 which have values of original objects.

const obj4 = Object.assign(obj1, obj2);
const obj5 = Object.assign({}, obj1, obj2);
//console.log(obj4); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }
console.log(obj5); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

// obj4 and obj5 give same output BUT key difference:
// Object.assign(obj1, obj2)    → obj1 is TARGET, gets modified, obj2 is source and stays unchanged
// Object.assign({}, obj1, obj2)→ {} is TARGET (empty new object), obj1 and obj2 are sources and both remain unchanged
// always prefer obj5 pattern to avoid mutating original objects
// another notable thing is that for obj4, since obj1 is the target object, it gets modified and now contains all the key-value pairs from both obj1 and obj2. 
// and we then used obj1 and obj2 for obj5, so in obj5 two times obj2 is used though the output is same as obj4. 

console.log(obj1); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' } ← modified!
console.log(obj2); // { key3: 'value3', key4: 'value4' } ← unchanged
// to avoid all these chaos we should not use obj4 pattern and always prefer obj5 pattern or spread operator to avoid mutating original objects.

const obj6 = {...obj1, ...obj2};
console.log(obj6); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }
// spread operator is more concise and easier to read than Object.assign() method, and it also creates a new object without modifying the original objects.

// we data comes from database, we get array of objects and we want to combine them into one object, we can use reduce method to achieve that.

const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Doe"}
];

const combinedUsers = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});

console.log(combinedUsers); // { '1': 'John', '2': 'Jane', '3': 'Doe' } but users is still unchanged
console.log(users[1].id); // output :2

// we can fetch all the keys of an object using Object.keys() method which returns an array of keys in the object.
console.log(Object.keys(tinderUser)); // output: [ 'id', 'name', 'isLoggedIn' ] note that keys are in array and all keys are in string format
console.log(Object.values(tinderUser)); // output: [ '123abc', 'John Doe', false ] note that values are in array
console.log(Object.keys(regularUser)); // output: [ 'email', 'fullname' ] note that keys are in array
console.log(Object.values(regularUser)); // output: [ 'john@example.com', { userFullName: { firstName: 'John', lastName: 'Doe' } } ] note that values are in array

console.log(Object.entries(tinderUser)); // output: [ [ 'id', '123abc' ], [ 'name', 'John Doe' ], [ 'isLoggedIn', false ] ] note that entries are in array 
// and each entry is an array of key-value pair so it is an array of arrays.

// many times we need to check if a key exists in an object or not, we can use hasOwnProperty() method which returns true if the object has the specified key 
// as its own property, otherwise it returns false.
console.log(tinderUser.hasOwnProperty("name")); // output: true
console.log(tinderUser.hasOwnProperty("age")); // output: false 


// many times we need some specific key-value pair from an object, we can use destructuring to achieve that.
const {name, isLoggedIn} = tinderUser;
console.log(name); // output: John Doe
console.log(isLoggedIn); // output: false

// we can also rename the variables while destructuring
const {name: userName, isLoggedIn: userStatus} = tinderUser;
console.log(userName); // output: John Doe
console.log(userStatus); // output: false

// we can also provide default values while destructuring
const {age = 25} = tinderUser;
console.log(age); // output: 25 because age is not present in tinderUser object so it takes the default value but note that age is not added to tinderUser object,
//  it is just a variable with default value 25.

// we can also use rest operator while destructuring to get the remaining key-value pairs in an object.
const {id, ...rest} = tinderUser;
console.log(id); // output: 123abc
console.log(rest); // output: { name: 'John Doe', isLoggedIn: false } rest is an object which contains the remaining key-value pairs in tinderUser object.
console.log(tinderUser); // output: { id: '123abc', name: 'John Doe', isLoggedIn: false } 

// there is also array destructuring which is similar to object destructuring but it is used for arrays

// note that most of api are also in json format which is nothing but a string representation of an object, so we can use JSON.parse() method 
// to convert a json string to an object and JSON.stringify() method to convert an object to a json string. For example:
const jsonString = '{"id": "123abc", "name": "John Doe", "isLoggedIn": false}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
// sometimes we can get array of objects in api so we can use JSON.parse() method to convert the json string to an array of objects. For example:
const jsonArrayString = '[{"id": "123abc", "name": "John Doe", "isLoggedIn": false}, {"id": "456def", "name": "Jane Doe", "isLoggedIn": true}]';
const jsonArrayObject = JSON.parse(jsonArrayString);
console.log(jsonArrayObject); // output: [ { id: '123abc', name: 'John Doe', isLoggedIn: false }, { id: '456def', name: 'Jane Doe', isLoggedIn: true }]
