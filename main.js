'use strict'

const Calculator = require("./calculator.js")

var calculator = new Calculator();

calculator.value = 10;
calculator.add(5).square(2).squareRoot().divide(5).multiply(10).subtract(1).add(calculator.pi);

console.log(calculator.value);

calculator.reset();
console.log(calculator.value);
