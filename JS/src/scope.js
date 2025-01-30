// Declare a global variable using var and log it.
var globalVar = 'I am a global variable';
console.log(globalVar);

// Inside a function, declare another var variable with the same name but different value and log it within the function.
function scope() {
    var globalVar = 'I am a local variable';
    console.log(globalVar); // I am a local variable
}
// Call your function. 
scope();

// Log your global variable. Did it change? No! This is function scope!
console.log(globalVar); // I am a global variable


// Inside a block (use an if statement with a condition of true), declare variables using let and const. Try redeclaring them within the same block to observe errors.
if (true) {
    let blockLet = 'I am a block scoped variable';
    const blockConst = 'I am a block scoped constant';
    console.log(blockLet); 
    console.log(blockConst); 
    // let blockLet = 'I am a redeclared block scoped variable'; // Error: Identifier 'blockLet' has already been declared
    //const blockConst = 'I am a redeclared block scoped constant'; // Error: Identifier 'blockConst' has already been declared
}
// console.log(blockLet); // Error: blockLet is not defined
// console.log(blockConst); // Error: blockConst is not defined    


// Try to redeclare your original global variable with var within the if block, log it in and outside the statement. What happens?
if (true) {
    var globalVar = 'I am a redeclared global variable';
    console.log(globalVar); // I am a redeclared global variable
}
console.log(globalVar); // I am a redeclared global variable


// Declare an array and an object using const. Modify the contents of both and log their values before and after the changes.
const array = [1, 2, 3, 4, 5];
const object = {
    name: 'John Doe',
    age: 25
};
console.log(array); // [1, 2, 3, 4, 5]
console.log(object); // { name: 'John Doe', age: 25 }

// const is suggested for arrays and objects declaration since it's only the contents that change but not the reference!
array.push(6);
object.age = 26;
console.log(array); // [1, 2, 3, 4, 5, 6]
console.log(object); // { name: 'John Doe', age: 26 }
