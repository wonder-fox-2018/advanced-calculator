'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (add) {
    this.number = this.number + add
    return this
  }
  subtract (substract) {
    this.number = this.number - substract
    return this
  }
  multiply (multiply) {
    this.number = this.number * multiply
    return this
  }
  divide (divide) {
    this.number = this.number / divide
    return this
  }
  square (square) {
    this.number = Math.pow(this.number,square)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
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

var calc1 = new Calculator(7)
console.log(calc1.add(3).subtract(5).multiply(2).divide(2).square(5)) // 3125

module.exports = Calculator
