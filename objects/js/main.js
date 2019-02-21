// ====== Objects ======/

// Object - oriented programming(OOP for short) is a way to write programs using obkects. Using OOP, you write, create, and modify objects

// Creating an Object
// Here is the JavaScript representation of a blue Bic ballpoint pen.

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

// You can access the value of its properties using dot notation such as myObject.myProperty.

console.log(pen.type,pen.color,pen.brand);

console.log("The" + " pen we using is a " + pen.type + " which is " + pen.color + " made by " + pen.brand)

let cake = {
    flavor: "chocolate",
    price: "R1000",
    layers: "6 layers",
    occasion: "funeral"

};

console.log("The " + cake.occasion + " cake" + " will be " + cake.flavor + " flavored" + " with " + cake.layers + " and the price is " + cake.price)


// this is how you change the property without scrolling up to the top of ur code  

cake.occasion = "wedding";
cake.layers = 6 * 4;
console.log("The " + cake.occasion + " cake" + " will be " + cake.flavor + " flavored" + " with " + cake.layers + " and the price is " + cake.price)  

// methods on objects

function describe(cake) {
    var description = "The " + cake.occasion + " cake has a " + cake.flavor + " flavor, " + cake.layers + " layers, and costs " + cake.price + ".";
    return description;
}
console.log(describe(cake));

// an alternative  method

let cake2 = {
    flavor: "chocolate",
    price: "R10000",
    layers: "90 layers",
    occasion: "funeral",

    // Describe the cake
    describe: function(){
        var description = "The " + this.occasion + " cake has a " + this.flavor + " flavor, " + this.layers + " layers, and costs " + this.price + ".";
        return description;
    }

};

console.log(cake2.describe());
    
let intern = {
    position: "intern",
    salary: "R8000",
    company: "Eskom",
    name: "Tohier",
    age: "19 years old",

    describe: function() {
        var description = "My name is " + this.name + " and I am " + this.age + "." + "I am an " + this.position + " at " + this.company + " my salary is " + this.salary + " per month.";
        return description;
    }
};

console.log(intern.describe());

