//Task 1: Product Price Management
//Declare an array prices using let and initialize it with at least five numerical values.
let prices = [15, 25, 30, 25, 10];
//Add a new price to the array.
prices.push(35);
//Remove the first price from the array.
prices.shift();
//Log the updated price list to the console.
console.log("Updated Price List: ", prices);


//Task 2: Modifying Customer Orders
//Declare an array orders with at least five numerical values representing quantities.
let orders = [3, 5, 7, 2, 4];
//Increase the third order quantity by 5.
orders[2] += 5;
//Calculate the total number of all orders.
let totalNumberofOrders = orders.reduce((total, quanity) => total + quanity, 0);
//Log the updated array and total order count to the console.
console.log("Updated Order List: ", orders);
console.log("Total Number of Orders: ", totalNumberofOrders);