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
// 

