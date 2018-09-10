'use strict'

const Calculator = require("./calculator.js")


// execute function on calculator.js in here
const calculator = new Calculator(5).add(9).subtract(4).multiply(10).divide(20).square(2).add(56).squareRoot(2)


console.log(calculator)