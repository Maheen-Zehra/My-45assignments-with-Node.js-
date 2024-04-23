//Stripping Names:Store a person's name, and include some whitespace characters at the beginning and 
//end of the name.Make sure you use each character combination,"\t" and "\n" at least once.
//Print the name once, so the whitespace around the name is displayed.Then print the name after  
//stripping the whitespaces.

let personName: string ='\n\t MAHEEN ZEHRA\t\n';
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);