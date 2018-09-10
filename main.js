'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
const calculator = new Calculator(1)

console.log(calculator.add(2).subtract(1).multiply(11).divide(2).square().squareRoot().num)

const calculator2 = new Calculator(3)
console.log(calculator2.toThePower(3).num)
calculator2.subtract(20)
console.log(calculator2.circleArea().num)