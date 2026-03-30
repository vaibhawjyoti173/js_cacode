// now there are two ways to create strings in JavaScript: using single quotes or double quotes
let singleQuoteString = 'This is a string with single quotes';
let doubleQuoteString = "This is a string with double quotes";

// both of these strings are valid and can be used interchangeably
console.log(singleQuoteString); // Output: This is a string with single quotes
console.log(doubleQuoteString); // Output: This is a string with double quotes

// however, if you want to include a quote character within the string, you need to use the opposite type of quote to avoid syntax errors
let stringWithSingleQuote = "It's a nice day!"; // using double quotes to include a single quote
let stringWithDoubleQuote = 'She said, "Hello!"'; // using single quotes to include double quotes

console.log(stringWithSingleQuote); // Output: It's a nice day!
console.log(stringWithDoubleQuote); // Output: She said, "Hello!"

// if you want to include the same type of quote within the string, you can use the backslash (\) to escape the quote character
let escapedSingleQuoteString = 'It\'s a nice day!'; // escaping the single quote
let escapedDoubleQuoteString = "She said, \"Hello!\""; // escaping the double quotes

console.log(escapedSingleQuoteString); // Output: It's a nice day!
console.log(escapedDoubleQuoteString); // Output: She said, "Hello!"

// you can also use template literals (backticks) to create strings, which allow for easier inclusion of both single and double quotes without needing to escape them
let templateLiteralString = `It's a nice day! She said, "Hello!"`;
console.log(templateLiteralString); // Output: It's a nice day! She said, "Hello!" 

// backticks allow for multi line strings and string interpolation which is more modern way and often more convenient to work with strings in JavaScript
const name = "Alice";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting); // Output: Hello, Alice! Welcome to JavaScript.

// benefit of using template literals is that you can easily include variables and expressions without needing to concatenate strings with the + operator, making your code cleaner and more readable. example:
let nameone = "Bob";
let salaryone = 10000;
console.log(`The sum of ${nameone} and ${salaryone} is ${nameone + salaryone}.`); // Output: The sum of Bob and 10000 is Bob10000. 

// there is one more way to create strings in JavaScript, which is using the String constructor. However, this is less common and generally not recommended for creating string literals, as it can lead to unexpected behavior and is less efficient than using string literals directly.
let stringUsingConstructor = new String("This is a string created using the String constructor"); // or
let stringUsingConstructor2 = String("This is a string created using the String constructor");
console.log(stringUsingConstructor); // Output: [String: 'This is a string created using the String constructor']
console.log(typeof stringUsingConstructor); // Output: object
console.log(stringUsingConstructor2); // Output: This is a string created using the String constructor
console.log(typeof stringUsingConstructor2); // Output: string 
//the first example creates a String object, while the second example creates a primitive string. this can lead to confusion and unexpected behavior when comparing strings or using string methods, as the String object and primitive string are not the same type.

// as you can see, using the String constructor creates a String object rather than a primitive string, which can lead to issues when comparing strings or using string methods. it's generally best to stick with string literals (using single quotes, double quotes, or template literals) for most use cases in JavaScript.

// now there are many string methods available in JavaScript that allow you to manipulate and work with strings in various ways. some common string methods include:
let str = "Hello, World!";

// length property to get the length of the string
console.log(str.length); // Output: 13

// toUpperCase() method to convert the string to uppercase
console.log(str.toUpperCase()); // Output: HELLO, WORLD!, does it convert the original string? let's check
console.log(str); // Output: Hello, World! - no, it does not change the original string, it returns a new string with the changes applied

// toLowerCase() method to convert the string to lowercase
console.log(str.toLowerCase()); // Output: hello, world!

console.log(str.__proto__); // Output: {} String.prototype, this is the prototype of the string object, which contains all the methods and properties that are available to string instances

console.log(str.__proto__.toUpperCase); // Output: [Function: toUpperCase], this is the toUpperCase method that is available on string instances, which we used earlier to convert the string to uppercase.

// there are many other string methods available, such as indexOf(substring or character), charAt(index), substring(), replace(), split(), slice() and more, which allow you to perform various operations on strings. you can explore the documentation for String.prototype to see all the available methods and their usage.

console.log(str.substring(0, 5)); // Output: Hello, this method returns a portion of the string starting from the specified index (0 in this case) and ending at the specified index (5 in this case), but not including the character at the end index. so it returns "Hello" which is the substring from index 0 to index 4.

console.log(str.indexOf("World")); // Output: 7, this method returns the index of the first occurrence of the specified substring ("World" in this case) within the string. if the substring is not found, it returns -1.

console.log(str.charAt(0)); // Output: H, this method returns the character at the specified index (0 in this case) in the string. so it returns "H" which is the first character of the string.

console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!, this method replaces the first occurrence of the specified substring ("World" in this case) with the new substring ("JavaScript" in this case) and returns a new string with the changes applied. it does not modify the original string.

console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ], this method splits the string into an array of substrings based on the specified separator (", " in this case) and returns the array. in this example, it splits the string into two parts: "Hello" and "World!".

console.log(str.slice(0, 5)); // Output: Hello, this method is similar to substring() but it can also accept negative indices. it returns a portion of the string starting from the specified index (0 in this case) and ending at the specified index (5 in this case), but not including the character at the end index. so it returns "Hello" which is the substring from index 0 to index 4.

console.log(str.slice(-5)); // Output: orld!, this method can also accept negative indices, which count from the end of the string. in this case, it returns the last 5 characters of the string, which is "orld!".

console.log(str.slice(-12, 3)); // Output: or, this method can also accept negative indices, which count from the end of the string. in this case, it returns the characters from index -12 to index 3, which is "el".


// another important thing in string is trim() method, which removes whitespace from both ends of a string and returns a new string without modifying the original string.
let stringWithWhitespace = "   Hello, World!   ";
console.log(stringWithWhitespace.trim()); // Output: "Hello, World!", this method removes the leading and trailing whitespace from the string and returns a new string with the changes applied. it does not modify the original string.

// we have also trimStart() and trimEnd() methods, which remove whitespace from the start and end of the string respectively.
// and we have include() method, which checks if a string contains a specified substring and returns true or false accordingly.
console.log(str.includes("World")); // Output: true, this method checks if the string contains the specified substring ("World" in this case) and returns true if it does, or false if it does not.

console.log(str.includes("JavaScript")); // Output: false, this method checks if the string contains the specified substring ("JavaScript" in this case) and returns true if it does, or false if it does not.
