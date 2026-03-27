// console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=2); // true
// console.log(2<=2); // true
// console.log(2==2); // true
// console.log(2=="2"); // true (loose equality, type coercion happens)
// console.log(2===2); // true (strict equality, no type coercion)
// console.log(2==="2"); // false (in case of triple equals, it checks for both value and datatype, so it returns false because one is a number and the other is a string)

// In JavaScript, the comparison operators (>, <, >=, <=) compare values based on their numeric value. When you compare a number with a string, JavaScript will attempt to convert the string to a number before making the comparison. If the string cannot be converted to a valid number, it will be treated as NaN (Not-a-Number), and any comparison with NaN will return false.

// For example:
// console.log(2 > "1"); // true (string "1" is converted to number 1)
// console.log(2 < "03"); // true (string "03" is converted to number 3)
// console.log(2 > "abc"); // false (string "abc" cannot be converted to a valid number, treated as NaN)
// so typescript you are not allowed to compare different types but in javascript you can compare different types and it will try to convert them to a common type before making the comparison.

// console.log(null > 0); // false (null is converted to 0 as here null is treated as 0 in comparisons)
// console.log(null < 0); // false (null is converted to 0 as here null is treated as 0 in comparisons)
// console.log(null == 0); // false (here null is not converted to 0 as here null is treated as null in equality checks)
// console.log(null === 0); // false (here null is not converted to 0 as here null is treated as null in equality checks)
console.log(null >= 0); // true (null is converted to 0 and 0 >= 0 is true)
console.log(null <= 0); // true (null is converted to 0 and 0 <= 0 is true)

// comparisons convert null to 0, but equality checks do not convert null to 0. This is a quirk of JavaScript's type coercion rules. When using comparison operators, null is treated as 0, but when using equality operators, null is only equal to undefined and not equal to any other value, including 0.

console.log(undefined > 0); // false (undefined is treated as NaN in comparisons)
console.log(undefined < 0); // false (undefined is treated as NaN in comparisons)
console.log(undefined == 0); // false (undefined is only equal to null and not equal to any other value, including 0)
console.log(undefined === 0); // false (undefined is only equal to null and not equal to any other value, including 0)
console.log(undefined >= 0); // false (undefined is treated as NaN in comparisons)
console.log(undefined <= 0); // false (undefined is treated as NaN in comparisons)

// In JavaScript, undefined is treated as NaN (Not-a-Number) when used in comparison operations. Any comparison involving NaN will return false, which is why all the comparisons with undefined return false. Additionally, undefined is only equal to null and not equal to any other value, including 0.     

