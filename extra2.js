/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
let positive = [];
for (i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    positive.push(i);
  }
}
/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
let mySettings = { name: "Giovanni", surname: "Urso", email: "giovannim.urso@outlook.it", address: "via della salute", age: 30 };
/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
let mySetting = { name: "Giovanni", surname: "Urso", email: "giovannim.urso@outlook.it", address: "via della salute", age: 30, haveDriveLicence: new Boolean(true) };
/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete mySettings.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
const lidiaSettings = { name: "Lidia", surname: "Kovac", email: "lidiakovac@outlook.it", address: "via dei terremoti", age: "Dont know it" };
if (mySettings.email !== lidiaSettings.email) {
  console.log("yes is different");
}
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
let totalShoppingCart;
let shipping;
let total;
if (totalShoppingCart >= 50) {
  shipping = 0;
  total = totalShoppingCart;
} else {
  shipping = 10;
  total = totalShoppingCart + shipping;
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
let totalShoppingCart1;
let shipping1;
let total1;
if (totalShoppingCart >= 50) {
  shipping = 0;
  total = totalShoppingCart - (totalShoppingCart * 20) / 100;
} else {
  shipping = 10;
  total = totalShoppingCart + shipping - (totalShoppingCart * 20) / 100;
}
/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
let bestCar = {
  brand: "ferrari",
  model: "testanera",
  licensePlate: "cj511aa",
};
console.log(bestCar);
let car2 = {};
Object.assign(car2, bestCar);
car2.licensePlate = "aj555pi";
console.log(car2);

let car3 = {};
Object.assign(car3, bestCar);
car3.licensePlate = "lf432vv";
console.log(car3);

let car4 = {};
Object.assign(car4, bestCar);
car4.licensePlate = "or799em";
console.log(car4);

let car5 = {};
Object.assign(car5, bestCar);
car5.licensePlate = "gb121ce";
console.log(car5);

let car6 = {};
Object.assign(car6, bestCar);
car6.licensePlate = "rm888bp";

console.log(car6);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

let carForRent = [
  { brand: "ferrari", model: "testanera", licensePlate: "cj511aa" },
  { brand: "ferrari", model: "testanera", licensePlate: "aj555pi" },
  { brand: "ferrari", model: "testanera", licensePlate: "lf432vv" },
  { brand: "ferrari", model: "testanera", licensePlate: "or799em" },
  { brand: "ferrari", model: "testanera", licensePlate: "gb121ce" },
  { brand: "ferrari", model: "testanera", licensePlate: "rm888bp" },
];
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
carForRent.shift();
carForRent.pop();
console.log(carForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */
console.log(typeof bestCar, typeof bestCar.licensePlate, typeof bestCar.brand);
/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */
let carForSale = [];

carForSale.push(bestCar, car2, car3);
console.log(carForSale);

let totalCars = [];
totalCars.push(...carForSale, ...carForRent);
console.log(totalCars);

/* EXERCISE 13

 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
carForSale.forEach((element) => {
  for (const key in element) {
    console.log(`${key} : ${element[key]}`);
  }
});
