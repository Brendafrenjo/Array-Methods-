let numbers = [1, 3, 8, 11, 5, 4, 19, 38, 12, 26];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

let myName = "Brenda Adhiambo";
let letters = [...myName].join("-");

let fruits = ["apples", "pineapples", "mangoes", "pawpaws", "bananas"];
let vegetables = ["cabbage", "potatoes", "spinach", "tomatoes", "onions"];

let foods = [...fruits, ...vegetables, "eggs", "milk", "sugar"];

let content = document.querySelector("#main");
content.innerHTML = foods;
