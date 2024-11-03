// Difference B/W var, let and const.

// let - we can Re-assign a value after declaration.
// const- we can not assign/Re-assign value after declaration, It through an Error.

/*

let user = "John";
user = "Akash";
console.log(user); // Akash

const name = "John";
name = "Akash";
console.log(name); // Error: Assign to constant variable.


Scope:
// let & const: (Block and Function Scoped) -It creats a Scope when variable is inside a block/Function scope So we can not go inside that scope to access.

// Var: (Function Scoped)- It creats scope only when var. is inside function, Otherwise it can not create Scope.

*/
let fname = "Arya";
 
{
    let lname = "Stark"; 
}
// console.log(fname); // Arya
// console.log(lname); // lname is not defined, Becoz it is a block scoped.

// Function Scoped:
function sayHello() {
    let userName = "Kohli";
    var user = "Virat";
}
sayHello();
//  let & var both are the function Scoped.
// console.log(userName); // userName not defined.
// console.log(user); // user not defined.

// for(let i = 0; i < 5; i++) {
for(var i = 0; i < 5; i++) {
    console.log(i);
}
// console.log(i, "Outside_let"); // i not defined, Becoz let is block/function scoped.
console.log(i, "Outside_Var"); // 5 Outside_Var, Becoz var is function scoped only not block scoped.

// Using var: we can create same variable again in same block.
var movie = "Tufan";
var movie = "Kalki";
console.log(movie); // Kalki