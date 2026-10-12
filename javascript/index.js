console.log("Hello Javascript!");

// NOT part of javascript it is provided by browser API
setTimeout(()=>{
    console.log("Print after 2 s")
},[2000])

console.log("Second log");

document.getElementById('btn').addEventListener('click',()=>{
console.log("Print btn")
})

// Data types 

// Primitives
// Functon scoped
var a = 10; 

// Blocked scoped
let b = 20;
const c = 30;
console.log(this.a)

// DATA TYPE
let int = 123456
let int1 = null; //explicit declare null 
let int2; // undefine
let int3 = Infinity;

let str = 'string'
let str1 = "string"
let str2 = `string ${str1}`

console.log(str2)

console.log(Number.MAX_SAFE_INTEGER)

let bigInt = 9007199254740992n ;// Bigint

console.log(9007199254740992 === 9007199254740992n)

let sym1 = Symbol('id') // Elements are unique, we make this in React internally
let sym2 = Symbol('id') 

console.log(sym1 === sym2)
let bool1 = true

// Non Premitive
let obj ={
    a:10,
    b: "hello"
}

let arr = [1,2,"3",4];

function get (){ // Function consider as object data type internally
    console.log();
}

console.log(typeof 23)
console.log(typeof undefined)
console.log(typeof null)  //>> Object but it is an primitive type kept as it is due to reverse compatiblity

console.log(typeof "Hello")
console.log(typeof Symbol('ex'))
console.log(typeof true)

console.log(typeof obj)
console.log(typeof arr)
console.log(Array.isArray(arr))
console.log(Array.isArray(obj))

console.log(typeof get)


let x = 10;
let y = x;

y = 30;

console.log(x);


let objX = {
    x : 10
}

let objY = objX;

objX.x=30

console.log(objY)
