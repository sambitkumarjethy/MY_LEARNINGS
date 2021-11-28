// 1.let and const
// var myname = "Sambit";
// console.log(myname);
// myname = "Sambitj";
// console.log(myname);

// let myname = "Sambit";
// console.log(myname);
// myname = "Sambitj";
// console.log(myname);

// const myname = "Sambit";
// console.log(myname);
// myname = "Sambitj";
// console.log(myname);
//FUNCTIONAL SCOPE AND BLOCK SCOPE
// function name1() {
//   if (1) {
//     let name3 = "sambit";
//     var name2 = "jethy";
//     const name4 = "Kumar";
//     console.log(name3);
//     console.log(name2);
//     console.log(name4);
//   }
//   // console.log(name3);
//   console.log(name2);
//   console.log(name4);
// }
// name1();

// let place = "Mumbai";
// if (1) {
//   let place = "Cuttack";
//   console.log(place);
// }
// console.log(place);

//2.Arrow Function
// -- ANNONIMUS FUNCTION
// var sum = function (a, b) {
//   // var a, b;
//   return a + b;
// };
// console.log(sum(3, 4));

// NORMAL FUNCTION
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(30, 40));

//3.FAT ARROW FUNCTION
// const sum = (a, b) => {
//   return a + b;
// };
// IF THE FAT ARROW FUNCTION HAS ONLY ONE RETURN STATEMENT RETURN KEYWORD IS NOT REQUIRED AS WELL AS CURLY BRASES
// const sum = (a, b) => a + b;
// console.log(sum(330, 400));

//4.FOR / OF

// const colors = ["blue", "green", "Yellow", "orrange"];
// for (i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//IN ES 6
//loop through array
// for (i of colors) {
//   console.log(i);
// }
//LOOP THROUGH STRING
// const fname = "SAMBIT";
// for (let i of fname) {
//   console.log(i);
// }

//4.DEFAULT PARAMETERS

//UNDEFINED CHECK IN ES 5
// function mult(a, b) {
//   console.log(b);
//   b = typeof b !== "undefined" ? b : 5;
//   console.log(b);
// }
// mult(3);

//UNDEFINED CHECK IN ES 6
// function mult(a, b = 7) {
//   return a * b;
// }
// console.log(mult(5));
// const div = (a = 100, b = 2) => a / b;
// console.log(div(70));

// 5. REST Operator
// const sum = (a, b) => {
//   console.log(a + b);
// };
// sum(3, 4, 5, 6, 7, 8, 9, 10);

// const sum = (...a) => {
//   // console.log(a);
//   console.log(...a);
// };
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// # WAP sum of 10 natural numbers
// const sum = (...a) => {
//   console.log(...a);
//   let total = 0;
//   for (let i of a) {
//     total += i;
//   }
//   console.log(total);
// };
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//EXAMPLE 2 2ND WAY
// const sum = (a, b, c, ...d) => {
//   console.log(a);
//   console.log(...d);
//   console.log(d);
//   console.log(d.length);
//   console.log(d.push("apple"));
//   console.log(...d);
// };
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "sambit");

//6.SPREAD OPERATOR
// let arr1 = [1, 2, 3];
// console.log(arr1);
// const arr2 = [4, 5, 6];
// console.log(arr2);
// // in ES 5
// // arr1 = arr1.concat(arr2);
// console.log(arr1);

// let arr3 = [...arr1, ...arr2, 7, 8, 9];
// console.log(arr3);

//EXAMPLE 2
// let color1 = ["blue", "orange", "green"];
// let color2 = color1;
// console.log(color1);
// console.log(color2);
// color2.push("black", "white");
// console.log(color2);
// console.log(color1); // ES 5 problem black and while puched to color1 also

//problem solved in es6

// let color1 = ["blue", "orange", "green"];
// let color2 = [...color1];
// console.log(color1);
// console.log(color2);
// color2 = ["yellow", ...color1, "black", "white"];
// console.log(color1);
// console.log(color2);

// 7.TEMPLATE LETRALS
// let fname = "sambit";
// let color = "yellow";
// console.log(`My name is  ${fname} and my fav color is ${color}`);

//8.ARRAY DESTRUCTURING

// let color1 = ["blue", "orange", "green", "pink"];
// console.log(color1[1]);
// let [a, b, c, d] = color1;
// console.log(c);
// console.log([a, , , d]);

// 9. Object Destructuring
// let data = {
//   place: "Mumbai",
//   color: "Yellow",
//   language: "javaScript",
// };
// let { place: city, color, language } = data;
// console.log(`My place is ${city} and my fav color is ${color}`);

// EXAMPLE 2
let data = {
  place: "Mumbai",
  color: "Yellow",
  language: "javaScript",
  food: {
    food1: "rice",
    food2: "chapati",
  },
};
// console.log(data.food.food2); In es5
// In ES6
// let { place, color, language, food } = data;
// console.log(color);
// console.log(food.food2);
// let { food1, food2 } = food;
// console.log(food1);

//10. NEW STRING METHODS
// let language = "JavaScript";
// console.log(`${language}`.includes("Script"));
// console.log(`${language}`.startsWith("Ja"));
// console.log(`${language}`.endsWith("opt"));
// console.log(`${language}`.repeat(20));

//11.New ARRAY METHODS

//  A.Array.from;
// const color = Array.from("purple");
// console.log(color);
// console.log(color.length);

// for (i of color) {
//   console.log(i);
// }

//B.Array.keys
// let colors = ["blue", "orange", "green"];
// const key = colors.keys();
// console.log(key);

// for (i of key) {
//   console.log(i);
// }

// 12.NEW MATH METHODS
console.log(33.33);
console.log(Math.trunc(33.33));
console.log(Math.trunc(-33.33));
console.log(Math.sign(-33.33));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(2));
console.log(Math.sqrt(4));
console.log(Math.cbrt(125));
console.log(Math.log2(2));
console.log(Math.log10(2));
