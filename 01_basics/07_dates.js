let myDate = new Date(); // creates a new Date object with the current date and time
console.log(myDate); // Output: current date and time in ISO format (e.g., 2024-06-01T12:34:56.789Z)

console.log(myDate.toString()); // Output: current date and time in a more human-readable format 
// (e.g., Sat Jun 01 2024 12:34:56 GMT+0000 (Coordinated Universal Time))

// now if you want to create a date object for a specific date, you can pass the date string as an argument to the Date constructor. For example:

let specificDate = new Date(2023, 5, 15); // creates a new Date object for June 15, 2023 (months are zero-indexed)  
console.log(specificDate); // Output: Thu Jun 15 2023 00:00:00 GMT+0000 (Coordinated Universal Time)    

let mynewdate = new Date(2023, 5, 1, 12, 30, 0); // creates a new Date object for June 1, 2023 at 12:30:00
console.log(mynewdate); // Output: Sat Jun 01 2023 12:30:00 GMT+0000 (Coordinated Universal Time)
console.log(mynewdate.toLocaleString()); // Output: 6/1/2023, 12:30:00 PM

let mynewdate1= new Date("2023-06-01T12:30:00"); // creates a new Date object for June 1, 2023 at 12:30:00 using ISO format
console.log(mynewdate1); // Output: Sat Jun 01 2023 12:30:00 GMT+0000 (Coordinated Universal Time)

let my_date = new Date(1,5,2022); // by default format is yr,month,day,hours,minutes,seconds,milliseconds
// here we have given 1 as year, 5 as month (zero-indexed so 5 represents June), and 2022 as day so output is
// // Thu Dec 13 1906 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(my_date);

let my_date1= new Date(2022,5,-1); 
console.log(my_date1); // Mon May 30 2022 00:00:00 GMT+0000 (Coordinated Universal Time)

// also note that typeof date object is 'object'
console.log(typeof myDate); // Output: 'object' 

let mytimeStamp = Date.now(); // returns the number of milliseconds since January 1, 1970   
console.log(mytimeStamp);

// now if you want to convert a date object to a timestamp, you can use the getTime() method. For example:
console.log(my_date1.getTime()); // Output: 1653868800000 (number of milliseconds since January 1, 1970 for May 30, 2022)

// if you want to convert number of milliseconds to number of seconds, you can divide the timestamp by 1000. For example:
console.log(Date.now() / 1000); 
//1777994362.776but this might give you a decimal value, so you can use Math.floor() to round it down to the nearest whole number. For example:  
console.log(Math.floor(Date.now()/1000));    // Output: 1777994362

let newDate = new Date(); 
console.log(newDate.getFullYear()); // Output: current year i.e. 2026
console.log(newDate.getMonth());  // Output: current month which is may so 4 (zero-indexed, so January is 0 and December is 11)   
console.log(newDate.getDate()); // Output: current day of the month which is 5 (1-31)
      
// we can make use of these methods as below using backtick for strings interpolation
console.log(`Today's date is ${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`); 
// Output: Today's date is 5-5-2026 (note that we add 1 to the month because it is zero-indexed)    

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"  // or "UTC", "America/New_York" etc.
}));
// Output: Tuesday (the day of the week for the current date in the specified time zone)
