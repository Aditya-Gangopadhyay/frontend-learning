// // Functions, Callback, Higher Order Functions, Default Parameters, Destructing

getName('Ajay');

// function declaration , function statement
function getName(name) {
  console.log(`Hi ${name}`);
}

// function expression


let getSecondName = function (name) {
  console.log(`Hi ${name}`);
}

getSecondName('Ajay');


//  Temproral Dead Zone
const getRole = (role) => {
  console.log(`Role is ${role}`);
}

getRole('Admin');


function greet(name, callGreet) {
  console.log("Hello " + name);
  callGreet();
  console.log('Callback finished');
}

async function welcome() {
  console.log('Welcome !!!');
}
greet('Ajay', welcome);

setTimeout(function() {
  console.log("Write Logic in this callback to be executed");
},1000)


function calculate(a,b,callback) {
  const res = callback(a,b);
  console.log(res);
}


calculate(2,3, (x,y) => x + y);
calculate(3,2, (x,y) => x - y);
calculate(3,2, (x,y) => x * y);

[1,2,3].forEach((item)=> {
  console.log(item);
});

//A callback is a function-passing technique. it can be synchronous or asynchronous




//Higher Order Functions 

//any function that takes input as function or returns a function is Higher Order Function 

function calculate(a,b,callback) {
  return callback(a,b);
}

const res = calculate(2,3, (x,y) => x + y);
console.log(res);

function calculate(a,b) {
  return function() {
    return a + b;
  }
}

const add = calculate(2,3);
const res1 = add();
console.log(res1);

const a = [1,2,3];

const res2 = a.map((item)=> item * 2)
const res3 = a.filter((item) => item % 2 === 0);
const res4 = a.reduce((acc,item) => item + acc, 0);
console.log(res2);
console.log(res3);
console.log(res4);



function greet(name = 'Guest') {
  console.log(`Hi ${name}`);
}


// undefined - absence of an value
// null - intentional empty 
var per = null;
greet();


function add(a = 2,b = a * 2) {
  console.log(a + b);
}
add();
add(3,undefined);

const arr = [1,2];
const [a,b,c,d] = arr;

console.log(a,b,c,d);



let a = 10;
let b = 20;

[b,a] = [a,b];
console.log(a,b);



const obj = {name: 'Ajay'};

const {name: userName = 'Guest'} = obj;
const {name = 'Guest'} = obj;

console.log(name);

const user = {
  name: 'Avinash',
  address: {
    city: 'Banglore',
    phone: '70190383767'
  }
}

const {address: {phone}} = user;
console.log(phone);