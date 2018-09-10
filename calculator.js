'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }
  add (number) {
    this.number += number
    return this
  }
  subtract (number) {
    this.number -= number
    return this
  }
  multiply (number) {
    this.number *= number
    return this
  }
  divide (number) {
    this.number /= number
    return this
  }
  square (number) {
    this.number = Math.pow(this.number, number)
    return this
  }
  squareRoot (number) {
    this.number = Math.sqrt(this.number, number)
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
