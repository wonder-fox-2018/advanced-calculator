'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator(10)
console.log(calc.add(5).subtract(1).multiply(2).divide(2).square(2).squareRoot().num)
