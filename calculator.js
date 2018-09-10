'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.result = num
  }
  add (num) {
    this.result += num
    return this
  }
  subtract (num) {
    this.result -= num
    return this
  }
  multiply (num) {
    this.result *= num
    return this
  }
  divide (num) {
    this.result /= num
    return this
  }
  square (num) {
    // Math.pow(this.result, num)
    for (let i = 1; i < num; i++) {
      this.result *= this.result
    }
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }
  circle(){
    this.result =  2 * 3.14 * this.result
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


var count  = new Calculator(5).add(5).add(5).subtract(5).multiply(10).divide(10).square(2).squareRoot().circle()

console.log(count.result);







module.exports = Calculator
