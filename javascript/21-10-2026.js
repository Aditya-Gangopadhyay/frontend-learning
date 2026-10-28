var a = 7; // function 
let b = 8; // Blocked scoped


if(true){
let r = 10;
var y = 44;

console.log(r)
}


function x(){
    console.log("Normal Function")
    console.log(a);

function y(){
// Lexical scope link Parent to child 
    console.log(a)
}
y();

}



console.log(y)

x();


var arrow = () =>{
    console.log("hello from arrow")
}
arrow()