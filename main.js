"use strict";

import { add, subtract, breadPrices } from "./utils/utils.js"; // for the modules example
import actors from "./general/players.js"; // for the modules example

console.log(breadPrices);

// Anonymous Functions

// #1
// var greet = function () {
//   console.log("Welcome to GeeksforGeeks!");
// };

// greet();
// Output: "Welcome to GeeksforGeeks!"

// #2
// setTimeout(function () {
//   console.log("Welcome to GeeksforGeeks!");
// }, 2000);

//arrow function vs traditional function

// ES5
// var funcRes = function (x, y) {
//   console.log(x, y, "hello");
//   return x * y;
// };

// funcRes(2, 3);

// ES6 - Arrow function
// const funcRes = (x, y) => {
//   console.log(x, y, "hello");
//   return x * y;
// };

// funcRes(2, 3);
// console.log(funcRes); //funcRes is a function

// if we have only one line of code to execute we can skip the curly braces ( {} ) and the "return" statment

// var funcRes2 = function (x, y) {
//   return x * y;
// };

// funcRes2(2, 3);

// const funcRes2 = (x, y) => x * y;

// the same like:
// const funcRes2 = (x, y) => {
//   return x * y;
// };

// funcRes(2, 3);

// const funcRes5 = (x, y) => {
//   let z = 5;
//   return x * y + 5;
// };

// const funcRes3 = (x, y) => console.log(x, y);

// funcRes3(4, 5);

// Destructuring

const arr = [10, 20, 43, 66, 8];
// let x = arr[0];
// let y = arr[1];

let a, b, c, rest;
// [a, b, c] = arr;
// console.log(a);

// Expected output: 10

// console.log(b);
// Expected output: 20

[a, b, c, ...rest] = [10, 20, 30, 40, 50, 60, 90];
console.log(rest);
console.log(rest[0]);
console.log(a, "a");

// [a, b, a, ...rest] = [10, 20, 30, 40, 50, 60, 90];
// a = 10;
// a = 30;
// [a, b, c, ...rest] = [10, 20];
// console.log(rest, "rest");

// const nums = [1, 2, 3, 4, 5];
// let m, n, g;
// [m, , n, , g] = nums;
// console.log(m); // Output: 1
// console.log(n); // Output: 3
// console.log(g); // Output: 5

const userNote = {
  id: 1,
  title: "My first note",
  date: "01/01/1970",
};

// console.log(userNote.title);
// const userTitle = userNote.title; // "My first note"

// const { id, title, date } = userNote;

// console.log(title);
// Output: "My first note"

const extendNote = {
  id2: 1,
  title2: "My second note",
  date2: "01/01/1999",
  desc: "hello",
  age: 45,
};

const { id2, title2, ...restObj } = extendNote;

// console.log(title2);
// console.log(restObj, "restObj");

// Modules - importing and exporting

//don't forget to uncomment the import statement in the beginning of the file
console.log(add(1, 2), "add"); // Output: 3
console.log(subtract(5, 3), "subtract"); // Output: 2
console.log(actors[1]);
