// conditions
// basic syntax 
// if (condition){  
//      statement executing the condition when true
// }
//Operators 
// <   - less than
// >   - more than
// =<  - less than or equal to
// =>  - more than or equal to 
// !== - not equal value or not equal type 
// ||  - or

// ******************************************************************************************************************8

// let number = prompt("Enter a number");
    

// if (number > 0) {
//     console.log(number + " is positive")
// }

// else {
//     console.log(number + " is negative")
// }


// NESTING CONDITIONS
// You can go next - level and display a specific message if the entered number is zero.Use else if for a second conditional.See this example, which has a positive test case, negative test case, and a last resort of the number being zero

// let number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(number + " is positive");
// } else if (number < 0) {0
//     console.log(number + " is negative");
// } else {
//     console.log(number + " is zero");
// }

// let number = Number(prompt("Enter a number"));
// if (number >= 0 && number <= 100) {
//     console.log(number + " is between 0 and 100, both included");
// }


// let weather = prompt("What is the weather like for today? For example rainy,sunny,windy");
    
//     sunny=("sunny");
//     windy=("windy");
//     rainy=("rainy");

// if (weather === sunny) {
//     console.log("Today is " + sunny + ", it's a good day for flip flops,shorts and a vest/tanktop.");
// } else if (weather === windy) {
//     console.log("Wow it's so " + windy + " please dress accordingly. I recommend wearing a beanie, jacket and a pair of long pants.");
// } else if (weather === rainy) {
//     console.log("Atleast it's not water restrictions, bring an umbralla.");
// } else {
//     console.log("KILL YOURSELF");
// }

// use a switch and a break statement to create the same program.

let weather = prompt("What is the weather like for today? For example rainy,sunny,windy")
switch (weather) {

    case "sunny":
         console.log("Today is " + sunny + ", it's a good day for flip flops,shorts and a vest/tanktop.");
    break;

    case "windy":
        console.log("Wow it's so " + windy + " please dress accordingly. I recommend wearing a beanie, jacket and a pair of long pants.");
    break;

    case "rainy":
        console.log("Atleast it's not water restrictions, bring something.");
    break;

    default:
        console.log("DID YOU SEE THAT AS AN OPTION. YOU KNOW WHAT JUST KILL YOURSELF.");

}





