//Name Cases:Store a person's name in a variable,and then print that person's name in lowercase,uppercase,and title case.
var personName = "Maheen Zehra";
//in lowercase
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//title case
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
