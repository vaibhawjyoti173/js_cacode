// syntax to write the switch 
// switch(key){
//     case value:

//     break;

//     default:
//         break;
// }
// switch is a like a lock with different keys and whatever keys can open the lock is used

const month = 3;
switch(month){
    case 1: 
        console.log("January");
        break;
    case 2: 
        console.log("february");
        break;
    case 3: 
        console.log("march");
        break; // if break here is commented then output will be :   march
        //                                                           april
    case 4: 
        console.log("april");
        break;
    default:
        console.log("default case matched");
        break;
}// output : march and since there is break after the lock is opened therefore further keys wont be tested to open the lock 
// note that if break was not there after every key then once the locked is opened by any key then from there all the keys will be executed without testing 

const months = "apr";
switch(months){
    case "jan": 
        console.log("January");
        break;
    case "feb": 
        console.log("february");
        break;
    case "mar": 
        console.log("march");
        break; 
    case "apr": 
        console.log("april");
        break;
    default:
        console.log("default case matched");
        break;
}// output : april

// Intentional fall-through — when multiple cases share same output
const day = 3;
switch(day){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}
// Output: Weekday
// This is INTENTIONAL fall-through — cases 1-5 share same output
// no break between them means they all fall into "Weekday"

const val = "3";
switch(val){
    case 3:
        console.log("number 3"); // never executes
        break;
    case "3":
        console.log("string 3"); // executes ✓
        break;
}
// Output: string 3
// switch uses === so type matters — "3" !== 3
