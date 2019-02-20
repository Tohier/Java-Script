// console.log("start program");
// console.log(1,2,3,4,5,6,7,8,9,10);

// a while loop loops through a block of code while a specified condition is trueloops through a block of code while a specified condition is true
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

let number = 1;
while (number <= 10) {
    console.log (number);
    number ++;
}

// basic syntax

// *===
// while (condition) {
    // code to run while the condition is true
// }

// before each loop iteration, the condition in the parenthisis is evaluated to determine whether its true or not. The code associated with a loop is called the body

// if the condition is true, the code in the while loops body runs. Afterward, the condition is re-evealuated to see if its still true or not. The cycle continues!

// If the conditions is false, the code in the loop stops running or doesn't run.

// For Loop

// You'll often need to write loops with conditions that are based on what happens in the loop body, like in our example. JavaScriopt offers another loop type to account for this: the for loop.

// // * ===
// // for (initialization; condition; final-expression) {
//     // code to run when condition is true
// }


// ===== */
// This is a little more complicated than a while loop syntax:

// Initialization only happens once, when the code first kicks off

// the condition is evaluated once before the loop runs each time. If its true, the code runs. If not, the code doesnt run.

// the final expression is evaluated after the loop runs each time. Its often used to update a counter variable, as we saw in the while loop example.


for (var counter = 1; counter <= 5; counter++) {
    console.log(counter);
}


// * ====== Which loop should I use? ===== */

let letter = "";
while (letter !== "X") {
    letter = prompt("Type any letter or X to exit");
    console.log(letter);
}