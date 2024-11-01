
// Global Scope
let user = "Harish";

/*
// Block Scope
{
    let firstName = "John";
    console.log(user, firstName);
}


// Function Scope
function sayHellow() {
    let lastName = "Snow";
    console.log(user, lastName);
}
sayHellow();

// console.log(user);
// console.log(firstName);
console.log(lastName);   // lastName is not define Becoz lastName is inside the BlockScope.

*/

function first() {
    let one = "Sam";
    console.log(one, user); // Can access all except two, three Becoz we can't go inside another Scope. 

    function Second() {
        let two = "Shiv";
        console.log(one, two, user); // Can access all except three Becoz we can't go inside another Scope. 

        function third() {
            let three = "Shakti";
            console.log(one, two, three, user); // Can access all the variable Becoz accessing from inside So they are bubble Out from current scope.
        }
        third();
    }
    Second();
}
first();

