let obj = {name: 'A', age:56, address:{city:'Abc'}}

//... spread operator >>> Shallow copy new reference for
// outer objext but inner object is referencing the same

let copyObj = {...obj}
copyObj.address.city = 'Efg'



let target = {a:'y'}


// Shallow copy
Object.assign(target,obj) // Modify object 
console.log(target)

Object.assign(target, obj, copyObj) // Two sources one target



// DEEP COPY

let objDeepSource = {name:'Av', age:'34', address:{city:'Bangalore'}}

let copyDeepObj = structuredClone(objDeepSource)

copyObj.address.city = 'Kerala'
console.log(objDeepSource)


let orgObj = {
    num:[1,2],
    details: {
        active:true
    }
}

const copyOriginal = structuredClone(orgObj)

copyOriginal.num.push(3);
copyOriginal.details.active = false;

console.log(original)
console.log(copyOriginal)


// OBJECT Utility Method
let user = {
    name: 'jhon',
    age: 24
}

Object.keys(user) // ['name','age']
Object.values(user) // ['jhon', 24]
const entry = Object.entries(user) // [['name','jhon'],['age',24]]
Object.fromEntries(entry) // {name: 'jhon', age: 24 }

console.log(Object.hasOwn(user,"name"))


// Usig this stored property will stored under 
// Object prototype
let user1 = Objext.create({role:'admin'})
console.log(user1.role)


// Freez object

let object = {a:1}

Object.freeze(object) // Can't do any operation after it

object.b = 4 // Prohabited 
object.a = 4 // Prohabited

console.log(object)


Object.seal(object)
object.a = 2 // Allowed 


console.log(0 === -0) // true 
Object.is(0,-0) // false strict comparision

console.log(NaN===NaN) // False
Object.is(NaN, NaN) // True

