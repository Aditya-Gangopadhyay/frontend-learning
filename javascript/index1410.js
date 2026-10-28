// Type conversion
console.log(Number('13'))  // 13
console.log(typeof Number('13')) // Number

// Convert the string to number only when starting with number
console.log(parseInt('13djha')) // 13
console.log(parseInt('ada13')) // NaN


console.log(Number(null)) // --> 0


console.log(Number(undefined)) // --> NaN

// ONLY Hex number is considered as special case
console.log(parseInt('0x10')) // --> Hexa decimal (10) >> 1.16^1 + 0= 16



// String
console.log(String([1,2,3])) // 1,2,3
console.log(String(false)) // false

console.log(String(true))
console.log(String({})) // [object Object]
console.log(String({a: 1})) // [object Object]

console.log([1,2,3].join(':')) // 1:2:3

console.log('1,2,3'.split(',')) // ['1','2','3']


// Boolean

// Passing string to a boolean/empty array
console.log(Boolean([])) // True
console.log('false') // True
console.log('') // False


//  Type coerision

let a = []
let b = []
console.log(a === b); // non-premitive data stored by reference


// Operators
console.log("hello" + "sidillus") // Hello Sidillus

console.log(1 + '1'); // covert number to string 11 and concatinating Type coersion

console.log(1 + 1 + '1') // 21 --> 
console.log(1 + 1 + '1' + 1) // 211

console.log([1,2,3] + [1,2,3]) // 1,2,31,2,3

// - , * , / , % -- all member to be a number only
console.log("5"-1)
console.log("5"*2) // 10
console.log("5" / 2) // 2.5
console.log("5" % 2) // 1

console.log("5px" - 1) // NaN
console.log(parseInt("5px") - 1) // 5-1 = 4

console.log(1 == '1')// only value true
console.log(1=== '1') // value +data type false

// Logical OR || --> check true or false
// Logical And && --> It always checkes for null and undifiend


console.log(1>1) // false
console.log(1<=1) // true


// Bit wise 
// &, |, !, ~, <<, >>,

let d = 5;
let c = 2
console.log(d & c) //  1
// 5 - 0101  
// 3 - 0011
// ==========
//     0001

console.log(d | c) // 7
// 5 - 0101  
// 3 - 0011
// ==========
//     0111 == 0+4+2+1 = 7

console.log(!0) // true
// NOT
console.log(~5) // -6
// 5 - 0101  
// ==========
//     1010 ==> 9
// ~x = -(x+1)


console.log(5<<1) // 10
// 5 - 0101  
// 1010 ==> 10

console.log(5>>1) 

// 5 - 0101

// Loops

for (let i = 0; i<5 ; i++){
    console.log(i);
}

let arr = [1,2,3,4,5]

for(let i=0; i<arr.length; i++){
    console.log(a[i], i);
}

// return undefined
arr.forEach((i,index) =>{
console.log(i," Index  ",index );
});

// For of loop
for(let item of a){
    console.log(item)
}


const obj = {
    i:1, j:2, k:3, l:4, m:5
}

// For in loop used mainly for object iteration
for(let item in a){
console.log(item)
}

for(let item in obj){
    console.log(item) //  i j k l m 
}

console.log(Object.keys(obj[item])) // [i, j, k , l , m]


let i = 0;
while (i<5){
    console.log(i)
    i++;
}

// Always runs one time then checks the condition
let j = 0
do{
    console.log(j)
    j++
} while(j<5)


// Array    

const fruits = ["apple", "orange", "banana"]
console.log(fruits)
fruits.push("avacado") // Add and returns the number of elements 
console.log(fruits)
fruits.pop() // Remove and returns the removing element


fruits.shift() // Removes first element
console.log(fruits)// ["orange", "banana"]

fruits.unshift("grapes")  // Add to the first index ["grapes", "orange", "banana"]

const num = [1, 2, 3, 4, 5]

// include the start index and exculde the last index and return sub-element 
// Original array is not modified
const subNum = num.slice(1,2) 

const subNum2 = num.slice(1,3) // 1,2,3

console.log(subNum)
console.log(num)

// Remove elements
const targetArray = num.splice(1,3);
console.log(targetArray) // targetArray = [2, 3, 4], num = [1,5] 

// Add
const targetArray2 = num.splice(1,0,7) // at index 1 add 7 so, num = [1,7,5]

// replace 
// at index 1 replace 1 number and replace 4,  num = [1,4,5]
num.splice(1,1,4) 

console.log(num)


// Array MAP Returns a new list of items
// [1, 2, 3, 4, 5] => [ 1, 3, 5, 7, 9 ]
const newNum = num.map((item,index)=>{
      item + index   
})
console.log(newNum)

// Array filters
const evenNum = num.filter(item => item % 2 === 0) 
console.log(evenNum) // [2,4]

const sumOfAllNumber = num.reduce((acc,item)=> item + acc, 0) 
console.log(sum)




// Objects in JS

const person = {
    name:"Efgg", age: 34, city:"Bangalore"
}

console.log(person.name) // Dot notetion
console.log(person['name']) //Object Key 

delete person.name // Remove property of the object


// Conditional statements
let age = 18;

if(age>18){
    console.log("Eligiblity for voting")
}
else{
    console.log("Eligiblity for voting")
}

let role = "Admin"
switch(role){
    case "admin":  console.log("Admin");
     break;
    case "emp": console.log("employee")
     break;
    case "12": console.log("12 operation")
     break;
    default : console.log("defaut executed")
}
// false, 0, -0, On, null, NaN, undefined considered as false



// Bitwise operator

// . . . . 16 8 4 2 1
//            0 1 0 1 -- > 5
//            0 0 1 1  --> 3

// &          0 0 0 1-->  1 
// |          0 1 1 1-->  7
// ^          0 1 1 0-->  6
// ~ -(x+1) -> -6

// . . . . 16 8 4 2 1
//    0 0 0 0 0 1 0 1 -> 5
// << 0 0 0 0 1 0 1 0 -> 10

// 5 * 2 = 10; // 5<<1

// Shortcut 5 * 2 = 10 * 2 = 20 // 5<<2  


// . . . . 16 8 4 2 1
//    0 0 0 0 0 1 0 1 -> 5
// >> 0 0 0 0 0 0 1 0 -> 2

// Shortcut 5/2 = 2.5 ~ 2 
