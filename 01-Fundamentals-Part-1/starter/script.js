// let js = "amazing";
// // if (js === "amazing") alert("Javascript is FUN!");
// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");

// // Values and variables
// let firstName = "Jonas";
// console.log(firstName);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// const birthYear = 1991;
// let age = 30;

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Operators

// const now = 2037;
// const ageMe = now - 1991;
// const ageYou = now - 1995;
// console.log(ageMe, ageYou);
// console.log(ageMe * 2, ageYou / 10, 2 ** 3);

// // String concatenation
// firstName = "Haseeb";
// lastName = "Raja";
// console.log(firstName + " " + lastName);

// // Comparison
// console.log(ageMe > ageYou);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Operator precedence
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const now = 2037;
// const ageMe = now - 1991;
// const ageYou = now - 1995;
// const avgAge = (ageMe + ageYou) / 2;
// console.log(avgAge);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// const weightMark = 78;
// const weightJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / heightJohn ** 2;
// console.log(bmiJohn, bmiMark);

// isHigh = bmiMark > bmiJohn;
// console.log(isHigh);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Template strings

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String with
// multiple
// lines`);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// if-else

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can have driving license 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah has to wait another ${yearsLeft} years 🙃`);
// }

// let century;
// const birthYear = 1991;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// ///////////////////////////////////////////////////////////////////////////////////////////////

// const weightMark = 78;
// const weightJohn = 92;
// const heightMark = 1.69;
// const heightJohn = 1.95;

// const bmiMark = weightMark / heightMark ** 2;
// const bmiJohn = weightJohn / heightJohn ** 2;

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is greater than John's (${bmiJohn})`);
// } else {
//   console.log(`Mark's BMI (${bmiMark}) is lower than John's (${bmiJohn})`);
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////

// Type conversion
// const inputYear = "1991";
// console.log(inputYear + 18); // returns string
// console.log(Number(inputYear) + 18); // typer conversion

// console.log(Number("Jonas"));

// console.log(typeof String(23));

// // Type coercion
// console.log("I'm " + 23 + " years old."); // "+" -> number to strings
// console.log("I'm " + "23" + " years old.");

// console.log("23" - "10" - 3); // "-" -> strings to numbers
// console.log("23" * "2");

// let n = "1" + 1;
// n -= 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");

///////////////////////////////////////////////////////////////////////////////////////////

// Truthy and falsy values
// console.log(Boolean(0)); // falsy value
// console.log(Boolean(undefined)); // falsy value
// console.log(Boolean("Haseeb")); // truthy value
// console.log(Boolean({})); // truthy value

// const money = 0;
// if (money) {
//   console.log("Don't spend it all! "); // falsy
// } else {
//   console.log("You should get a job!");
// }

// let height;  // undefined
// if (height) {
//   console.log("YAY! Height is defined!");
// } else {
//   console.log("Height is UNDEFINED!");
// }

///////////////////////////////////////////////////////////////////////////////////////////////

// const age = "18";
// if (age == 18) console.log("You just became an adult. (loose)");
// if (age === 18) console.log("You just became an adult. (strict)");

// // console.log("18" == 18);
// // console.log("18" === 18); // no type coercion

// const favorite = Number(prompt("What is your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// // if (favorite == 25) console.log("Cool! 25 is amazing number.");
// if (favorite === 25) {
//   console.log("Cool! 25 is amazing number.");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number.");
// } else {
//   console.log("Number is not 25 or 7.");
// }

// if (favorite !== 25) console.log("Why not 25?");

///////////////////////////////////////////////////////////////////////////////////////////////

// Boolean logic

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense || hasGoodVision);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive.");
// // }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive.");
// }

// Coding challenfe 3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy!");
// } else {
//   console.log("Both win the trophy.");
// }

// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy!");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy!");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy.");
// } else {
//   console.log("No one wins the trophy.");
// }

///////////////////////////////////////////////////////////////////////////////////////////////

// Switch statement

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend!");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend!");
// } else {
//   console.log("Not a valid day!");
// }

///////////////////////////////////////////////////////////////////////////////////////////////

// Conditional operator

// const age = 23;
// age >= 18
//   ? console.log("I like to drink wine.")
//   : console.log("I like to drink water.");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
