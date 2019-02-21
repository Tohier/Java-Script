// * ==== Functions =====*/

// A function is a group of intructions that performs a particular task.

// function sayHello() {
//     console.log("Hello");
// }

// console.log("Start of program");
// sayHello();                         
// console.log("End of program");

// Declaring a function

// Creating a function is called declaration:

// * ===

// Declaring a function called myFunction
// function myFunction() {
    // function action
// }

// The keyword return indicates that a return value will be given, which is specified immediately after the word.

// function sayHello() {
//     return "Hello";
// }

// let result = sayHello();
// console.log(result);

// * ===
// Declare myFunction
// function myFunction() {
    //  Calculate return value
    // ...
    // return returnValue;
// }

// Get return value from myFunction
// var value = myFunction();
// ...

// function message () {
//     return "Good Morning";    
// }

// let result = message();
// console.log(result);

// function sayHello(name) {
//     var message = "Hello," + name + "!";
//     return message;
// }

// console.log(sayHello("Toyer"));

function sayHello(firstName,secondName) {
    var message = "Hello," + firstName + secondName + "!";
    return message;
}

console.log(sayHello("Tohier"," Dreyer"))

// -----------------------------------------------------------------------------------------------------------------

console.log("Hello there \njavascript is not java.".length)

// -----------------------------------------------------------------------------------------------------------------------------

console.log( animal === "aardvark");

var animal = "aardvark";
let caps = animal.toUpperCase();
console.log(caps);

console.log(caps[2]);