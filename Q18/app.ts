//Seeing the World:Think of at least five places in the world you'd like to visit.
//Store the locations in a array.Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in your alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list.Print the array to show that its order has changed.
//Reverse the order of your list again.Print the list to show it's back to its original order.
//Sort your array so its stored  in alphabetical order. Print the array to show that its order has been changed.
//Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed.

//Store the locations in a array.Make sure the array is not in alphabetical order.
let placeToVisit:string[] =["Iran","Dubai","Brazil","Pakistan","Malaysia"];

//Print your array in its original order.
console.log("Original order:",placeToVisit);

//Print your array in your alphabetical order without modifying the actual list.
console.log("Alphabetical order:", [...placeToVisit].sort());

//Show that your array is still in its original order by printing it.
console.log("Original order after sorting:",placeToVisit);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order:", [...placeToVisit].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log("Original order after reverse sorting:",placeToVisit);

//Reverse the order of your list.Print the array to show that its order has changed.
placeToVisit.reverse();
console.log("Reversed order:", placeToVisit);

//Reverse the order of your list again.Print the list to show it's back to its original order.
placeToVisit.reverse();
console.log("Back to original order:", placeToVisit);

//Sort your array so its stored  in alphabetical order. Print the array to show that its order has been changed.
placeToVisit.sort();
console.log("Sorted in alphabetical order:", placeToVisit);

//Sort to change your array so it's stored in reverse alphabetical order. Print the list to show that its order has changed.
placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placeToVisit);