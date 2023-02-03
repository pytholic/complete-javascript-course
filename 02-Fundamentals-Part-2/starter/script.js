"use strict";

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true;
// if (hasDriversLicence) console.log("I can drive!");

// const interface = "Audio";

//////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONS //

// function logger() {
//   console.log("My name is Jonas");
// }

// // calling, running or invoking
// logger();

// function fruitProcesser(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcesser(5, 0);
// console.log(appleJuice);

// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// Function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// const age1 = calcAge1(1991);
// console.log(age1);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// // Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));

// Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcesser(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcesser(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike"));

// Coding challenge

// const calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgDolphins * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgDolphins <= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins!");
//   }
// }

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// checkWinner(avgDolphins, avgKoalas);

//////////////////////////////////////////////////////////////////////////////////////////

// ARRAYS //

// way 1
// const friends = ["Michael", "Steven", "Peter"]; // literal syntax
// console.log(friends);
// console.log(friends[0]);

// // way 2
// const years = new Array(1991, 1995, 2000, 2020);
// console.log(years);

// console.log(friends.length);
// console.log(friends[friends.length - 1]); // last element

// Add elements

// const friends = ["Michael", "Steven", "Peter"];
// const newlength = friends.push("Jay"); // last element
// console.log(friends);
// console.log(newlength);

// friends.unshift("John"); // first element
// console.log(friends);

// // Remove elements
// friends.pop(); // last element
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift("Michael"); // first element
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Steven"));

// Coding challenge

// function calcTip(bill) {
//   const tip = 50 < bill < 300 ? 0.15 * bill : 0.2 * bill;
//   return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

//////////////////////////////////////////////////////////////////////////////////////////

// Objects

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedmann",
//   age: 35,
//   friends: ["Michael", "Peter"],
// };

// console.log(jonas);
// console.log(jonas.firstName);
// console.log(jonas["firstName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // const interestedIn = prompt("What do you want to know about Jonas?");
// // console.log(jonas[interestedIn]);

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonas";
// console.log(jonas);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedmann",
//   birthYear: 1991,
//   friends: ["Michael", "Peter"],
//   friends: ["Michael", "Peter"],
//   hasDriverLisence: true,

//   // calAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   calAge: function () {
//     // console.log(this);
//     //return 2037 - this.birthYear;
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };

// // console.log(jonas.calAge(jonas.birthYear));
// // console.log(jonas.calAge());
// // jonas.age = jonas.calAge();

// jonas.calAge();
// console.log(jonas.age);

// Coding challenge

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// console.log(mark.bmi);

// john.calcBMI();
// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}`
//   );
//   } else if (ark.bmi < john.bmi) {
//   console.log(
//     `${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`
//   );
//   }

//////////////////////////////////////////////////////////////////////////////////////////

// LOOPS //

// for loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repition ${rep}.`);
// }

// const jonas = [
//   "Jonas",
//   "Schmedmann",
//   2037 - 1991,
//   "teacher",
//   ["Mochael", "Steven"],
//   true,
// ];

// const types = [];

// // for (let i = 0; i < jonas.length; i++) {
// //   console.log(jonas[i], typeof jonas[i]);
// //   // types[i] = typeof jonas[i];
// //   types.push(typeof jonas[i]);
// // }

// console.log(types);

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;
//   console.log(jonas[i]);
// }

// Looping backwards

// const jonas = [
//   "Jonas",
//   "Schmedmann",
//   2037 - 1991,
//   "teacher",
//   ["Mochael", "Steven"],
//   true,
// ];

// for (let i = jonas.length; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// Loop in loop

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`-------Starting exercide ${exercise}---------`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repitition ${rep}!`);
//   }
// }

// While loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repition ${rep}.`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repition ${rep}.`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1; // have to update value to avoid infinite loop
//   if (dice === 6) console.log("Loop ending...");
// }

// Coding challenge

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
