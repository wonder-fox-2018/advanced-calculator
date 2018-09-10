'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let start = new Calculator();
console.log(start.angkaAwal(6).add(7).subtract(3).multiply(2).divide(5).square(2));