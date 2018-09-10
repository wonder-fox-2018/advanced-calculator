'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
  }
  add (operandNum) {
    this.num += operandNum
    return this
  }
  subtract (operandNum) {
    this.num -= operandNum
    return this
  }
  multiply (operandNum) {
    this.num *= operandNum
    return this
  }
  divide (operandNum) {
    this.num /= operandNum
    return this
  }
  square () {
    this.num = this.num * this.num
    return this
  }
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }
  toThePower (operandNum) {
    this.num = this.num ** operandNum
    return this
  }
  circleArea() {
    const pi = Math.PI
    this.num = pi * this.square().num
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
