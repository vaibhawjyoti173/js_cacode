const coding =['js','cpp','ruby','python','java','javascript'];
const values = coding.forEach((val)=>{
    return val;
});
console.log(values);
// undefined as foreach doesnot return anything 
// in such cases we use filter method of arrays as filter always return something
const mynums =[1,2,3,4,5,6,7,8,9]
const get_nums = mynums.filter((item)=>{return item>4}) // or (item)=>(item>4) we dont have to write return keyword if we use () or no bracket
console.log(get_nums); // output : 5 6 7 8 9

// however if we want to use foreach only then we can do like below
const newarr =[];
mynums.forEach((num)=>{
    if(num>4)
        newarr.push(num);
})

console.log(newarr);
// output : 5 6 7 8 9

const books = [
    {
        title: "The Pragmatic Programmer",
        genre: "Technology",
        publish: 1999,
        currentEdition: 2
    },
    {
        title: "Clean Code",
        genre: "Technology",
        publish: 2008,
        currentEdition: 1
    },
    {
        title: "Atomic Habits",
        genre: "Self Help",
        publish: 2018,
        currentEdition: 3
    },
    {
        title: "The Alchemist",
        genre: "Fiction",
        publish: 1988,
        currentEdition: 5
    },
    {
        title: "Sapiens",
        genre: "History",
        publish: 2011,
        currentEdition: 4
    },
    {
        title: "Deep Work",
        genre: "Self Help",
        publish: 2016,
        currentEdition: 2
    },
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publish: 1925,
        currentEdition: 6
    },
    {
        title: "Introduction to Algorithms",
        genre: "Technology",
        publish: 1990,
        currentEdition: 4
    }
]

// say we want to get all books whose genre is history
const tech_books =books.filter((bk)=>(bk.genre ==='Technology'));
console.log(tech_books);

// say we want all those books published after 2000
const new_books = books.filter((bk)=>{return bk.publish>2000});
console.log(new_books);

// say we want all those books published after 2000 and currentedition>=3
console.log(books.filter((bk)=>{return bk.publish>2000 && bk.currentEdition>=3}));
// only thing to remember is that whenever you open scope with{} then you have to use return keyword otherwise output will be undefined

// WE ALSO HAVE MAP AS A METHOD FOR ARRAYS WHICH UNLIKE FOR_EACH RETURN VALUES
const my_nums = [1,2,3,4,5];
const get_num = my_nums.map((num)=>(num+10));
console.log(get_num);
// output - [ 11, 12, 13, 14, 15 ]


// there is also provision of chaining ie we can use map after map or map after filter or filter after map etc and go on as many chains as we want
// important to note that values gets updated before going to the next chain
const chained_num = my_nums
                    .map((num)=>num*10)
                    .map((num=>num+1))
                    .filter((num)=>num%3)
console.log(chained_num);
// output - [ 11, 31, 41]


// REDUCE METHOD IS USED TO FIND THE SUM OF ALL ELEMENTS OF ANY ARRAY AS BELOW 
const arr_num = [1,2,3,4];
const initialval=0;
const tot = arr_num.reduce(function (accumulator,arr_val)
{return accumulator+arr_val},initialval);
console.log(tot); // output is 10 but if initialval is 5 then total will be 15
// also note that intially accumulator value is equal to initialval but after each iteration accumulator gets updated by accumulator+arr_val

// we can also use arrow function for the same 
console.log(arr_num.reduce((acc,arr_val)=>
(acc+arr_val),-3));
// output =7 as initialval=-3


const shoppingCart = [
    {
        itemname : "js course",
        price: 2999
    },
    {
        itemname : "python course",
        price: 999
    },
    {
        itemname : "mob dev course",
        price: 9999
    },
    {
        itemname : "dsai course",
        price: 12999
    }
]
console.log(shoppingCart.reduce((tot,course_val)=>(tot+course_val.price),0));
// output - 26996