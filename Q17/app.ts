//Shrinking Guest List:You just found out that your new dinner table won't arrive in time for the dinner, and you have space for only two Guest.
//Start with your program from Exercise 16.Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove Guest from your list one at a time until only two names remain in your list.Each time you pop a name from your list, print a message to that person letting them know you're sorry you can't invite them to dinner.
//print a message to each of the two people still on your list,letting them know they're still invited.
//Remove the last two names from your list, so you have an empty list.Print your list to make sure you actually have an empty list at the end of your program.

let guestArr = ["Asad", "Masooma", "Ali", "Ghazala"];
let canNotAttend = "Ali"
let newGuest = "Farman"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)




let guestbeginning = "Farzan"
guestArr.unshift(guestbeginning);
console.log(guestArr)


let middleguest = "Zehra"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleguest)
console.log(guestArr)


guestArr.push("Abbas")
console.log(guestArr)

console.log("we can invite only two people for dinner!")

while(guestArr.length>2){let removeguest = guestArr.pop
();console.log(`\nSorry ${removeguest} we can't invite you to dinner!`);}

guestArr.map((items)=> console.log (`\n${items} You are still invited to dinner!`));

guestArr.pop();
guestArr.pop();
console.log(guestArr);
