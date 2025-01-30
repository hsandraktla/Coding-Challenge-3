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


//Task 3: Employee Performance Tracking
//Declare an object employee with properties: name, role, performanceScore, and isActive.
let employee = {
    name: "Zachary Keenan",
    role: "Intern",
    performanceScore: 7.5,
    isActive: true,
};
//Update the performanceScore property.
employee.performanceScore = 8.5;
//Add a new property promotionEligible with a boolean value.
employee.promotionEligible = true;
if (employee.performanceScore <= 8.0) {
    employee.promotionEligible = false;
};
//Log the updated employee object to the console.
console.log("Updated Employee Performance Tracking: ", employee);


//Task 4: Customer Feedback Records
//Declare an array feedback containing at least three objects, each with properties: customerName, feedbackText, and rating.
let feedback = [
    {customerName: "Kwon Jiyong", feedbackText: "Excellent service!", rating: 10},
    {customerName: "James Bond", feedbackText: "Needs better service.", rating: 6},
    {customerName: "Kendall Rayne", feedbackText: "Disappointed. Will not be back.", rating: 2}
];
//Add a new feedback object to the array.
feedback.push(
    {customername: "Lauren Hala", feedbackText: "It's okay. Needs improvements.", rating: 5}
);
//Log the entire feedback list to the console. 
console.log("Customer Feedback Records: ", feedback);
