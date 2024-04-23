//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printe

let userNames = ["Ali","Masooma","Asad","Admin","Maheen"]

//Remove all values from our Array now our Array is empty
userNames = []

//if statement for checking length of our Array is empty?

if(userNames.length === 0){console.log("Array is empty.We need to find some users!")}else{//Using ForEach Loop on Array
userNames.forEach(oneUser =>{if(oneUser === "Admin"){console.log(`Hello ${oneUser},would you like to see a status report?`)}else{console.log(`Hello ${oneUser},thank you for logging in again.`)}})
}