'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

var count  = new Calculator(5).add(5).add(5).subtract(5).multiply(10).divide(10).square(2).squareRoot().circle()
console.log(count.result);