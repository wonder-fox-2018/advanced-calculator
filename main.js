'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

var calc = new Calculator(3)

console.log(calc.square(2).add(54).subtract(13).multiply(1.5).divide(3).squareRoot().num);