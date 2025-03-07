//Great Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//Call show_magicians() to see that the list has actually been modified.
//Define the functions to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Functions to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"];
//Call make_great function to modify magicians names
var great_magicians = make_great(magician_names);
//Call show_magicians that show modified list of magicians
show_magicians(great_magicians);
