'use strict'

class Calculator {
  constructor () {
    this.result = 0
  }
  add (num) {
    this.result+=num
    return this
  }
  subtract (num) {
    this.result-= num
    return this
  }
  multiply (num) {
    this.result*= num
    return this
  }
  divide (num) {
    this.result/=num
    return this
  }
  square (num) {
    Math.pow(this.result, num)
    return this
  }
  squareRoot () {
    Math.sqrt(this.result)
    return this
  }
  reset(){
    this.result = 0
    return this
  }
  show(){
    console.log(this.result)
  }
}

// let calculator = new Calculator()
// calculator.add(10).subtract(2).show()

//-> main.js
module.exports = Calculator
