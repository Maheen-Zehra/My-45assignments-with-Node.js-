//More Conditional Tests:You don't have to limit the number of tests you create to 10.If you want to try more comparisons, write more tests.Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings.
//Tests using the lowercase function.
//Numerical tests involving equality and inequality,greater than and less than,greater than or equal to, and less than or equal to.
//Tests using "and" and "or" operators.
//Test whether an item is in a array.
//Test whether an item is not in a array.
//Tests for equality and inequality with strings.
var fruit = "grapes";
//Test for equality
console.log("Is fruit is equal to grapes?");
console.log(fruit == "grapes");
//Test for inequality
console.log("\nIs fruit is not equal to grapes?");
console.log(fruit != "grapes");
//Tests using the lowercase function.
var uppercaseApple = "APPLE";
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical tests involving equality and inequality,greater than and less than,greater than or equal to, and less than or equal to
var number1 = 10;
var number2 = 30;
//Equality 
console.log("\nIs number1 is equal to number2?");
console.log(number1 == number2);
//Inequality
console.log("\nIs number1 is not equal to number2?");
console.log(number1 != number2);
//Greater than
console.log("\nIs number2 is greater than number1?");
console.log(number2 > number1);
//Less than
console.log("\nIs number1 is less than number2?");
console.log(number1 < number2);
//Greater than or equal to
console.log("\nIs number2 is greater than or equal to number1?");
console.log(number2 >= number1);
//Less than or equal to 
console.log("\nIs number1 is less than or equal to number2?");
console.log(number1 <= number2);
//Tests using "and" and "or" operators.
var number3 = 15;
//Using && (AND) operators
console.log("\n number3 is not equal to 20 and number3 is greater than 10");
console.log(number3 != 20 && number3 > 10);
console.log("\number3 is not equal to 20 and number3 is less than 10");
console.log(number3 != 20 && number3 < 10);
//Using || (OR) operators
console.log("\n number3 is greater than 20 or number3 is equal to 15");
console.log(number3 > 20 || number3 == 15);
console.log("\n number3 is greater than 20 or number3 is not equal to 15");
console.log(number3 > 20 || number3 != 15);
//Test whether an item is in a array.
var fruitsName = ["Mango", "Banana", "Orange"];
console.log("\n Is Orange include in my fruitsName array?");
console.log(fruitsName.includes("Orange"));
//Test whether an item is not in a array.
console.log("\n Is Orange is not include in my fruitsName array?");
console.log(!fruitsName.includes("Orange"));
