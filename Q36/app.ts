//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it.
//Call the function.

function make_shirt (size: string, printMessage: string){
    console.log(`You selected ${size} size shirt and ${printMessage} printed on it.`)
}

make_shirt("Small", "Stay Happy");
make_shirt("Large", "Keep Smiling");