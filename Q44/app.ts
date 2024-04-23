//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
//Call the function three times, using a different number of arguments each time.

//Define a function with a rest parameter that accepts items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a Sandwich with the following items:");

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("Now Enjoy Sandwich");
}

//Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken","Mayo","Egg","Cheese");
makeSandwich("Bread","Butter");
makeSandwich("Bread","Chicken","Mayo","Egg","Cheese","Butter","Lettuce","Tomato");
